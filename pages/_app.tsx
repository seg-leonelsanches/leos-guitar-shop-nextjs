import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "flag-icons/css/flag-icons.min.css";
import "../components/fancy-box/fancybox.css";
import "../styles/globals.css";

import React, { useEffect } from "react";

import Head from "next/head";
import TagManager from "react-gtm-module";

import { appWithTranslation } from "next-i18next";
import { Footer, Header } from "../components";
import { Consent } from "../components/consent";
import { TopNav } from "../components/top-nav";
import { StoreProvider, getStores } from "../data/stores";
import { AnalyticsProvider } from "../providers";

interface AppProps {
  initialData: any;
}

const LeoApp: React.FC = ({ Component, pageProps }: Record<any, any>) => {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GTM_ID) {
      TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID });
    }
  }, []);

  const writeKey: string = String(process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY);

  const stores = getStores(pageProps.initialData);

  return (
    <AnalyticsProvider writeKey={writeKey}>
      <StoreProvider value={stores}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Crafted using Next.js to test Segment"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Consent writeKey={writeKey} />
        <TopNav />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </StoreProvider>
    </AnalyticsProvider>
  );
};

export default appWithTranslation(LeoApp);
