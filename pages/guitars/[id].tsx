import type { NextPage } from 'next'
import Head from 'next/head'

import { useRouter } from 'next/router'
import { GuitarSpecs } from '../../components/guitar-details'

const GuitarDetails: NextPage = () => {
    const router = useRouter()
    const { id } = router.query

    return <>
        <Head>
            <title>Product details - Leo's Guitar Shop</title>
        </Head>
        <div className='container'>
            <GuitarSpecs id={Number(id)} />
        </div>
    </>
}

export default GuitarDetails