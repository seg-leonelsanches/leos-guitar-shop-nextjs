import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

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
            <div className='row my-5'>
                <div className='col d-flex align-items-center justify-content-center'>
                    <Link href="/checkout">
                        <a className='btn btn-warning btn-lg'>Checkout</a>
                    </Link>
                </div>
            </div>
        </div>
    </>
}

export default Cart
