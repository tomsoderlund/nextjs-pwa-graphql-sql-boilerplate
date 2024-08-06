import packageJson from '../package.json'
import manifest from '../public/manifest.json'

export const environment = process.env.NODE_ENV
export const isDevelopment = process.env.NODE_ENV === 'development'
const appSlug = 'nextjs-pwa-graphql-sql' // packageJson.name
const serverPort = parseInt(process.env.PORT ?? '3003')

interface EnvironmentConfiguration {
  appSlug: string
  appVersion: string
  appUrl: string
  appName: string
  appTagline?: string
  appDescription?: string
  serverPort: number
  locale?: string
  googleAnalyticsId?: string | null
  fonts?: string[][]

  startPagePath?: string
  graphqlPath?: string
  databaseUrl?: string
  allowedHostsList?: string[]

  isProduction?: boolean
  sendRealMessages?: boolean
}

interface AllConfigurations {
  default?: EnvironmentConfiguration
  development?: Partial<EnvironmentConfiguration>
  production?: Partial<EnvironmentConfiguration>
  test?: Partial<EnvironmentConfiguration>
}

const completeConfig: AllConfigurations = {

  default: {
    serverPort,
    appSlug,
    appVersion: packageJson.version,
    appUrl: process.env.APP_URL ?? 'https://nextjs-pwa-graphql-sql-boilerplate.vercel.app/',
    appName: manifest.name,
    appTagline: manifest.description,
    appDescription: manifest.description,
    locale: 'en_US',
    fonts: [
      ['Inter', 'wght@300;400;500;700']
    ],
    googleAnalyticsId: 'G-XXXXXXXXXX',
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
export const config = { ...completeConfig.default, ...completeConfig[environment] }
export default config
