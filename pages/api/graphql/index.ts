import { NextApiRequest, NextApiResponse } from 'next'

import postgraphile from 'graphql/server/postgraphile'
import runMiddleware from 'graphql/server/runMiddleware'

// GraphQL route that handles queries
const graphql = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  res.statusCode = 200
  await runMiddleware(req, res, postgraphile)
  res.end()
}
export default graphql

export const config = {
  api: {
    bodyParser: false
  }
}
