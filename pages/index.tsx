import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.css'

import { GuitarCatalog } from '../components/index-page'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Leo's Guitar Shop</title>
        <meta name="description" content="Crafted using Next.js to test Segment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className='row'>
          <div className='col'>
            <h1 className={styles.title}>
              Welcome to Leo's Guitar Shop!
            </h1>
          </div>
        </div>

        <div className='row'>
          <div className='col mt-5'>
            <GuitarCatalog />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://segment.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Segment
        </a>
      </footer>
    </div>
  )
}

export default Home
