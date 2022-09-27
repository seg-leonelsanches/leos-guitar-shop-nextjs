import React from 'react';

export const PaymentMethod: React.FunctionComponent = (props) => (
    <>
        <div className='row'>
            <div className='col'>
                <h3>Payment Method</h3>
            </div>
        </div>

        <div className="form-check">
            <input className="form-check-input" type="radio" name="credit-card-option" id="credit-card-option" checked />
            <label className="form-check-label" htmlFor="credit-card-option">
                Credit Card
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="paypal-option" id="paypal-option" />
            <label className="form-check-label" htmlFor="paypal-option">
                PayPal
            </label>
        </div>
    </>
)
