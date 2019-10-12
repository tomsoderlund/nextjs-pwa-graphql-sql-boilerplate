const { sql: { sqlFind, sqlCreate, sqlUpdate, sqlDelete } } = require('sql-wizard')

module.exports = (pool) => ({
  Query: {
    async articles (parent, args, context, info) {
      const rows = sqlFind(pool, 'article', args)
      return rows
    },

    async article (parent, args, context, info) {
      const rows = await sqlFind(pool, 'article', args)
      return rows[0]
    }
  },

  Mutation: {
    async addArticle (parent, args, context, info) {
      const newArticle = await sqlCreate(pool, 'article', args, { findRowByField: 'id' })
      return newArticle
    },

    async deleteArticle (parent, args, context, info) {
      await sqlDelete(pool, 'article', args)
      return args
    },

    async updateArticle (parent, args, context, info) {
      const { id, ...values } = args
      await sqlUpdate(pool, 'article', { id }, values)
      const rows = await sqlFind(pool, 'article', { id })
      return rows[0]
    }
  }
})
