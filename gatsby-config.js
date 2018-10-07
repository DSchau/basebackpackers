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
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: '	GTM-T8V6H33',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'base-backpackers-australia-new-zealand',
        short_name: 'Base Backpackers',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn:
          'https://42693edd59064d2f9e482fa434fad3f3:ff470e84e7fa4b93a4c28b0cf6f38643@sentry.io/1296197'
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
      }
    },
    `gatsby-plugin-twitter`,
    `gatsby-plugin-netlify`
  ]
};
