/* eslint-disable @typescript-eslint/camelcase */
const siteUrl = 'http://localhost:8000';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require('http-proxy-middleware'); //v1.x.x
// Use implicit require for v0.x.x of 'http-proxy-middleware'
// const proxy = require('http-proxy-middleware')
// be sure to replace 'createProxyMiddleware' with 'proxy' where applicable

module.exports = {
  siteMetadata: {
    title: `Life in HD`,
    description: `Life in HD provides Human Design readings and Living Your Design classes in Stockholm, Sweden.`,
    author: `Christian Blom`,
    url: `https://lifeinhd.se`,
    keywords: `Human Design, Human Design Reading, Splenic Center, Ajna Center, Head Center, G Center, Sacral Center, Root Center, Solar Plexus Center, Throat Center,
    Generator, Manifesting Generator, Projector, Reflector, Manifestor`,
    image: `${siteUrl}/images/icons/life-in-hd-icon.jpg`,
  },
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      createProxyMiddleware({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    );
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `life-in-hd`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icons/life-in-hd-icon.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-netlify-functions`,
      options: {
        functionsSrc: `${__dirname}/functions`,
        functionsOutput: `${__dirname}/functions`,
      },
    },
  ],
};
