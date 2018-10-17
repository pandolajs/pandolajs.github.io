import React, { Component } from 'react'
import styles from './index.module.less'

export default class Footer extends Component {
  render () {
    return (
      <div className={styles.footer}>© 2018 Pandolajs</div>
    )
  }
}