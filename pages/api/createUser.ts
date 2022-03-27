// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../lib/sanity'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const user = {
      _type: 'users',
      _id: req.body.userWalletAddress,
      name: req.body.name,
      walletAddress: req.body.userWalletAddress,
    }
    await client.createIfNotExists(user)
    res.status(201).send({ message: 'success' })
  } catch (error) {
    res.status(500).send({ message: 'error',data: error })
  }
}
