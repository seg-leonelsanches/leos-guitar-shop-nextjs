import type { NextApiRequest, NextApiResponse } from 'next'
import { allGuitars } from '../../../data/mocks'
import { IGuitar } from '../../../models'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IGuitar>
) {
  const _allGuitars: IGuitar[] = allGuitars['default']
  const { id } = req.query
  res.status(200).json(_allGuitars.filter(g => g.id == id)[0])
}
