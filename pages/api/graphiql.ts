import { NextApiRequest, NextApiResponse } from 'next'

import postgraphile from 'graphql/server/postgraphile'
import runMiddleware from 'graphql/server/runMiddleware'

// Graphiql route that handles rendering graphiql
// https://github.com/graphql/graphiql
// An interactive in-browser GraphQL IDE
const graphiql = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  res.statusCode = 200
  await runMiddleware(req, res, postgraphile)
  res.end()
}
export default graphiql
