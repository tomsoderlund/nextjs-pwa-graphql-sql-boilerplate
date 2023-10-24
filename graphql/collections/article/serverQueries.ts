import { Article } from 'graphql/__generated__/graphql'
import { query } from 'graphql/server/postgres'

export const articleById = async (id: number): Promise<Article> => {
  if (id === undefined) throw new Error('articleById: id is undefined')
  const sqlString = `SELECT * FROM article WHERE id = ${id}`
  const rows = await query(sqlString)
  const article: Article = rows?.[0]
  return article
}
