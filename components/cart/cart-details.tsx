import React, { useEffect } from 'react'

import { observer } from 'mobx-react'
import useSWR from 'swr'

import { useMobxStores } from '../../data/stores'
import { fetcher } from '../../infrastructure'
import { IGuitar } from '../../models'
import { CartItem } from './cart-item'
import { useAnalytics } from '../../hooks'

export interface ICartDetails {
    guitars: IGuitar[]
}

const CartDetailsComponent: React.FunctionComponent<ICartDetails> = (props) => {
    const { cartStore } = useMobxStores();
    /* const analytics = useAnalytics()
    const { data } = useSWR('/api/catalog', fetcher)
    let guitarsInCart: any[]

    useEffect(() => {
        analytics.page("User Pages", "User Cart", {
            cart: guitarsInCart
        })
    })

    if (!data) return <>Loading...</> */

    /* const guitarCatalog: IGuitar[] = data
     = cartStore.guitars.map(g => ({
        guitar: guitarCatalog.filter(gg => gg.id === g.guitarId)[0], 
        quantity: g.quantity
    })) */
    const cartItems = cartStore.guitars.map(g => ({
        guitar: props.guitars.filter(gg => gg.id === g.guitarId)[0], 
        quantity: g.quantity
    }))

    return <div className='mb-5'>
        <h2>Your cart</h2>
        {cartItems.length <= 0 ?
            <h3>There are no guitars in your cart.</h3> :
            cartItems.map(g => {
                return <CartItem 
                    key={g.guitar.id}
                    id={Number(g.guitar.id)} 
                    model={g.guitar.model} 
                    manufacturer={g.guitar.manufacturer} 
                    mainImage={g.guitar.mainImage || 'https://cdn.pixabay.com/photo/2017/01/31/23/08/classic-2028011_960_720.png'} 
                    price={g.guitar.price}
                    quantity={g.quantity} />
            })
        }
    </div>
}

export const CartDetails = observer(CartDetailsComponent)
