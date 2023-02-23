import React, { useEffect } from 'react';
import ReactFancyBox from '../fancy-box/ReactFancyBox';

import useSWR from "swr"

import { fetcher } from "../../infrastructure";
import { IGuitar } from "../../models";
import { useMobxStores } from '../../data/stores';
import { useAnalytics } from '../../hooks';

export interface IGuitarSpecs {
    id: number
}

export const GuitarSpecs: React.FunctionComponent<IGuitarSpecs> = (props) => {
    const { cartStore, wishlistStore, userLoginStore } = useMobxStores()
    const analytics = useAnalytics()

    const { data } = useSWR(`/api/catalog/${props.id}`, fetcher)
    useEffect(() => {
        if (data) {
            analytics.page("Retail Pages", "Product Details", {
                guitar
            })
        }
    })

    if (!data) return <>Loading...</>
    const guitar: IGuitar = data

    const buy = async () => {
        try {
            await analytics.track('Product Added To Cart', guitar)
            cartStore.addGuitar(guitar)
            alert(`Product added to your cart: ${guitar.model}, by ${guitar.manufacturer}. Please check your cart.`)
        } catch (error: any) {
            console.error('error', error)
        }
    }

    const addToWishlist = async () => {
        try {
            await analytics.track('Product Added To Wishlist', guitar)
            wishlistStore.addGuitar(guitar)
            alert(`Product added to your cart: ${guitar.model}, by ${guitar.manufacturer}. Please check your wishlist.`)
        } catch (error: any) {
            console.error('error', error)
        }
    }

    return <div className="row">
        <div className="col">
            <ReactFancyBox
                thumbnail={guitar.mainImage || 'https://cdn.pixabay.com/photo/2017/01/31/23/08/classic-2028011_960_720.png'}
                image={guitar.mainImage || 'https://cdn.pixabay.com/photo/2017/01/31/23/08/classic-2028011_960_720.png'}
                showCloseBtn={false} />
        </div>
        <div className="col pt-5">
            <h1>{guitar.model}</h1>
            <h4>{guitar.manufacturer}</h4>
            <hr />
            <h5>Price: ${guitar.price}</h5>
            <hr />
            <button type="button" className="btn btn-primary" onClick={() => buy()}>Buy now</button>{' '}
            {
                userLoginStore.loggedIn &&
                <button type="button" className="btn btn-info" onClick={() => addToWishlist()}>
                    Add to Wishlist
                </button>
            }
        </div>
    </div>
}
