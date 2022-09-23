import React from 'react'

import { observer } from 'mobx-react'

import { useMobxStores } from '../../data/stores'
import useSWR from 'swr'
import { fetcher } from '../../infrastructure'
import { IGuitar } from '../../models'
import { WishlistItem } from './wishlist-item'

export interface IWishlistDetails {

}

const WishlistDetailsComponent: React.FunctionComponent<IWishlistDetails> = () => {
    const { wishlistStore } = useMobxStores();
    const { data } = useSWR('/api/catalog', fetcher)
    if (!data) return <>Loading...</>

    const guitarCatalog: IGuitar[] = data
    return <div className='mb-5'>
        <h2>Your wishlist</h2>
        {wishlistStore.guitars.length <= 0 ?
            <h3>There are no guitars in your wishlist.</h3> :
            wishlistStore.guitars.map(g => {
                const guitar: IGuitar = guitarCatalog.filter(gg => gg.id === g.id)[0]

                return <WishlistItem 
                    id={Number(g.id)} 
                    model={guitar.model} 
                    manufacturer={guitar.manufacturer} 
                    mainImage={guitar.mainImage || 'https://cdn.pixabay.com/photo/2017/01/31/23/08/classic-2028011_960_720.png'} 
                    price={guitar.price} />
            })
        }
    </div>
}

export const WishlistDetails = observer(WishlistDetailsComponent)
