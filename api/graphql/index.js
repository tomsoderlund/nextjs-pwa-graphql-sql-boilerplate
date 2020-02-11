const { ApolloServer } = require('apollo-server-micro')
const { mergeTypes, mergeResolvers } = require('merge-graphql-schemas')

const { config } = require('../../config/config')

// Postgres (pg)
const { Pool } = require('pg')
const pool = new Pool({ connectionString: config.databaseUrl })

// Connect to database, do query, then release database connection
const query = async (sqlString) => {
  try {
    const client = await pool.connect()
    const results = await pool.query(sqlString)
    client.release()
    return results
  } catch (error) {
    return { error }
  }
}

const typeDefs = mergeTypes([
  require('../../graphql/article/schema')
])

const resolvers = mergeResolvers([
  require('../../graphql/article/resolvers')({ query })
])

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
})

module.exports = server.createHandler({ path: config.graphqlPath })
