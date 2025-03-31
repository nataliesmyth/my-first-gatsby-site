import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage 
        alt="A white shih tzu posing between two roses looking happy"
        src="./../images/puppy.webp"
      />
    </Layout>
  )
}

// Apply metadata with Gatsby Head API
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage