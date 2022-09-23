import React from 'react';
import ReactFancyBox from '../fancy-box/ReactFancyBox'

import useSWR from "swr"

import { fetcher } from "../../infrastructure"
import { IGuitar } from "../../models"
import { useMobxStores } from '../../data/stores';

export interface IGuitarSpecs {
    id: number
}

export const GuitarSpecs: React.FunctionComponent<IGuitarSpecs> = (props) => {
    const { cartStore, wishlistStore } = useMobxStores()
    const { data } = useSWR(`/api/catalog/${props.id}`, fetcher)
    if (!data) return <>Loading...</>

    const guitar: IGuitar = data

    const buy = () => {
        cartStore.addGuitar(guitar)
    }

    const addToWishlist = () => {
        wishlistStore.addGuitar(guitar)
    }

    return <div className="row">
        <div className="col">
            <ReactFancyBox
                thumbnail={guitar.mainImage  || 'https://cdn.pixabay.com/photo/2017/01/31/23/08/classic-2028011_960_720.png'}
                image={guitar.mainImage  || 'https://cdn.pixabay.com/photo/2017/01/31/23/08/classic-2028011_960_720.png'} 
                showCloseBtn={false} />
        </div>
        <div className="col pt-5">
            <h1>{guitar.model}</h1>
            <h4>{guitar.manufacturer}</h4>
            <hr />
            <h5>Price: ${guitar.price}</h5>
            <hr />
            <button type="button" className="btn btn-primary" onClick={() => buy()}>Buy now</button>{' '}
            <button type="button" className="btn btn-info" onClick={() => addToWishlist()}>Add to Wishlist</button>
        </div>
    </div>
}
