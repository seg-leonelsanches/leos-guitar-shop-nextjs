import React from 'react'

import { observer } from 'mobx-react'

import { useMobxStores } from '../../data/stores'
import { useTranslation } from 'next-i18next'

export interface ICartItem {
    id: number
    mainImage: string
    model: string
    manufacturer: string
    price: number
    quantity: number
}

const CartItemComponent: React.FunctionComponent<ICartItem> = (props) => {
    const { cartStore } = useMobxStores();
    const { t, i18n } = useTranslation();

    const remove = () => {
        cartStore.removeOneGuitarById(props.id)
    }

    return <div className='row' key={props.id}>
        <div className='col'>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.mainImage || 'https://cdn.pixabay.com/photo/2017/01/31/23/08/classic-2028011_960_720.png'} className="img-fluid rounded-start" alt={props.model} />
                </div>
                <div className="col-md-8">
                    <div className="card-body mx-5 my-3">
                        <h5 className="card-title">{props.manufacturer}</h5>
                        <p className="card-text">{props.model}</p>
                        <p className="card-text">${props.price}</p>
                        <p className="card-text"><small className="text-muted">{t('Cart.Quantity')}: {props.quantity}</small></p>
                    </div>
                    <div className='card-footer'>
                        <button className='btn btn-danger float-end' onClick={() => remove()}>{t('Cart.Remove')}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export const CartItem = observer(CartItemComponent)
