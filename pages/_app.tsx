import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'
import '../components/fancy-box/fancybox.css'

import type { AppProps } from 'next/app'
import Head from "next/head"
import { Header } from '../components'
import { TopNav } from '../components/top-nav'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Crafted using Next.js to test Segment" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <TopNav />
    <Header />
    <Component {...pageProps} />
    <footer className='footer'>
        <a
          href="https://segment.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Segment
        </a>
      </footer>
  </>
}

export default MyApp
