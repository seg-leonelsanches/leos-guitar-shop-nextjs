import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'
import '../components/fancy-box/fancybox.css'

import type { AppProps } from 'next/app'
import Head from "next/head"
import { Header } from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Header />
    <Component {...pageProps} />
  </>
}

export default MyApp
