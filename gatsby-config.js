module.exports = {
  pathPrefix: "/samplecarbon",
  siteMetadata: {
    title: 'Gatsby Theme Carbon',
    description: 'A Gatsby theme for the carbon design system',
    keywords: 'gatsby,theme,carbon',
  },
  pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        repository: {
          baseUrl:
            'https://github.com/rkatikal/samplecarbon',
<<<<<<< HEAD
          subDirectory: '/',
=======
          subDirectory: '/src/pages',
>>>>>>> 7a2e3552c35adb5389842accc53feb58952cce9e
        },
      },
    },
  ],
};
