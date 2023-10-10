import { NextApiRequest, NextApiResponse } from 'next'

export default async function runMiddleware (
  req: NextApiRequest,
  res: NextApiResponse,
  fn: any
): Promise<void> {
  return await new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}
