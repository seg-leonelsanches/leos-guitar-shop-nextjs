import React from 'react'

import Link from 'next/link'

import { observer } from 'mobx-react';
import { useMobxStores } from '../data/stores';
import { UserLoginStore } from '../data/stores/user-login';
import { useTranslation } from 'next-i18next';
import { LargeTopNav } from './nav/large-top-nav';

interface WelcomeMessageProps {
    userLoginStore: UserLoginStore;
}

const WelcomeMessageComponent: React.FunctionComponent<WelcomeMessageProps> = (props) => {
    const { t, i18n } = useTranslation();
    let welcomeMessage = t('Welcome');
    if (props.userLoginStore.loggedIn) {
        if (props.userLoginStore.registrationComplete !== true) {
            return <h6>
                {t('Welcome')}! {t('ReviewYourInfo.PleaseTakeSomeTimeTo')} <Link href='/account'>{t('ReviewYourInfo.ReviewYourInfo')}</Link>.
            </h6>;
        } else {
            welcomeMessage = `${t('Welcome')}, ${props.userLoginStore.firstName} ${props.userLoginStore.lastName}.`;
        }
    }

    return <h6>
        {welcomeMessage}
    </h6>
}

const WelcomeMessage = observer(WelcomeMessageComponent)

const TopNavComponent = () => {
    const { userLoginStore } = useMobxStores();

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className="container-fluid">
                <div className='row w-100 mt-2 d-flex justify-content-between'>
                    <div className='col my-2 mx-3'>
                        <WelcomeMessage userLoginStore={userLoginStore} />
                    </div>
                    <div className='col'>
                        <LargeTopNav userLoginStore={userLoginStore} />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export const TopNav = observer(TopNavComponent)
