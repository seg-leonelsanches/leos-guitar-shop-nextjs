import { observer } from "mobx-react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useMobxStores } from "../data/stores";
import { UserLoginStore } from "../data/stores/user-login";

interface WelcomeMessageProps {
  userLoginStore: UserLoginStore;
}

const WelcomeMessageComponent: React.FunctionComponent<WelcomeMessageProps> = ({
  userLoginStore,
}) => {
  const { t, i18n } = useTranslation();
  let welcomeMessage = t("Welcome");

  if (userLoginStore.loggedIn) {
    if (userLoginStore.registrationComplete !== true) {
      return (
        <h6>
          {t("Welcome")}! {t("ReviewYourInfo.PleaseTakeSomeTimeTo")}{" "}
          <Link href="/account">{t("ReviewYourInfo.ReviewYourInfo")}</Link>.
        </h6>
      );
    } else {
      welcomeMessage = `${t("Welcome")}, ${userLoginStore.firstName} ${
        userLoginStore.lastName
      }.`;
    }
  }

  return <h6 className="text-white">{welcomeMessage}</h6>;
};

const WelcomeMessage = observer(WelcomeMessageComponent);

const TopNavComponent = () => {
  const { userLoginStore } = useMobxStores();
  const { t, i18n } = useTranslation();
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="row w-100 d-flex justify-content-between">
          <div className="col my-2 mx-3">
            <WelcomeMessage userLoginStore={userLoginStore} />
          </div>
          <div className="col">
            <ul className="navbar-nav float-end">
              <li className="nav-item">
                <a href={`/pt-BR${router.asPath}`} className="nav-link">
                  <span className="fi fi-br"></span>
                </a>
              </li>
              <li className="nav-item">
                <a href={`/en-US${router.asPath}`} className="nav-link">
                  <span className="fi fi-us"></span>
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/cart">
                  <i className="bi bi-cart"> </i>
                  {t("MyCart")}
                </Link>
              </li>
              {userLoginStore.loggedIn ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" href="/wishlist">
                      <i className="bi bi-bag-heart-fill"> </i>
                      {t("Wishlist")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/account">
                      <i className="bi bi-person-workspace"> </i>
                      {t("MyAccount.MyAccount")}
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" href="/login">
                    <i className="bi bi-person"> </i>
                    {t("Login.Login")}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const TopNav = observer(TopNavComponent);
