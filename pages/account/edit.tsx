import type { NextPage } from "next";
import { RegistrationForm } from "../../components/login";
import Head from "next/head";
import { useMobxStores } from "../../data/stores";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const EditAccount: NextPage = () => {
  const { userLoginStore } = useMobxStores();
  const router = useRouter();

  if (!userLoginStore.loggedIn) {
    router.push("/login");
  }

  return (
    <>
      <Head>
        <title>Edit your User Information - Leo's Guitar Shop</title>
      </Head>
      <div className="container">
        <div className="row mb-5">
          <div className="col">
            <RegistrationForm actionButtonLabel="Save Changes" />
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

export default EditAccount;
