import React, { useEffect } from 'react';
import ReactFancyBox from '../fancy-box/ReactFancyBox';

import useSWR from "swr"

import { fetcher } from "../../infrastructure";
import { IGuitar } from "../../models";
import { useMobxStores } from '../../data/stores';
import { useAnalytics } from '../../hooks';
import { useTranslation } from 'next-i18next';

export interface IGuitarSpecs {
    id: number
}

export const GuitarSpecs: React.FunctionComponent<IGuitarSpecs> = (props) => {
    const { cartStore, wishlistStore, userLoginStore } = useMobxStores()
    const analytics = useAnalytics()
    const { t, i18n } = useTranslation();

    const { data } = useSWR(`/api/catalog/${props.id}`, fetcher)
    useEffect(() => {
        if (data) {
            analytics.page(t('Segment.Page.RetailPages.RetailPages'), t('Segment.Page.RetailPages.ProductDetails'), {
                guitar
            })
        }
    })

    if (!data) return <>{t('Loading')}</>
    const guitar: IGuitar = data

    const buy = async () => {
        try {
            await analytics.track(t("Segment.Track.ProductAddedToCart"), guitar)
            cartStore.addGuitar(guitar)
            alert(`${t('ProductDetails.ProductAddedToYourCart')}: ${guitar.model}, ${t('ProductDetails.By')} ${guitar.manufacturer}. ${t('ProductDetails.PleaseCheckYourCart')}`)
        } catch (error: any) {
            console.error('error', error)
        }
    }

    const addToWishlist = async () => {
        try {
            await analytics.track(t("Segment.Track.ProductAddedToWishlist"), guitar)
            wishlistStore.addGuitar(guitar)
            alert(`${t('ProductDetails.ProductAddedToWishlist')}: ${guitar.model}, ${t('ProductDetails.By')} ${guitar.manufacturer}. ${t('ProductDetails.PleaseCheckYourWishlist')}`)
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
            <h5>{t('ProductDetails.Price')}: ${guitar.price}</h5>
            <hr />
            <button type="button" className="btn btn-primary" onClick={() => buy()}>{t('ProductDetails.BuyNow')}</button>{' '}
            {
                userLoginStore.loggedIn &&
                <button type="button" className="btn btn-info" onClick={() => addToWishlist()}>
                    {t('ProductDetails.AddToWishlist')}
                </button>
            }
        </div>
    </div>
}
