import type { GetStaticPaths, NextPage } from "next";
import Head from "next/head";

import { useRouter } from "next/router";
import { GuitarSpecs } from "../../components/guitar-details";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const GuitarDetails: NextPage = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>{t('ProductDetails.ProductDetails')} - Leo's Guitar Shop</title>
      </Head>
      <div className="container mb-5">
        <GuitarSpecs id={Number(id)} />
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

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export default GuitarDetails;
