// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <Link to="/">Back to Home</Link>
      <p>Hi there! My name is Natalie, and I am a people person who loves to program. For me, the best part of programming is bringing ideas to life on the internet.</p>
    </main>
  )
}

// Apply metadata with Gatsby Head API
export const Head = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="Learn more about Natalie, a people person who loves to program." />
  </>
)

// Step 3: Export your component
export default AboutPage