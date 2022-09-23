import { useEffect } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { useMobxStores } from '../data/stores'

const Account: NextPage = () => {
    const { userLoginStore } = useMobxStores()
    const router = useRouter()

    useEffect(() => {
        if (!userLoginStore.loggedIn) router.push("/login")
    });

    const logout = () => {
        userLoginStore.logout()
        router.push("/")
    }

    return <>
        <Head>
            <title>My Account - Leo's Guitar Shop</title>
        </Head>
        <div className='container'>
            <div className='row'>
                <button type='button' onClick={() => logout()}>
                    Logout
                </button>
            </div>
        </div>
    </>
}

export default Account
