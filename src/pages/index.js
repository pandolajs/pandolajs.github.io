import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from 'react-emotion'

import Layout from '../components/layout'

const panelClass = css`
  padding: '50px 0';
`

const IndexPage = ({ data }) => (
  <Layout banner={ true }>
    <div className="panel">

    </div>
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
