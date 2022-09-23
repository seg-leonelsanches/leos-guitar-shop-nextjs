import React from 'react';

export const LoginForm: React.FunctionComponent = () => (
    <div className='col-lg-6'>
        <h4>Returning customers</h4>
        <div className='box-shadow'>
            <form>
                <div className="mb-3">
                    <label htmlFor="login-email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="login-email" aria-describedby="email-help" />
                    <div id="email-help" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="login-password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="login-password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    </div>
)
