import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { faker } from '@faker-js/faker';
import uuid from "node-uuid"

import crypto from 'crypto';

import { useMobxStores } from '../../data/stores';
import { useAnalytics } from '../../hooks';

export const LoginForm: React.FunctionComponent = () => {
    const { userLoginStore } = useMobxStores()
    const analytics = useAnalytics()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

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

        analytics.identify(id, {
            firstName: userLoginStore.firstName,
            lastName: userLoginStore.lastName,
            email: userLoginStore.email
        })

        router.push("/")
    }

    return <div className='col-lg-6'>
        <h4>Returning customers</h4>
        <div className='box-shadow'>
            <form>
                <div className="mb-3">
                    <label htmlFor="login-email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="login-email" aria-describedby="email-help" onChange={(event) => setEmail(event.target.value)} />
                    <div id="email-help" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="login-password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="login-password" onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button type="button" className="btn btn-primary" onClick={() => login()}>Login</button>
            </form>
        </div>
    </div>
}
