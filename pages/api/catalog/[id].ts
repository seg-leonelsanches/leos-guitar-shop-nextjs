import type { NextApiRequest, NextApiResponse } from 'next'
import { allGuitars } from '../../../data'
import { IGuitar } from '../../../models'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IGuitar>
) {
  const _allGuitars: { [key: number]: IGuitar } = allGuitars
  const { id } = req.query
  res.status(200).json(_allGuitars[Number(id)])
}
