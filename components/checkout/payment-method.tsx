import React from 'react'

export interface IPaymentMethod {
    paymentMethod: string
    setPaymentMethod: (paymentMethod: string) => void
}

export const PaymentMethod: React.FunctionComponent<IPaymentMethod> = (props) => (
    <>
        <div className='row'>
            <div className='col'>
                <h3>Payment Method</h3>
            </div>
        </div>

        <div className="form-check">
            <input className="form-check-input" type="radio" name="payment-option" id="credit-card-option" checked={props.paymentMethod === 'Credit Card'} onClick={() => props.setPaymentMethod('Credit Card')} />
            <label className="form-check-label" htmlFor="credit-card-option">
                Credit Card
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="payment-option" id="paypal-option" checked={props.paymentMethod === 'PayPal'} onClick={() => props.setPaymentMethod('PayPal')} />
            <label className="form-check-label" htmlFor="paypal-option">
                PayPal
            </label>
        </div>
    </>
)
