module.exports = `
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
