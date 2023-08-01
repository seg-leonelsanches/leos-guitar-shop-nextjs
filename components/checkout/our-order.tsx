import React, { useEffect } from 'react';
import { useTranslation } from 'next-i18next';

import { useAnalytics } from '../../hooks';
import { ISegmentOrderInfo } from './interfaces';

export interface IOurOrder {
    orderInfo: ISegmentOrderInfo
}

export const OurOrder: React.FunctionComponent<IOurOrder> = ({orderInfo}) => {
    const analytics = useAnalytics();
    const { t, i18n } = useTranslation();
    
    useEffect(() => {
        analytics.page(t('Segment.Page.CheckoutFlow.CheckoutFlow'), t('Segment.Page.CheckoutFlow.Summary'), orderInfo)
    })
    
    return <>
        <div className='row'>
            <div className='col'>
                <h3>{t('Checkout.OrderDetails.OrderDetails')}</h3>
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
                            <td>{t('Checkout.OrderDetails.Subtotal')}</td>
                            <td>${orderInfo.cartSubtotal.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>{t('Checkout.OrderDetails.Taxes')}</td>
                            <td>${orderInfo.taxes.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>{t('Checkout.OrderDetails.Shipping')}</td>
                            <td>${orderInfo.shipping.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className='text-warning'>{t('Checkout.OrderDetails.Total')}</td>
                            <td className='text-warning'>${orderInfo.total.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
}
