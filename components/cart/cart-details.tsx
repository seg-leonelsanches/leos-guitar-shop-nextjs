import React from 'react'

import { observer } from 'mobx-react'

import { useMobxStores } from '../../data/stores'
import useSWR from 'swr'
import { fetcher } from '../../infrastructure'
import { IGuitar } from '../../models'

export interface ICartDetails {

}

const CartDetailsComponent: React.FunctionComponent<ICartDetails> = () => {
    const { cartStore } = useMobxStores();
    const { data } = useSWR('/api/catalog', fetcher)
    if (!data) return <>Loading...</>

    const guitarCatalog: IGuitar[] = data
    return <div className='mb-5'>
        <h2>Your cart</h2>
        {cartStore.guitars.length <= 0 ?
            <h3>There are no guitars in your cart.</h3> :
            cartStore.guitars.map(g => {
                const guitar: IGuitar = guitarCatalog.filter(gg => gg.id === g.guitarId)[0]

                return <div className='row' key={guitar.id}>
                    <div className='col'>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={guitar.mainImage} className="img-fluid rounded-start" alt={guitar.model} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body mx-5 my-3">
                                    <h5 className="card-title">{guitar.manufacturer}</h5>
                                    <p className="card-text">{guitar.model}</p>
                                    <p className="card-text">${guitar.price}</p>
                                    <p className="card-text"><small className="text-muted">Quantity: {g.quantity}</small></p>
                                </div>
                                <div className='card-footer'>
                                    <button className='btn btn-danger float-end'>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })
        }
    </div>
}

export const CartDetails = observer(CartDetailsComponent)
