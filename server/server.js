require('dotenv').config()

const bodyParser = require('body-parser')
const next = require('next')
const express = require('express')
const server = express()
const path = require('path')
// const sslRedirect = require('heroku-ssl-redirect') // Enable on Heroku server: yarn add heroku-ssl-redirect

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const requestHandler = app.getRequestHandler()
const { config } = require('../config/config')

// Apollo GraphQL
const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('../graphql/schema')
const { query } = require('../graphql/postgres')

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers: resolvers({ query }),
  introspection: true,
  playground: true
})
apolloServer.applyMiddleware({ app: server, path: config.graphqlPath })

// Routes

app.prepare().then(() => {
  // Enable SSL/HTTPS redirect
  // server.use(sslRedirect())
  // Parse application/x-www-form-urlencoded
  server.use(bodyParser.urlencoded({ extended: false }))
  // Parse application/json
  server.use(bodyParser.json())

  // Allows for cross origin domain request:
  server.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    next()
  })

  // Static assets
  server.use('/public', express.static(path.join(__dirname, '../public')))

  // Next.js page routes
  server.all('*', requestHandler)

  // Start server
  server.listen(config.serverPort, () => console.log(`${config.appSlug} running on http://localhost:${config.serverPort}/, GraphQL on http://localhost:${config.serverPort}${apolloServer.graphqlPath}`))
})
