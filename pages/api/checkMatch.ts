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
        likes
      }
   `;

   const user=await client.fetch(query);
   let isMatch=false;
   user[0].likes.forEach((likedUser:any)=> {
        if(likedUser._ref===req.body.currentAccount){
            isMatch=true
        }
   });
    res.status(200).send({ message: 'sucess',data:{isMatch}})
  } catch (error) {
    res.status(500).send({ message: 'error', data: error })
  }
}
