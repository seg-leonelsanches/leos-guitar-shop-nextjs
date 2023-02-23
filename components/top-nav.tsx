import React from 'react'

import Link from 'next/link'

import { observer } from 'mobx-react';
import { useMobxStores } from '../data/stores';

const TopNavComponent = () => {
    const { userLoginStore } = useMobxStores();

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className="container-fluid">
                <div className='row w-100 mt-2 d-flex justify-content-between'>
                    <div className='col my-2 mx-3'>
                        <h6>Welcome{userLoginStore.loggedIn ? `, ${userLoginStore.firstName} ${userLoginStore.lastName}.` : '!'}</h6>
                    </div>
                    <div className='col'>
                        <ul className="navbar-nav float-end">
                            <li className="nav-item">
                                <Link className="nav-link" href="/cart">

                                    <i className="bi bi-cart"> </i>My Cart
                                </Link>
                            </li>
                            {userLoginStore.loggedIn ?
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/wishlist">

                                            <i className="bi bi-bag-heart-fill"> </i>Wishlist
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/account">

                                            <i className="bi bi-person-workspace"> </i>My Account
                                        </Link>
                                    </li>
                                </>
                                :
                                <li className="nav-item">
                                    <Link className="nav-link" href="/login">

                                        <i className="bi bi-person"> </i>Log in
                                    </Link>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export const TopNav = observer(TopNavComponent)
