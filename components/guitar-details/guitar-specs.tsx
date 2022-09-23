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
    const { cartStore } = useMobxStores()
    const { data } = useSWR(`/api/catalog/${props.id}`, fetcher)
    if (!data) return <>Loading...</>

    const guitar: IGuitar = data

    const buy = () => {
        cartStore.addGuitar(guitar)
        console.log(guitar, 'added')
    }

    return <div className="row">
        <div className="col">
            <ReactFancyBox
                thumbnail={guitar.mainImage}
                image={guitar.mainImage} 
                showCloseBtn={false} />
        </div>
        <div className="col pt-5">
            <h1>{guitar.model}</h1>
            <h4>{guitar.manufacturer}</h4>
            <hr />
            <h5>Price: ${guitar.price}</h5>
            <hr />
            <button type="button" className="btn btn-primary" onClick={() => buy()}>Buy now</button>
        </div>
    </div>
}
