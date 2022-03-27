// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../lib/sanity'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
   const query=`
      *[_type=="users" && _id=="${req.query.activeAccount}"]{
        name,
        walletAddress,
        "imageUrl":profileImage.asset->url
      }
   `;

   const user=await client.fetch(query);
    res.status(200).send({ message: 'sucess',data:user[0]})
  } catch (error) {
    res.status(500).send({ message: 'error', data: error })
  }
}
