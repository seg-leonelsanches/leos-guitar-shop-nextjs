import { useEffect } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { useMobxStores } from '../data/stores'

const Wishlist: NextPage = () => {
    const { userLoginStore } = useMobxStores()
    const router = useRouter()

    useEffect(() => {
        if (!userLoginStore.loggedIn) router.push("/login")
    });
    
    return <>
        <Head>
            <title>Wishlist - Leo's Guitar Shop</title>
        </Head>
        <div className='container'>
            <div className='row'>
                <h2>Wishlist</h2>
            </div>
        </div>
    </>
}

export default Wishlist
