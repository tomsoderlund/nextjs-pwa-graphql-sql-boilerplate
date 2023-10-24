import { NextApiRequest, NextApiResponse } from 'next'

import postgraphile from 'graphql/server/postgraphile'
import runMiddleware from 'graphql/server/runMiddleware'

// Endpoint needed for graphiql
const graphiqlStream = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  res.statusCode = 200
  await runMiddleware(req, res, postgraphile)
  res.end()
}
export default graphiqlStream

export const config = {
  api: {
    bodyParser: false
  }
}
