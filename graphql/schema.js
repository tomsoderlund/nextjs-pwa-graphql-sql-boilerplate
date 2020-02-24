const { mergeTypes, mergeResolvers } = require('merge-graphql-schemas')

// Type definitions define the "shape" of your data and specify which ways the data can be fetched from the GraphQL server.
module.exports.typeDefs = mergeTypes([
  require('./article/schema')
])

// Resolvers define the technique for fetching the types in the schema.  We'll retrieve articles from the "articles" array above.
module.exports.resolvers = (pool) => mergeResolvers([
  require('./article/resolvers')(pool)
])
