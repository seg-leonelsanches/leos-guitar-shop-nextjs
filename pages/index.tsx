import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.css'

import { GuitarCatalog } from '../components/index-page'
import { useAnalytics } from '../hooks'

const Home: NextPage = () => {
    const analytics = useAnalytics()
    const title: string = "Leo's Guitar Shop"

    analytics.page("Retail Pages", "Home", {
        title
    })

    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
            </Head>

            <main className='main'>
                <div className='row'>
                    <div className='col'>
                        <h2 className='title'>
                            Featured
                        </h2>
                    </div>
                </div>

                <div className='row mt-5'>
                    <GuitarCatalog />
                </div>
            </main>
        </div>
    )
}

export default Home
