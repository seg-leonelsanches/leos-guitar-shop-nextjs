import React from 'react'

import { observer } from 'mobx-react'

import { IGuitar } from "../../models"
import { GuitarCard } from '../guitar-card'
import { useMobxStores } from '../../data/stores'

export interface ICartDetails {

}

const CartDetailsComponent: React.FunctionComponent<ICartDetails> = () => {
    const { cartStore } = useMobxStores();

    return <>
        <h2>Your cart</h2>
        {cartStore.guitars.length <= 0 ?
            <h3>There are no guitars in your cart.</h3> :
            <></>
        }
    </>
}

export const CartDetails = observer(CartDetailsComponent)
