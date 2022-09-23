import React, { useState } from 'react';
import { useMobxStores } from '../../data/stores';

export const LoginForm: React.FunctionComponent = () => {
    const { userLoginStore } = useMobxStores()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login: Function = () => {
        userLoginStore.setEmail(email);
        userLoginStore.setFirstName("Fred");
        userLoginStore.setLastName("Flintstone");
        userLoginStore.setLoggedIn(true);
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
