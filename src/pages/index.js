import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout banner={ true }>
    <h1>Hi people, Hello world.</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <div style={{
      marginBottom: '100px'
    }}>
      { data.allMarkdownRemark.edges.map(({ node }, index) => {
        return (<div key={index}>
          <Link to={ node.fields.slug }>{ node.frontmatter.title }</Link>
        </div>)
      }) }
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title,
            date,
            author
          },
          fields {
            slug
          }
        }
      }
    }
  }
`
