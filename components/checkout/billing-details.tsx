import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';

import { useMobxStores } from '../../data/stores';

export const BillingDetails: React.FunctionComponent = () => {
    const { userLoginStore } = useMobxStores();
    const { t, i18n } = useTranslation();
    
    const [firstName, setFirstName] = useState(userLoginStore.firstName || '')
    const [lastName, setLastName] = useState(userLoginStore.lastName || '')
    const [addressFirstLine, setAddressFirstLine] = useState(userLoginStore.addressData?.addressFirstLine || '')
    const [addressSecondLine, setAddressSecondLine] = useState(userLoginStore.addressData?.addressSecondLine || '')
    const [city, setCity] = useState(userLoginStore.addressData?.city || '')
    const [state, setState] = useState(userLoginStore.addressData?.state || '')
    const [zipCode, setZipCode] = useState(userLoginStore.addressData?.zipCode?.toString() || '')

    return <>
        <div className='row'>
            <div className='col'>
                <h3>{t('Checkout.BillingDetails.BillingDetails')}</h3>
            </div>
        </div>
        
        <div className='row'>
            <div className="col-lg-6 mb-3">
                <label htmlFor="first-name" className="form-label">{t('Checkout.BillingDetails.FirstName')}</label>
                <input type="text" className="form-control" id="first-name" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
            </div>
            <div className="col-lg-6 mb-3">
                <label htmlFor="last-name" className="form-label">{t('Checkout.BillingDetails.LastName')}</label>
                <input type="text" className="form-control" id="last-name" value={lastName} onChange={(event) => setLastName(event.target.value)} />
            </div>
        </div>

        <div className='row'>
            <div className="col mb-3">
                <label htmlFor="address-first-line" className="form-label">{t('Checkout.BillingDetails.AddressFirstLine')}</label>
                <input type="text" className="form-control" id="address-first-line" value={addressFirstLine} onChange={(event) => setAddressFirstLine(event.target.value)} />
            </div>
        </div>

        <div className='row'>
            <div className="col mb-3">
                <label htmlFor="address-second-line" className="form-label">{t('Checkout.BillingDetails.AddressSecondLine')}</label>
                <input type="text" className="form-control" id="address-second-line" value={addressSecondLine} onChange={(event) => setAddressSecondLine(event.target.value)} />
            </div>
        </div>

        <div className='row'>
            <div className="col mb-3">
                <label htmlFor="city" className="form-label">{t('Checkout.BillingDetails.City')}</label>
                <input type="text" className="form-control" id="city" value={city} onChange={(event) => setCity(event.target.value)} />
            </div>
        </div>

        <div className='row'>
            <div className="col-lg-6 mb-3">
                <label htmlFor="zip-code" className="form-label">{t('Checkout.BillingDetails.ZipCode')}</label>
                <input type="text" className="form-control" id="zip-code" value={zipCode} onChange={(event) => setZipCode(event.target.value)} />
            </div>
            <div className="col-lg-6 mb-3">
                <label htmlFor="state" className="form-label">{t('Checkout.BillingDetails.State')}</label>
                <input type="text" className="form-control" id="state" value={state} onChange={(event) => setState(event.target.value)} />
            </div>
        </div>
    </>
}
