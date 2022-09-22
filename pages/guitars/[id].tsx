import type { NextPage } from 'next'

import { useRouter } from 'next/router'

const GuitarDetails: NextPage = () => {
    const router = useRouter()
    const { id } = router.query
    
    return <h1>Guitar Example</h1>
}

export default GuitarDetails