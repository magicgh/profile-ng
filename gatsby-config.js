/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const config = require('./config');

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: config.title,
        description: config.description,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `docs`,
                path: `${__dirname}/src/docs`,
            },
        },
        `gatsby-plugin-postcss`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-build-date`,
            options: {
                formatAsDateString: true, // boolean, defaults to true - if false API will return unformatted string from new Date()
                formatting: {
                    format: 'MMM. D, YYYY', // string, defaults to "MM/DD/YYYY" - pass in any acceptable date-and-time format
                },
            },
        },
        {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 10,
            },
          },
    ],
};
