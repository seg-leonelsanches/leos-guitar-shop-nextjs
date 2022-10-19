import { useEffect } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import { BillingDetails, ISegmentOrderInfo, OurOrder, PaymentMethod } from '../components/checkout'
import { useMobxStores } from '../data/stores'
import { useAnalytics } from '../hooks'
import { IGuitar } from '../models'
import { fetcher } from '../infrastructure'

const Checkout: NextPage = () => {
    const { cartStore } = useMobxStores()
    const router = useRouter()
    const analytics = useAnalytics()

    const { data } = useSWR('/api/catalog', fetcher)
    if (!data) return <>Loading...</>

    const calculatedCartItems: IGuitar[] = cartStore.guitars.map(g => data.filter((gg: IGuitar) => gg.id === g.guitarId)[0]) || []
    const cartSubtotal = calculatedCartItems.map(g => g.price).reduce((total, next) => total + next, 0)
    const taxes = cartSubtotal * 0.06
    const shipping = 45
    const total = cartSubtotal + taxes + shipping
    const trackingObject: ISegmentOrderInfo = {
        cart: calculatedCartItems,
        cartSubtotal: cartSubtotal,
        taxes: taxes,
        shipping: shipping,
        total: total
    }

    const placeOrder: Function = () => {
        cartStore.placeOrder()
        analytics.track("Order Placed", trackingObject)
        router.push("/thank-you")
    }

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
            {cartStore.guitars.length <= 0 ?
                <div className='row my-3'>
                    <div className='col'>
                        <h2 className='description'>
                            Your cart is empty.
                        </h2>
                    </div>
                </div>
                :
                <>
                    <div className='row my-5'>
                        <div className='col-sm-6'>
                            <BillingDetails />
                        </div>
                        <div className='col-sm-6'>
                            <OurOrder orderInfo={trackingObject} />
                            <PaymentMethod />
                        </div>
                    </div>
                    <div className='row my-5'>
                        <div className='col d-flex align-items-center justify-content-center'>
                            <button type='button' className='btn btn-success btn-lg' onClick={() => placeOrder()}>Place Order</button>
                        </div>
                    </div>
                </>
            }
        </div>
    </>
}

export default Checkout
