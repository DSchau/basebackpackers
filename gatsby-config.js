module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    'gatsby-plugin-eslint',
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `2f10bdfdabc47fc2f76f98ef230ceb`,
        previewMode: true,
        disableLiveReload: false,
      }
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
