require('dotenv').config()

module.exports = {
  siteName: 'Peace Tree Counseling',
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
    ContentfulDynamicProvider: '/providers/:title'
  }
}
