import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import '../components/fancy-box/fancybox.css'

import type { AppProps } from 'next/app'
import Head from "next/head";
import Image from 'next/image'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <header>
      <div className='container my-5'>
        <Image className="m-auto" src="/logo.png" alt="Leo's Guitar Shop" width={1005} height={111} />
      </div>
    </header>
    <Component {...pageProps} />
  </>
}

export default MyApp
