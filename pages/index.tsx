import type { NextPage } from 'next'
import Head from 'next/head'

import { GuitarCard } from '../components/guitar-card'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Leo's Guitar Shop</title>
        <meta name="description" content="Generated by create next app" />
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
            <GuitarCard model='Gibson Test' manufacturer='Gibson' price={500} mainImage='https://cdn.pixabay.com/photo/2016/10/12/23/22/electric-guitar-1736291_960_720.jpg' />
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
