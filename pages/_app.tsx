import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'
import '../components/fancy-box/fancybox.css'

import React from 'react';
import App from 'next/app';

import Head from "next/head"

import { Footer, Header } from '../components'
import { TopNav } from '../components/top-nav'
import { getStores, StoreProvider } from '../data/stores';
import { AnalyticsProvider } from '../providers';

interface AppProps {
  initialData: any
}

class LeoApp extends App<AppProps> {
  static async getInitialProps(appContext: any) {
    // On server-side, this runs once and creates new stores
    // On client-side, this always reuses existing stores
    const mobxStores = getStores()

    // Make stores available to page's `getInitialProps`
    appContext.ctx.mobxStores = mobxStores

    // Call "super" to run page's `getInitialProps`
    const appProps = await App.getInitialProps(appContext)

    // Gather serialization-friendly data from stores
    const initialData = {
      postStoreInitialData: mobxStores.userLoginStore.__data(),
    }

    // Send it to `render`
    return {
      ...appProps,
      initialData,
    }
  }

  // function LeoApp({ Component, pageProps }: AppProps) {
  render() {
    const { Component, pageProps, initialData } = this.props;

    // During SSR, this will create new store instances so having `initialData` is crucial.
    // During the client-side hydration, same applies.
    // From then on, calls to `getStores()` return existing instances.
    const stores = getStores(initialData);

    return <AnalyticsProvider writeKey={String(process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY)}>
      <StoreProvider value={stores}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Crafted using Next.js to test Segment" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <TopNav />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </StoreProvider>
    </AnalyticsProvider>
  }
}

export default LeoApp
