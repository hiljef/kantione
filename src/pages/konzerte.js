// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const KonzertePage = () => {
  return (
    <main>
      <Layout pageTitle="konzerte">
      	2025<br />
      	<p><b>Thursday 21 August</b><br />
       	7pm<br /><br />
       	<b>Wabi Sabi Barock</b>
       	<br /><br />
	Hilary Jeffery – trombone, trumpet<br />
	Martin Heinze – double bass
	<br /><br />
	The duo Martin Heinze and Hilary Jeffery interpret early music in a distinctive, open style, drawing on the 					Japanese concept of <i>Wabi Sabi</i> - a notion that values imperfection, asymmetry, roughness, irregularity, and simplicity. In this concert, they present new versions of Orlando di Lasso’s <i>Cantione Sine Textu</i> together with a revised version of their signature piece <i>Wabi Sabi à la Ortiz</i>.
	<br /><br />
       </p>
      </Layout>
    </main>
  )
}

export const Head = () => <title>konzerte</title>

// Step 3: Export your component
export default KonzertePage
