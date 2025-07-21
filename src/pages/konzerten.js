// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const KonzertenPage = () => {
  return (
    <main>
      <Layout pageTitle="konzerten">
      <p>2025</p>
      </Layout>
    </main>
  )
}

export const Head = () => <title>konzerten</title>

// Step 3: Export your component
export default KonzertenPage
