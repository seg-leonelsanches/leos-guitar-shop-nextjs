import type { NextPage } from 'next'
import Head from 'next/head'

import useSWR from 'swr'
import axios from 'axios'

import { GuitarCard } from '../components/guitar-card'
import styles from '../styles/Home.module.css'
import { IGuitar } from '../models'

const fetcher = (url: string) => axios.get(url).then(res => res.data)

const GuitarCatalog: Function = () => {
  // `data` will always be available as it's in `fallback`.
  const { data } = useSWR('/api/catalog', fetcher)
  if (!data) return <>Loading...</>

  const guitarCatalog: IGuitar[] = data
  return <>{guitarCatalog.map((g: IGuitar) => (
    <GuitarCard id={g.id} model={g.model} manufacturer={g.manufacturer} price={g.price} mainImage={g.mainImage} key={g.id} />
  ))}</>
}

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
