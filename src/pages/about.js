// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! My name is Natalie, and I am a people person who loves to program. For me, the best part of programming is bringing ideas to life on the internet.</p>
    </Layout>
  )
}

// Apply metadata with Gatsby Head API
export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default AboutPage