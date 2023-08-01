import { useEffect } from "react";

import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { useMobxStores } from "../data/stores";
import { WishlistDetails } from "../components/wishlist";
import { useAnalytics } from "../hooks";

const Wishlist: NextPage = () => {
  const { userLoginStore } = useMobxStores();
  const router = useRouter();
  const analytics = useAnalytics();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (!userLoginStore.loggedIn) {
      router.push("/login");
      return;
    }

    analytics.page(t('Segment.Page.UserPages.UserPages'), t('Segment.Page.UserPages.Wishlist'));
  });

  return (
    <>
      <Head>
        <title>{t('WishList')} - Leo's Guitar Shop</title>
      </Head>
      <div className="container">
        <div className="row">
          <WishlistDetails />
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

export default Wishlist;
