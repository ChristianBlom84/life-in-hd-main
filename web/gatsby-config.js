/* eslint-disable @typescript-eslint/camelcase */
const siteUrl = 'http://localhost:8000';
module.exports = {
  siteMetadata: {
    title: `Life in HD`,
    description: `Life in HD provides Human Design readings and Living Your Design classes in Stockholm, Sweden.`,
    author: `Christian Blom`,
    url: `https://lifeinhd.se`,
    siteUrl: `https://lifeinhd.se`,
    keywords: `Human Design, Human Design Reading, Splenic Center, Ajna Center, Head Center, G Center, Sacral Center, Root Center, Solar Plexus Center, Throat Center,
    Generator, Manifesting Generator, Projector, Reflector, Manifestor`,
    image: `${siteUrl}/images/icons/life-in-hd-icon.jpg`,
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
    // `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('node-sass'),
      },
    },
    `gatsby-plugin-sitemap`,
  ],
};
