import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import test from 'node:test';
import { runInNewContext } from 'node:vm';

const read = (path) => readFile(new URL(`../dist/${path}`, import.meta.url), 'utf8');

test('the deployed homepage defaults to HTML instead of a type map', async () => {
  const config = await read('.htaccess');
  assert.match(config, /^DirectoryIndex\s+index\.html\s*$/m);
  assert.doesNotMatch(config, /^\s*AddHandler\s+type-map\b/m);
  await assert.rejects(access(new URL('../dist/index.var', import.meta.url)), { code: 'ENOENT' });
});

test('discovery files describe the published pages', async () => {
  const [robots, sitemap, llms] = await Promise.all([
    read('robots.txt'), read('sitemap.xml'), read('llms.txt')
  ]);
  assert.match(robots, /Content-Signal:\s*search=yes,\s*ai-train=no/i);
  assert.match(robots, /Sitemap:\s*https:\/\/kanti\.one\/sitemap\.xml/i);
  assert.deepEqual([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]), [
    'https://kanti.one/', 'https://kanti.one/concerts/', 'https://kanti.one/archive/'
  ]);
  for (const path of ['/', '/concerts/', '/archive/']) {
    assert.ok(llms.includes(`https://kanti.one${path}`));
  }
});

test('pages have canonical URLs and descriptions, and homepage has structured data', async () => {
  for (const [file, canonical] of [
    ['index.html', 'https://kanti.one/'],
    ['concerts/index.html', 'https://kanti.one/concerts/'],
    ['archive/index.html', 'https://kanti.one/archive/']
  ]) {
    const html = await read(file);
    assert.match(html, /<meta name="description" content="[^"]+">/);
    assert.ok(html.includes(`<link rel="canonical" href="${canonical}">`));
  }
  const html = await read('index.html');
  const json = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/);
  assert.ok(json);
  const graph = JSON.parse(json[1])['@graph'];
  assert.ok(graph.some((node) => node['@type'] === 'Organization' && node.sameAs?.length));
  assert.ok(graph.some((node) => node['@type'] === 'WebSite'));
  assert.ok(graph.some((node) => node['@type'] === 'CreativeWork'));
});

test('WebMCP tool registers when available and remains safe without it', async () => {
  const html = await read('index.html');
  const script = [...html.matchAll(/<script type="module">(.*?)<\/script>/gs)]
    .map((match) => match[1]).find((content) => content.includes('get_kantione_information'));
  assert.ok(script);
  let tool;
  runInNewContext(script, { navigator: { modelContext: { registerTool: (value) => { tool = value; } } } });
  assert.equal(tool.name, 'get_kantione_information');
  assert.equal(tool.inputSchema.type, 'object');
  assert.match(tool.execute().content[0].text, /https:\/\/kanti\.one\/concerts\//);
  assert.doesNotThrow(() => runInNewContext(script, { navigator: {} }));
});
