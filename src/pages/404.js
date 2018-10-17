import React from 'react'
import { css } from 'react-emotion'

import Layout from '../components/layout'
import notFountImage from '../images/404.jpg'

const NotFoundPage = () => (
  <Layout>
    <div className={css`
      height: calc(100vh - 210px);
      background: url('${notFountImage}') no-repeat center;
      background-color: #fff;
    `}></div>
  </Layout>
)

export default NotFoundPage
