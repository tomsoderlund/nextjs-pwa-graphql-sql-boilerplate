const { ApolloServer } = require('apollo-server-micro')

const { typeDefs, resolvers } = require('../../graphql/index')
const { query } = require('../../graphql/postgres')
const { config } = require('../../config/config')

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers({ query }),
  introspection: true,
  playground: true
})

module.exports = server.createHandler({ path: config.graphqlPath })
