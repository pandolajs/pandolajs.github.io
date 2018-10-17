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
import Footer from '../footer'
import Navigator from '../navigator'
import styles from './index.module.less'
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

const Layout = ({ children, banner, className }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            keywords,
            description
          }
        }
      }
    `}
    render={data => {
      const { site: { siteMetadata: { title, keywords, description } } } = data
      return (
        <div className={ `${styles.layout} ${className}` }>
          <Helmet>
            <title>{ title }</title>
            <meta name='keywords' content={ keywords } />
            <meta name='description' content={ description } />
          </Helmet>
          <Navigator navigates={ navigates } />
          { banner && <Header siteTitle={ title } /> }
          <div className={ styles.layoutContent }>
            { children }
          </div>
          <Footer />
        </div>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  banner: PropTypes.bool,
  clssName: PropTypes.string
}

Layout.defaultProps = {
  banner: false,
  className: ''
}

export default Layout
