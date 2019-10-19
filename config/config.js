const appSlug = 'nextjs-graphql-hooks'
const serverPort = process.env.PORT || 3123

const completeConfig = {

  default: {
    serverPort,
    appSlug,
    appUrl: process.env.APP_URL || `https://${appSlug}.herokuapp.com/`, // Used for GraphQL url - see graphql/apollo.js
    appName: 'Next.js PWA',
    appTagline: 'Best web app boilerplate ever',
    appDescription: 'Next.js PWA with GraphQL (Apollo) and Postgres SQL boilerplate',
    googleAnalyticsId: 'UA-XXXXXXX-X',
    googleSiteVerification: false,
    databaseUrl: process.env.DATABASE_URL || `postgresql://localhost/${appSlug}`
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
