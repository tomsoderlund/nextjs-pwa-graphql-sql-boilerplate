const { ApolloServer, gql } = require('apollo-server-micro')
const { config } = require('../../config/config')

// Postgres (pg)
const { Pool } = require('pg')
const onProcessDeath = require('death')
const pool = new Pool({ connectionString: config.databaseUrl })
let client

const initDatabaseClient = async () => {
  if (!client) client = await pool.connect()
}
initDatabaseClient()

onProcessDeath((signal, err) => {
  client && client.release()
})

const typeDefs = gql`
  ${require('../../graphql/article/schema')}
`

const resolvers = {
  ...require('../../graphql/article/resolvers')(pool)
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
})

module.exports = server.createHandler({ path: config.graphqlPath })
