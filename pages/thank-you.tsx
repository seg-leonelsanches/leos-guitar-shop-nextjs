import React, { useEffect } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'


import { useMobxStores } from '../data/stores'

const ThankYou: NextPage = () => {
    const { cartStore } = useMobxStores()
    const router = useRouter()

    useEffect(() => {
        if (cartStore.guitars.length <= 0) {
            router.push("/")
        }
    });

    cartStore.clearCart()

    return <>
        <Head>
            <title>Thank you! - Leo's Guitar Shop</title>
        </Head>
        <div className='container'>
            <div className='row my-5 py-5'>
                <div className='col'>
                    <h2 className='title'>
                        Thank you!
                    </h2>
                </div>
            </div>
            <div className='row my-3'>
                <div className='col'>
                    <h2 className='description'>
                        Thank you for your business.
                    </h2>
                </div>
            </div>
        </div>
    </>
}

export default ThankYou
