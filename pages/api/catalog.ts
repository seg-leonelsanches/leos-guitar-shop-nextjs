// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { IGuitar } from '../../models'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IGuitar[]>
) {
  res.status(200).json([
    { model: "Epiphone Les Paul Custom Black", manufacturer: "Epiphone", price: 500 } as IGuitar
  ])
}
