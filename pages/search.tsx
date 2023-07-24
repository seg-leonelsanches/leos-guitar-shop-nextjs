import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SearchResults } from "../components/search/search-results";
import { useAnalytics } from "../hooks";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Search: NextPage = () => {
  const router = useRouter();
  const analytics = useAnalytics();

  useEffect(() => {
    analytics.page("Retail Pages", "Search", {
      searchTerm: router.query.term,
    });
  });

  return (
    <>
      <Head>
        <title>Search - Leo's Guitar Shop</title>
      </Head>
      <div className="container">
        <div className="row">
          <SearchResults term={String(router.query.term)} />
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

export default Search;
