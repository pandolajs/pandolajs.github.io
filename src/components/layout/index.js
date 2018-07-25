/**
 * @fileOverview 页面布局
 * @author sizhao | 870301137@qq.com
 * @version 1.0.0 | 2018-07-26 | sizhao  // 初始版本
*/

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Header from '../header'
import Navigator from '../navigator'
import './index.less'

const navigates = [
  {
    name: 'Docs',
    path: '/docs'
  },
  {
    name: 'Boilerplates',
    path: '/boilerplates'
  },
  {
    name: 'Components',
    path: '/components'
  },
  {
    name: 'Tech',
    path: '/tech'
  },
  {
    name: 'About',
    path: '/about'
  }
]

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Navigator navigates={navigates} />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
