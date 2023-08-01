import { useEffect } from "react";
import type { NextPage } from "next";

import Head from "next/head";
import { useRouter } from "next/router";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { useMobxStores } from "../../data/stores";
import { RegistrationForm } from "../../components/login";

const EditAccount: NextPage = () => {
  const { userLoginStore } = useMobxStores();
  const router = useRouter();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (!userLoginStore.loggedIn) {
      router.push("/login");
    }
  }, [userLoginStore, router]);

  return (
    <>
      <Head>
        <title>{t('MyAccount.EditYourUserData')} - Leo's Guitar Shop</title>
      </Head>
      <div className="container">
        <div className="row mb-5">
          <div className="col">
            <RegistrationForm actionButtonLabel={t('MyAccount.SaveChanges')} />
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
