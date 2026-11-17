# Kantione

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Agent-facing resources

The static build includes `robots.txt`, `sitemap.xml`, `llms.txt` and a Markdown
homepage at `/index.md`. Keep the sitemap and Markdown homepage in sync with
the HTML pages when content changes. The structured data identifies Haus am
Waldsee and Eleni Poulou separately from the Kantione concert series; the
venue's legal information is not a statement of Kantione's own terms.

On Apache, deploy the generated `.htaccess` along with the rest of `dist/`.
The homepage is served as HTML; the Markdown version is available directly at
`/index.md`. Remove any previously deployed `index.var` file. The `.htaccess`
directives require `mod_mime`, `mod_dir`, and permission to use them; the Link
header also requires `mod_headers`. Astro's static preview and other hosting
platforms do not apply Apache configuration. Verify the homepage and Markdown
page on the deployed host after deployment.

The site registers a read-only WebMCP tool in browsers that support the API.
It does not currently run an HTTP MCP server, so it does not publish an MCP
server card. A card should only be added once an actual MCP endpoint exists.
