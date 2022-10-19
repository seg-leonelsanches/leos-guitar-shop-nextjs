import React from 'react';

import { ISegmentOrderInfo } from './interfaces';

export interface IOurOrder {
    orderInfo: ISegmentOrderInfo
}

export const OurOrder: React.FunctionComponent<IOurOrder> = ({orderInfo}) => {
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
                        {orderInfo.cart.map(g =>
                        (<tr key={g.id}>
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
                            <td>${orderInfo.cartSubtotal.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Taxes</td>
                            <td>${orderInfo.taxes.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>${orderInfo.shipping.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className='text-warning'>Total</td>
                            <td className='text-warning'>${orderInfo.total.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
}
