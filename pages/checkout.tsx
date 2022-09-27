import type { NextPage } from 'next'
import Head from 'next/head'

import { BillingDetails, OurOrder, PaymentMethod } from '../components/checkout'

const Checkout: NextPage = () => {
    return <>
        <Head>
            <title>Checkout - Leo's Guitar Shop</title>
        </Head>
        <div className='container'>
            <div className='row my-5 py-5'>
                <div className='col'>
                    <h2 className='title'>
                        Checkout
                    </h2>
                </div>
            </div>
            <div className='row my-5'>
                <div className='col-sm-6'>
                    <BillingDetails />
                </div>
                <div className='col-sm-6'>
                    <OurOrder />
                    <PaymentMethod />
                </div>
            </div>
        </div>
    </>
}

export default Checkout
