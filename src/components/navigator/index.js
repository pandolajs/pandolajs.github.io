/**
 * @fileOverview 网站导航
 * @author sizhao | 870301137@qq.com
 * @version 1.0.0 | 2018-07-25 | sizhao  // 初始版本
*/
/* eslint-disable */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.less'

export default class Navigator extends Component {
  static propTypes = {
    navigates: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string
    })),
    active: PropTypes.number
  }

  static defaultProps = {
    active: 0
  }

  render () {
    const { navigates = [], active } = this.props
    return (
      <div className={styles.navContainer}>
        <div className={styles.navWrap}>
          <a className={styles.webLogo}>Pandolajs</a>
          <nav className={styles.navList}>
            <dl>
              <dd className={active === 0 ? styles.active : ''}>
                <a href="/">Home</a>
              </dd>
              {
                navigates.map((nav, index) => {
                  return (
                    <dd key={index} className={index + 1 === active ? styles.active : ''}>
                      <a href={nav.path}>{nav.name}</a>
                    </dd>
                  )
                })
              }
            </dl>
          </nav>
        </div>
      </div>
    )
  }
}