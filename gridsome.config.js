require('dotenv').config()

module.exports = {
  siteName: 'Peace Tree Counseling',
  siteDescription: 'Helping you find your way in a complicated world',
  titleTemplate: 'Peace Tree Counseling — %s',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    }
  ],
  templates: {
    ContentfulProvider: '/providers/:title'
  }
}
