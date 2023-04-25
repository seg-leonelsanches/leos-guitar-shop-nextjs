import type { NextPage } from 'next'
import Head from 'next/head'

import { LoginForm, LoginWithPhoneForm, RegistrationForm } from '../components/login'

const Login: NextPage = () => {
    return <>
        <Head>
            <title>Login - Leo's Guitar Shop</title>
        </Head>
        <div className='container'>
            <div className='row mb-5'>
                <div className='col-lg-6 px-3'>
                    <LoginForm />
                    <LoginWithPhoneForm />
                </div>
                <RegistrationForm />
            </div>
        </div>
    </>
}

export default Login