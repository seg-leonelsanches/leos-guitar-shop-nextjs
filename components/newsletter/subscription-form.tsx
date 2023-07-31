import React, { useState } from 'react'

import crypto from 'crypto';

import { useAnalytics } from '../../hooks'
import { useTranslation } from 'next-i18next';

export const SubscriptionForm = () => {
    const [email, setEmail] = useState('')
    const analytics = useAnalytics()
    const { t, i18n } = useTranslation();

    const validateEmail = (email: string) => {
        return email
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    }
    
    const subscribeToNewsletter: Function = () => {
        if (!validateEmail(email)) {
            alert(t('Subscription.PleaseProvideAValidEmailAddress'))
            return
        }

        const shasum: crypto.Hash = crypto.createHash('sha1');
        shasum.update(email);

        const id: string = shasum.digest('hex');

        analytics.identify(id, { email })
        analytics.track("Newsletter Signed Up", {
            email
        })

        alert(t('Subscription.YouAreNowSubscribedToOurNewsletter'))
    }

    return <div className="input-group mb-3">
        <input
            type="email"
            id="subscription-email"
            name="subscription-email"
            className="form-control"
            placeholder={t('Subscription.YourEmailAddress')}
            aria-label={t('Subscription.YourEmailAddress')}
            aria-describedby="subscribe-button" 
            onChange={(event) => setEmail(event.target.value)}/>
        <button className="btn btn-dark" type="button" id="subscribe-button" onClick={() => subscribeToNewsletter()}>
            <i className="bi bi-newspaper"> </i>
            {t('Subscribe')}
        </button>
    </div>
}
