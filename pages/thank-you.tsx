import React, { useEffect } from "react";

import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { useMobxStores } from "../data/stores";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const ThankYou: NextPage = () => {
  const { cartStore } = useMobxStores();
  const router = useRouter();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (!cartStore.purchaseComplete) {
      router.push("/");
    }
  });

  return (
    <>
      <Head>
        <title>{t('ThankYou.ThankYou')} - Leo's Guitar Shop</title>
      </Head>
      <div className="container">
        <div className="row my-5 py-5">
          <div className="col">
            <h2 className="title">{t('ThankYou.ThankYou')}</h2>
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <h2 className="description">{t('ThankYou.ThankYouForYourBusiness')}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
      // Will be passed to the page component as props
    },
  };
}

export default ThankYou;
