import React from 'react'

export const TopNav = () => (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className="container-fluid">
            <div className='row w-100 mt-2 d-flex justify-content-between'>
                <div className='col my-2 mx-3'>
                    <h6>Welcome!</h6>
                </div>
                <div className='col'>
                    <ul className="navbar-nav float-end">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <i className="bi bi-bag-heart-fill"> </i>
                                Wishlist
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="bi bi-person"> </i>
                                Log in
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
)
