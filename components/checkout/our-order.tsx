import React from 'react';
import useSWR from 'swr';

import { useMobxStores } from '../../data/stores';
import { fetcher } from '../../infrastructure';
import { IGuitar } from '../../models';

export const OurOrder: React.FunctionComponent = (props) => {
    const { cartStore } = useMobxStores()
    const { data } = useSWR('/api/catalog', fetcher)
    if (!data) return <>Loading...</>

    const guitarCatalog: IGuitar[] = cartStore.guitars.map(g => data.filter((gg: IGuitar) => gg.id === g.guitarId)[0])
    return <>
        <div className='row'>
            <div className='col'>
                <h3>Our order</h3>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <table className='table table-dark'>
                    <tbody>
                        {guitarCatalog.map(g =>
                        (<tr>
                            <td>{g.model}</td>
                            <td>${g.price}</td>
                        </tr>
                        ))}
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Cart subtotal</td>
                            <td>${guitarCatalog.map(g => g.price).reduce((total, next) => total + next)}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Taxes</td>
                            <td>${(guitarCatalog.map(g => g.price).reduce((total, next) => total + next) * 0.06).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>$45</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>${(guitarCatalog.map(g => g.price).reduce((total, next) => total + next) * 1.06 + 45).toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
}
