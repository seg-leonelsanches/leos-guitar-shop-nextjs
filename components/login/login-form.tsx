import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { faker } from '@faker-js/faker';
import crypto from 'crypto';
import { useTranslation } from 'next-i18next';

import { useMobxStores } from '../../data/stores';
import { useAnalytics } from '../../hooks';

export const LoginForm: React.FunctionComponent = () => {
    const { userLoginStore } = useMobxStores()
    const analytics = useAnalytics()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter();
    const { t, i18n } = useTranslation();

    const login: Function = () => {
        const email: string = faker.internet.email().toLowerCase();
        const shasum: crypto.Hash = crypto.createHash('sha1');
        shasum.update(email);

        const id: string = shasum.digest('hex');

        userLoginStore.setId(id);
        userLoginStore.setEmail(email);
        userLoginStore.setFirstName(faker.name.firstName());
        userLoginStore.setLastName(faker.name.lastName());
        userLoginStore.setLoggedIn(true);
        userLoginStore.setRegistrationComplete(true);

        analytics.identify(id, {
            firstName: userLoginStore.firstName,
            lastName: userLoginStore.lastName,
            email: userLoginStore.email
        });

        analytics.track(t('Segment.Track.SignedIn'), {
            method: 'Website',
            firstName: userLoginStore.firstName,
            lastName: userLoginStore.lastName,
            email: userLoginStore.email
        });

        router.push("/")
    }

    return <>
        <h4>{t('Login.ReturningCustomers')}</h4>
        <div className='box-shadow'>
            <form>
                <div className="mb-3">
                    <label htmlFor="login-email" className="form-label">{t('Login.EmailAddress')}</label>
                    <input type="email" className="form-control" id="login-email" aria-describedby="email-help" onChange={(event) => setEmail(event.target.value)} />
                    <div id="email-help" className="form-text">{t('Login.WeWillNeverShareYourEmailWithAnyoneElse')}</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="login-password" className="form-label">{t('Login.Password')}</label>
                    <input type="password" className="form-control" id="login-password" onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button type="button" className="btn btn-primary" onClick={() => login()}>{t('Login.Login')}</button>
            </form>
        </div>
    </>
}
