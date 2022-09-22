import type { NextPage } from 'next'

import { useRouter } from 'next/router'
import { GuitarSpecs } from '../../components/guitar-details'

const GuitarDetails: NextPage = () => {
    const router = useRouter()
    const { id } = router.query
    
    return <div className='container'>
        <GuitarSpecs id={Number(id)} />
    </div>
}

export default GuitarDetails