const { gql } = require('apollo-server-express')
const { config } = require('../config/config')

// Postgres (pg)
const { Pool } = require('pg')
const pool = new Pool({ connectionString: config.databaseUrl })

// Type definitions define the "shape" of your data and specify which ways the data can be fetched from the GraphQL server.
module.exports.typeDefs = gql`
  # This "Article" type can be used in other type declarations
  type Article {
    id: ID
    title: String
    content: String
    link: String
    guid: String
    date_published: String
    source_id: Int
  }

  # Queries
  type Query {
    articles(title: String, id: ID, sort: String): [Article]
    article(title: String, id: ID): Article
  }

  # Mutations
  type Mutation {
    addArticle(title: String!): Article!
    deleteArticle(id: ID!): Article
    updateArticle(id: ID!, title: String): Article
  }
`

// Resolvers define the technique for fetching the types in the schema.  We'll retrieve articles from the "articles" array above.
module.exports.resolvers = {
  ...require('./resolvers/article')(pool)
}
