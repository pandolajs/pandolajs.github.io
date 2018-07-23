/**
 * @fileOverview gatsby node generator
 * @author sizhao | 870301137@qq.com
 * @version 1.0.0 | 2018-07-23 | sizhao    // 初始版本
*/

const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { internal: { type } = {}, parent } = node
  const { createNodeField } = actions
  if (type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: `docs` })
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/post.js'),
          context: {
            slug: node.fields.slug
          }
        })
      })
      resolve()
    })
  })
}