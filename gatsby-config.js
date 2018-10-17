/**
 * Copyright (c) 2009-present pandolajs, All rights reserved.
 * @fileoverview gatsby configuration
 * @author sizhao | 870301137@qq.com
 * @version 1.0 | 2018-07-01 | sizhao       // 初始版本
 */

module.exports = {
  siteMetadata: {
    title: 'Pandolajs',
    keywords: 'reactjs,npm,nodejs,pandorajs,component,boilerplate',
    description: 'Pandolajs is a ecosytem for frontend.'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-less',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/docs/`
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Pandolajs',
        short_name: 'pandora',
        start_url: '/',
        background_color: '#1296db',
        theme_color: '#1296db',
        display: 'minimal-ui',
        icon: 'src/images/pandolajs.png'
      }
    },
    'gatsby-plugin-offline'
  ]
}
