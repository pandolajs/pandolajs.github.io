/**
 * Copyright (c) 2009-present pandolajs, All rights reserved.
 * @fileoverview gatsby configuration
 * @author sizhao | 870301137@qq.com
 * @version 1.0 | 2018-07-01 | sizhao       // 初始版本
 */

module.exports = {
  siteMetadata: {
    title: 'Pandolajs!',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-less',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/docs/`
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
  ],
}
