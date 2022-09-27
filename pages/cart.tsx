import type { GetStaticProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { CartDetails } from '../components/cart'
import { useMobxStores } from '../data/stores'
import { fetcher } from '../infrastructure'
import { IGuitar } from '../models'

const Cart = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { cartStore } = useMobxStores();
    const guitarCatalog: IGuitar[] = data
    const cartItems = cartStore.guitars.map(g => ({
        guitar: guitarCatalog.filter(gg => gg.id === g.guitarId)[0], 
        quantity: g.quantity
    }))
    console.log('cartItems', cartItems)
    
    return <>
        <Head>
            <title>Your Cart - Leo's Guitar Shop</title>
        </Head>
        <div className='container'>
            <div className='row'>
                <CartDetails cartItems={cartItems} />
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

export const getServerSideProps: GetStaticProps<any> = async () => {
    const res = await fetcher(`${process.env.BACKEND_URL || 'http://localhost:3000'}/api/catalog`)
    const data: IGuitar[] = res

    return {
        props: {
            data,
        },
    }
}

export default Cart
