import * as React from 'react'
// Follow the steps below to add a list of post filenames to your blog page.
// step 1: import graphql tag from the Gatsby package.
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

// step 3: add in the data prop to the function defenition.
// then replace the placeholder <p> element with a list of the filenames for your posts.
// Use js array .map() method to iterate over the nodes array and render the filename for each post. 
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

// step 2: define and export your page query. Copy the query you built in GraphiQL.
export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage