import { useEffect } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { useMobxStores } from '../data/stores'
import { WishlistDetails } from '../components/wishlist'
import { useAnalytics } from '../hooks'

const Wishlist: NextPage = () => {
    const { userLoginStore } = useMobxStores()
    const router = useRouter()
    const analytics = useAnalytics()

    useEffect(() => {
        if (!userLoginStore.loggedIn) {
            router.push("/login")
            return
        }

        analytics.page("User Pages", "Wishlist")
    })
    
    return <>
        <Head>
            <title>Wishlist - Leo's Guitar Shop</title>
        </Head>
        <div className='container'>
            <div className='row'>
                <WishlistDetails />
            </div>
        </div>
    </>
}

export default Wishlist
