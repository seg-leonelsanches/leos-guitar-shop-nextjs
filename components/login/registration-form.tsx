import React, { useState } from 'react';
import { useRouter } from 'next/router';

import crypto from 'crypto';
import { observer } from 'mobx-react';
import { useTranslation } from 'next-i18next';

import { UserAddressModel } from '../../data/state-models';
import { useMobxStores } from '../../data/stores';
import { useAnalytics } from '../../hooks';

export interface RegistrationFormProps {
    actionButtonLabel: string
}

export const RegistrationFormComponent: React.FunctionComponent<RegistrationFormProps> = (props) => {
    const { userLoginStore } = useMobxStores()
    const analytics = useAnalytics()
    const router = useRouter()
    const { t, i18n } = useTranslation();

    const [firstName, setFirstName] = useState(userLoginStore.firstName || '')
    const [lastName, setLastName] = useState(userLoginStore.lastName || '')
    const [addressFirstLine, setAddressFirstLine] = useState(userLoginStore.addressData?.addressFirstLine || '')
    const [addressSecondLine, setAddressSecondLine] = useState(userLoginStore.addressData?.addressSecondLine || '')
    const [city, setCity] = useState(userLoginStore.addressData?.city || '')
    const [state, setState] = useState(userLoginStore.addressData?.state || '')
    const [zipCode, setZipCode] = useState(userLoginStore.addressData?.zipCode || '')
    const [email, setEmail] = useState(userLoginStore.email || '')
    const [phoneNumber, setPhoneNumber] = useState(userLoginStore.phone || '')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const register = () => {
        userLoginStore.setEmail(email);
        userLoginStore.setFirstName(firstName);
        userLoginStore.setLastName(lastName);

        const shasum: crypto.Hash = crypto.createHash('sha1');
        shasum.update(email);

        const id: string = shasum.digest('hex');
        userLoginStore.setId(id);

        const addressData: UserAddressModel = new UserAddressModel(
            addressFirstLine,
            addressSecondLine,
            city,
            state,
            zipCode
        );

        userLoginStore.setAddressData(addressData);
        userLoginStore.setLoggedIn(true);
        userLoginStore.setRegistrationComplete(true);

        analytics.identify(id, {
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
            } as any,
            preferredLanguage: 'English'
        });

        analytics.track(t('Segment.Track.SignedUp'), {
            method: 'Website',
            firstName: userLoginStore.firstName,
            lastName: userLoginStore.lastName,
            email: userLoginStore.email
        });

        router.push("/")
    }

    return <div className='box-shadow'>
        <form>
            <div className='row'>
                <div className="col-lg-6 mb-3">
                    <label htmlFor="first-name" className="form-label">{t('MyAccount.FirstName')}</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="first-name" 
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)} 
                    />
                </div>
                <div className="col-lg-6 mb-3">
                    <label htmlFor="last-name" className="form-label">{t('MyAccount.LastName')}</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="last-name" 
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)} 
                    />
                </div>
            </div>

            <div className='row'>
                <div className="col mb-3">
                    <label htmlFor="address-first-line" className="form-label">{t('MyAccount.AddressFirstLine')}</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="address-first-line" 
                        value={addressFirstLine}
                        onChange={(event) => setAddressFirstLine(event.target.value)} 
                    />
                </div>
            </div>

            <div className='row'>
                <div className="col mb-3">
                    <label htmlFor="address-second-line" className="form-label">{t('MyAccount.AddressSecondLine')}</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="address-second-line" 
                        value={addressSecondLine}
                        onChange={(event) => setAddressSecondLine(event.target.value)} 
                    />
                </div>
            </div>

            <div className='row'>
                <div className="col mb-3">
                    <label htmlFor="city" className="form-label">{t('MyAccount.City')}</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="city" 
                        value={city}
                        onChange={(event) => setCity(event.target.value)} 
                    />
                </div>
            </div>

            <div className='row'>
                <div className="col-lg-6 mb-3">
                    <label htmlFor="zip-code" className="form-label">{t('MyAccount.ZipCode')}</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="zip-code" 
                        value={zipCode}
                        onChange={(event) => setZipCode(event.target.value)} 
                    />
                </div>
                <div className="col-lg-6 mb-3">
                    <label htmlFor="state" className="form-label">{t('MyAccount.State')}</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="state" 
                        value={state}
                        onChange={(event) => setState(event.target.value)} 
                    />
                </div>
            </div>

            <div className='row'>
                <div className="col-lg-6 mb-3">
                    <label htmlFor="email" className="form-label">{t('MyAccount.EmailAddress')}</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        aria-describedby="email-help-2" 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} 
                    />
                    <div id="email-help-2" className="form-text">{t('MyAccount.WeWillNeverShareYourEmailWithAnyoneElse')}</div>
                </div>
                <div className="col-lg-6 mb-3">
                <label htmlFor="login-phone" className="form-label">{t('MyAccount.PhoneNumber')}</label>
                    <input type="tel" 
                        className="form-control" 
                        id="login-phone" 
                        aria-describedby="phone-help" 
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)} 
                    />
                    <div id="phone-help" className="form-text">{t('MyAccount.PleaseAddYourPhoneWithContryCode')}</div>
                </div>
            </div>

            <div className='row'>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">{t('MyAccount.Password')}</label>
                    <input type="password" className="form-control" id="password" onChange={(event) => setPassword(event.target.value)} />
                </div>
            </div>

            <div className='row'>
                <div className="mb-3">
                    <label htmlFor="confirm-password" className="form-label">{t('MyAccount.ConfirmPassword')}</label>
                    <input type="password" className="form-control" id="confirm-password" onChange={(event) => setConfirmPassword(event.target.value)} />
                </div>
            </div>

            <button type="button" className="btn btn-primary" onClick={() => register()}>
                {props.actionButtonLabel}
            </button>
        </form>
    </div>
}

export const RegistrationForm = observer(RegistrationFormComponent)