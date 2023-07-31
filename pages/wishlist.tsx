import { useEffect } from "react";

import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { useMobxStores } from "../data/stores";
import { WishlistDetails } from "../components/wishlist";
import { useAnalytics } from "../hooks";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Wishlist: NextPage = () => {
  const { userLoginStore } = useMobxStores();
  const router = useRouter();
  const analytics = useAnalytics();

  useEffect(() => {
    if (!userLoginStore.loggedIn) {
      router.push("/login");
      return;
    }

    analytics.page("User Pages", "Wishlist");
  });

  return (
    <>
      <Head>
        <title>Wishlist - Leo&apos;s Guitar Shop</title>
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
