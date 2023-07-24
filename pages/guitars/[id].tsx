import type { GetStaticPaths, NextPage } from "next";
import Head from "next/head";

import { useRouter } from "next/router";
import { GuitarSpecs } from "../../components/guitar-details";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const GuitarDetails: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Product details - Leo's Guitar Shop</title>
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
