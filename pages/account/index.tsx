import { useEffect } from "react";

import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { useMobxStores } from "../../data/stores";
import { useAnalytics } from "../../hooks";

const Account: NextPage = () => {
  const { userLoginStore } = useMobxStores();
  const router = useRouter();
  const analytics = useAnalytics();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (!userLoginStore.loggedIn) {
      router.push("/login");
      return;
    }

    analytics.page(t('Segment.Page.UserPages.UserPages'), t('Segment.Page.UserPages.Account'));
  });

  const logout = () => {
    userLoginStore.logout();
    analytics.reset();
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>{t('MyAccount.MyAccount')} - Leo&apos;s Guitar Shop</title>
      </Head>
      <div className="container mb-5">
        <div className="row">
          <div className="col">
            <table className="table table-dark">
              <tbody>
                <tr>
                  <td>{t('MyAccount.Name')}</td>
                  <td>
                    {userLoginStore.firstName} {userLoginStore.lastName}
                  </td>
                </tr>
                <tr>
                  <td>{t('MyAccount.Email')}</td>
                  <td>{userLoginStore.email}</td>
                </tr>
                <tr>
                  <td>{t('MyAccount.PhoneNumber')}</td>
                  <td>{userLoginStore.phone}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="d-flex col justify-content-end">
            <button
              type="button"
              className="btn btn-info mx-2"
              onClick={() => router.push("/account/edit")}
            >
              {t('MyAccount.EditYourUserData')}
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => logout()}
            >
              {t('MyAccount.Logout')}
            </button>
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

export default Account;
