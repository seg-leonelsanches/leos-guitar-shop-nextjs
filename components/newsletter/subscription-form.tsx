import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

export const SubscriptionForm = () => {
    const [email, setEmail] = useState('')
    
    const subscribeToNewsletter: Function = () => {
        alert(`You are now subscribed to our newsletter.`)
    }

    return <div className="input-group mb-3">
        <input
            type="email"
            id="subscription-email"
            name="subscription-email"
            className="form-control"
            placeholder="Your email address"
            aria-label="Your email address"
            aria-describedby="subscribe-button" 
            onChange={(event) => setEmail(event.target.value)}/>
        <button className="btn btn-dark" type="button" id="subscribe-button">
            <i className="bi bi-newspaper" onClick={() => subscribeToNewsletter()}> </i>
            Subscribe
        </button>
    </div>
}
