// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../lib/sanity'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await client
      .patch(req.body.currentAccount)
      .setIfMissing({ likes: [] })
      .insert('after', 'likes[-1]', [
        {
          _key: `${req.body.likedUser} - ${req.body.currentAccount}`,
          _ref: req.body.likedUser,
          _type: 'reference',
        },
      ]).commit()
      res.status(200).send({ message: 'success' })
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: 'error', data: error })
  }
}
