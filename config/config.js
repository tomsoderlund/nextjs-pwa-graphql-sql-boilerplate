const packageJson = require('../package.json')
const manifest = require('../public/manifest.json')

const appSlug = 'nextjs-pwa-graphql-sql'
const serverPort = process.env.PORT || 3123

const completeConfig = {

  default: {
    serverPort,
    appSlug,
    appUrl: process.env.APP_URL || '', // Used for GraphQL url - see graphql/apollo.js. Not used/needed by Zeit Now.
    appName: manifest.name,
    appTagline: manifest.description,
    appDescription: manifest.description,
    locale: 'en_US',
    googleAnalyticsId: 'UA-XXXXXXX-X',
    googleSiteVerification: false,
    databaseUrl: process.env.DATABASE_URL,
    graphqlPath: '/api/graphql'
  },

  development: {
    appUrl: `http://localhost:${serverPort}/`,
    googleAnalyticsId: null
  },

  production: {
  }

}

// Public API
module.exports = {
  config: { ...completeConfig.default, ...completeConfig[process.env.NODE_ENV] },
  completeConfig
}
