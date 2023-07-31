import React from 'react'
import { useTranslation } from 'next-i18next';

export interface IPaymentMethod {
    paymentMethod: string
    setPaymentMethod: (paymentMethod: string) => void
}

export const PaymentMethod: React.FunctionComponent<IPaymentMethod> = (props) => {
    const { t, i18n } = useTranslation();
    
    return <>
        <div className='row'>
            <div className='col'>
                <h3>{t('Checkout.PaymentMethod.PaymentMethod')}</h3>
            </div>
        </div>

        <div className="form-check">
            <input className="form-check-input" type="radio" name="payment-option" id="credit-card-option" checked={props.paymentMethod === 'Credit Card'} onClick={() => props.setPaymentMethod('Credit Card')} />
            <label className="form-check-label" htmlFor="credit-card-option">
                {t('Checkout.PaymentMethod.CreditCard')}
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="payment-option" id="paypal-option" checked={props.paymentMethod === 'PayPal'} onClick={() => props.setPaymentMethod('PayPal')} />
            <label className="form-check-label" htmlFor="paypal-option">
                {t('Checkout.PaymentMethod.PayPal')}
            </label>
        </div>
    </>
}
