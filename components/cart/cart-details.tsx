import React, { useEffect } from 'react'

import { observer } from 'mobx-react'

import { IGuitar } from '../../models'
import { CartItem } from './cart-item'
import { useAnalytics } from '../../hooks'
import { useTranslation } from 'next-i18next'

export interface ICartDetails {
    cartItems: { guitar: IGuitar, quantity: number }[]
}

const CartDetailsComponent: React.FunctionComponent<ICartDetails> = (props) => {
    const analytics = useAnalytics()
    const { t, i18n } = useTranslation();

    useEffect(() => {
        analytics.page(t('Segment.Page.UserPages.UserPages'), t('Segment.Page.UserPages.UserCart'), {
            cart: props.cartItems
        })
    })

    return <div className='mb-5'>
        <h2>{t('Cart.YourCart')}</h2>
        {props.cartItems.length <= 0 ?
            <h3>{t('Cart.ThereAreNoItemsInYourCart')}</h3> :
            props.cartItems.map(g => {
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
