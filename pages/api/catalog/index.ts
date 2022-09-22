// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { allGuitars } from '../../../data'
import { IGuitar } from '../../../models'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IGuitar[]>
) {
  const _allGuitars: IGuitar[] = allGuitars['default']
  res.status(200).json(_allGuitars)
}
