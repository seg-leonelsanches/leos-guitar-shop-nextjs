import React, { useState } from 'react';

export const BillingDetails: React.FunctionComponent = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [addressFirstLine, setAddressFirstLine] = useState('')
    const [addressSecondLine, setAddressSecondLine] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')

    return <>
        <div className='row'>
            <div className='col'>
                <h3>Billing Details</h3>
            </div>
        </div>
        
        <div className='row'>
            <div className="col-lg-6 mb-3">
                <label htmlFor="first-name" className="form-label">First name</label>
                <input type="text" className="form-control" id="first-name" onChange={(event) => setFirstName(event.target.value)} />
            </div>
            <div className="col-lg-6 mb-3">
                <label htmlFor="last-name" className="form-label">Last name</label>
                <input type="text" className="form-control" id="last-name" onChange={(event) => setLastName(event.target.value)} />
            </div>
        </div>

        <div className='row'>
            <div className="col mb-3">
                <label htmlFor="address-first-line" className="form-label">Address (first line)</label>
                <input type="text" className="form-control" id="address-first-line" onChange={(event) => setAddressFirstLine(event.target.value)} />
            </div>
        </div>

        <div className='row'>
            <div className="col mb-3">
                <label htmlFor="address-second-line" className="form-label">Address (second line)</label>
                <input type="text" className="form-control" id="address-second-line" onChange={(event) => setAddressSecondLine(event.target.value)} />
            </div>
        </div>

        <div className='row'>
            <div className="col-lg-6 mb-3">
                <label htmlFor="zip-code" className="form-label">ZIP Code</label>
                <input type="text" className="form-control" id="zip-code" onChange={(event) => setZipCode(event.target.value)} />
            </div>
            <div className="col-lg-6 mb-3">
                <label htmlFor="state" className="form-label">State</label>
                <input type="text" className="form-control" id="state" onChange={(event) => setState(event.target.value)} />
            </div>
        </div>
    </>
}
