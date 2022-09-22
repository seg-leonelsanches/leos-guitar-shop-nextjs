import React from 'react';

export const RegistrationForm: React.FunctionComponent = () => (
    <div className='col-lg-6'>
        <h4>New customers</h4>
        <div className='box-shadow'>
            <form>
                <div className='row'>
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="first-name" className="form-label">First name</label>
                        <input type="text" className="form-control" id="first-name" />
                    </div>
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="last-name" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="last-name" />
                    </div>
                </div>

                <div className='row'>
                    <div className="col mb-3">
                        <label htmlFor="address-first-line" className="form-label">Address (first line)</label>
                        <input type="text" className="form-control" id="address-first-line" />
                    </div>
                </div>

                <div className='row'>
                    <div className="col mb-3">
                        <label htmlFor="address-second-line" className="form-label">Address (second line)</label>
                        <input type="text" className="form-control" id="address-second-line" />
                    </div>
                </div>

                <div className='row'>
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="zip-code" className="form-label">ZIP Code</label>
                        <input type="text" className="form-control" id="zip-code" />
                    </div>
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="state" className="form-label">State</label>
                        <input type="text" className="form-control" id="state" />
                    </div>
                </div>

                <div className='row'>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="email-help-2" />
                        <div id="email-help-2" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                </div>

                <div className='row'>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                </div>

                <div className='row'>
                    <div className="mb-3">
                        <label htmlFor="confirm-password" className="form-label">Confirm password</label>
                        <input type="password" className="form-control" id="confirm-password" />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    </div>
)