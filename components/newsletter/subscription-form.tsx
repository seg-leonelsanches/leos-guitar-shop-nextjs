import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

export const SubscriptionForm = () => (
    <div className="input-group mb-3">
        <input 
            type="email" 
            id="subscription-email" 
            name="subscription-email" 
            className="form-control" 
            placeholder="Your email address" 
            aria-label="Your email address" 
            aria-describedby="subscribe-button" />
        <button className="btn btn-dark" type="button" id="subscribe-button">
            <i className="bi bi-newspaper"> </i>
            Subscribe
        </button>
    </div>
)
