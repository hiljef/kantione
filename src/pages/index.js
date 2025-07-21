// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="kantione">
        <p> a new concert series curated and organised by <b>Eleni Poulou</b> </p>
         <p> <b>Kantione</b> was launched in 2024 to present new forms of classical music at <b>Haus am Waldsee</b> in Berlin-Zehlendorf</p>

        </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>kantione</title>

// Step 3: Export your component
export default IndexPage
