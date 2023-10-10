import { makeWrapResolversPlugin } from 'graphile-utils'

// import { createArticle, updateArticle } from 'graphql/collections/article/resolvers'

const wrapResolversPlugin = makeWrapResolversPlugin({
  Mutation: {
    // createArticle: { resolve: createArticle },
    // updateArticleById: { resolve: updateArticle },
  }
})

export default wrapResolversPlugin
