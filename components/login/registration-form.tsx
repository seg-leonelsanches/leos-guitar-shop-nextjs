import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { UserAddressModel } from '../../data/state-models';
import { useMobxStores } from '../../data/stores';
import { useAnalytics } from '../../hooks';

export const RegistrationForm: React.FunctionComponent = () => {
    const { userLoginStore } = useMobxStores()
    const analytics = useAnalytics()
    const router = useRouter()
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [addressFirstLine, setAddressFirstLine] = useState('')
    const [addressSecondLine, setAddressSecondLine] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const register = () => {
        userLoginStore.setEmail(email);
        userLoginStore.setFirstName(firstName);
        userLoginStore.setLastName(lastName);

        const addressData: UserAddressModel = new UserAddressModel(
            addressFirstLine,
            addressSecondLine,
            city,
            state,
            zipCode
        );

        userLoginStore.setAddressData(addressData);
        userLoginStore.setLoggedIn(true);

        analytics.identify(email, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            address: { 
                firstLine: addressFirstLine,
                secondLine: addressSecondLine,
                city: city,
                state: state,
                zipCode: zipCode,
                country: 'United States of America'
            },
            preferredLanguage: 'English'
        })

        router.push("/")
    }
    
    return <div className='col-lg-6'>
        <h4>New customers</h4>
        <div className='box-shadow'>
            <form>
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
                    <div className="col mb-3">
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text" className="form-control" id="city" onChange={(event) => setCity(event.target.value)} />
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

                <div className='row'>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="email-help-2" onChange={(event) => setEmail(event.target.value)} />
                        <div id="email-help-2" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                </div>

                <div className='row'>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" onChange={(event) => setPassword(event.target.value)} />
                    </div>
                </div>

                <div className='row'>
                    <div className="mb-3">
                        <label htmlFor="confirm-password" className="form-label">Confirm password</label>
                        <input type="password" className="form-control" id="confirm-password" onChange={(event) => setConfirmPassword(event.target.value)} />
                    </div>
                </div>

                <button type="button" className="btn btn-primary" onClick={() => register()}>Register</button>
            </form>
        </div>
    </div>
}
