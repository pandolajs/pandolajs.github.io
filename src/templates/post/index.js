/**
 * @fileOverview markdown post page template
 * @author sizhao | 870301137@qq.com
 * @version 1.0.0 | 2018-07-24 | sizhao     // 初始版本
*/

import React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import styles from './index.module.less'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className={ styles.post }>
        <h1>{ post.frontmatter.title }</h1>
        <div dangerouslySetInnerHTML={ { __html: post.html } }></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html,
      frontmatter {
        title
      }
    }
  }
`