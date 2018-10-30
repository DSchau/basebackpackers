module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    siteUrl: 'https://basebackpackers.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: '	GTM-T8V6H33',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
      }
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `2f10bdfdabc47fc2f76f98ef230ceb`,
        previewMode: false,
        disableLiveReload: false
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },

    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://42693edd59064d2f9e482fa434fad3f3@sentry.io/1296197'
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
      }
    },
    `gatsby-plugin-twitter`,
    `gatsby-plugin-netlify`
  ]
};
