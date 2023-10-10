// Server-side
const { sql: { sqlFind, sqlCreate, sqlUpdate, sqlDelete } } = require('sql-wizard')

module.exports = (pool) => ({
  Query: {
    async articles (parent, variables, context, info) {
      const rows = await sqlFind(pool, 'article', variables)
      return rows
    },

    async article (parent, variables, context, info) {
      const id = variables.slugAndId
        ? variables.slugAndId.split('-').pop()
        : variables.id
      const rows = await sqlFind(pool, 'article', { id })
      return rows[0]
    }
  },

  Mutation: {
    async addArticle (parent, variables, context, info) {
      const newArticle = await sqlCreate(pool, 'article', variables)
      return newArticle
    },

    async updateArticle (parent, variables, context, info) {
      const { id, ...values } = variables
      await sqlUpdate(pool, 'article', { id }, values)
      const rows = await sqlFind(pool, 'article', { id })
      return rows[0]
    },

    async deleteArticle (parent, variables, context, info) {
      await sqlDelete(pool, 'article', variables)
      return variables
    }
  }
})
