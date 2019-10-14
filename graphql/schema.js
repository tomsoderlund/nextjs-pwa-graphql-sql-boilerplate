const { gql } = require('apollo-server-express')
const { config } = require('../config/config')

// Postgres (pg)
const { Pool } = require('pg')
const pool = new Pool({ connectionString: config.databaseUrl })

// Type definitions define the "shape" of your data and specify which ways the data can be fetched from the GraphQL server.
module.exports.typeDefs = gql`
  ${require('./article/schema')}
`

// Resolvers define the technique for fetching the types in the schema.  We'll retrieve articles from the "articles" array above.
module.exports.resolvers = {
  ...require('./article/resolvers')(pool)
}
