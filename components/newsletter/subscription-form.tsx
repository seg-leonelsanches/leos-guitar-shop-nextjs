import React, { useState } from 'react'
import { useAnalytics } from '../../hooks'

export const SubscriptionForm = () => {
    const [email, setEmail] = useState('')
    const analytics = useAnalytics()

    const validateEmail = (email: string) => {
        return email
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
    }
    
    const subscribeToNewsletter: Function = () => {
        if (!validateEmail(email)) {
            alert(`Please provide a valid email address.`)
            return
        }

        analytics.identify(email)
        analytics.track("Newsletter Signed Up", {
            email
        })

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
        <button className="btn btn-dark" type="button" id="subscribe-button" onClick={() => subscribeToNewsletter()}>
            <i className="bi bi-newspaper"> </i>
            Subscribe
        </button>
    </div>
}
