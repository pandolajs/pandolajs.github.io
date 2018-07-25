/**
 * @fileOverview Banner 组件
 * @author sizhao | 870301137@qq.com
 * @version 1.0.0 | 2018-07-26 | sizhao  // 初始版本
*/
import React from 'react'
import styles from './index.module.less'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons'

const Header = ({ siteTitle }) => (
  <div className={styles.headerContainer} >
    <div className={styles.titleWrap}>
      <h1>Pandolajs</h1>
      <p className={styles.subtitle}>Make a immersion development experience</p>
      <div className={styles.opBar}>
        <a href="https://github.com/pandolajs" className={`${styles.btn} ${styles.github}`}>
          <Icon icon={faGem} /> GitHub
        </a>
        <a href="/docs" className={styles.btn}>Get Start</a>
      </div>
    </div>
  </div>
)

export default Header
