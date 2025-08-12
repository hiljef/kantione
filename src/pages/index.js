// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="kantione">
        a new concert series curated and organised by <b>Eleni Poulou</b>
        <br /><br />
        <b>kantione</b> was launched in 2024 to present new forms of classical music at <b>Haus am Waldsee</b> in Berlin-Zehlendorf
        <br /><br />
        each concert features new combinations of artists, premiering their work in an intimate setting
        <br /><br />
        most of the musicians have already made music together from classical to jazz, improvised to folk, as well being experienced performers of experimental music in an art context with artists such as CC Hennix, Rebecca Horn, Anselm Kiefer and Anri Sala
        <br /><br />
        they can usually heard on big stages such as the Berlin Philharmonic, Konzerthaus, at jazz clubs and international festivals, seldom can their art be enjoyed close up in this way
         <br /><br />
         as proven in the first series in 2024, this form of concert appeals to a wide and diverse public, presented in a contemporary art context
         <br /><br />
         thanks to the generous support of the friends and patrons of Haus am Waldsee, the series continues in 2025, beginning on 21 August
         <br /><br />
         <a href="https://hausamwaldsee.de/freunde-und-foerderer/" target="_blank" rel="noopener noreferrer">hausamwaldsee.de/freunde-und-foerderer/</a>
         <br /><br />
         <b>Haus am Waldsee</b><br />
	 Argentinische Allee 30<br />
         14163 Berlin-Zehlendorf
         <br /><br />
         Bus<br />
	 118  Rathaus Zehlendorf<br />
	 622 / X11 Krumme Lanke
	 <br /><br />
	 Bahn<br />
	 U3 Krumme Lanke<br />
	 S1 Mexikoplatz
	 <br /><br />
	 <a href="https://hausamwaldsee.de/" target="_blank" rel="noopener noreferrer">hausamwaldsee.de</a>
	<br /><br /><br /><br />
        </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>kantione</title>


// Step 3: Export your component
export default IndexPage
