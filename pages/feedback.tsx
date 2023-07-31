import type { NextPage } from "next";
import Head from "next/head";
import { FeedbackForm } from "../components/feedback/feedback-form";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Feedback: NextPage = () => {
  return (
    <>
      <Head>
        <title>Feedback Form - Leo&apos;s Guitar Shop</title>
      </Head>
      <div className="container">
        <div className="row mb-5">
          <FeedbackForm />
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

export default Feedback;
