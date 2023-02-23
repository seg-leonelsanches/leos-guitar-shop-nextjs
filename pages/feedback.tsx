import type { NextPage } from 'next'
import Head from 'next/head'
import { FeedbackForm } from '../components/feedback/feedback-form'

const Feedback: NextPage = () => {
    return <>
        <Head>
            <title>Feedback Form - Leo's Guitar Shop</title>
        </Head>
        <div className='container'>
            <div className='row mb-5'>
                <FeedbackForm />
            </div>
        </div>
    </>
}

export default Feedback