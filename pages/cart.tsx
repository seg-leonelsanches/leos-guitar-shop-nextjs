import type { NextPage } from 'next'
import Head from 'next/head'

import { CartDetails } from '../components/cart'

const Cart: NextPage = () => {
    return <>
        <Head>
            <title>Your Cart - Leo's Guitar Shop</title>
        </Head>
        <div className='container'>
            <div className='row'>
                <CartDetails />
            </div>
        </div>
    </>
}

export default Cart
