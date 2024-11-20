import { FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { UserLoginStore } from "../../data/stores/user-login";
import { observer } from "mobx-react";

export interface ILargeTopNavProps {
    userLoginStore: UserLoginStore
}

export const LargeTopNavComponent: FunctionComponent<ILargeTopNavProps> = (props) => {
    const { t, i18n } = useTranslation();
    const router = useRouter();

    return <ul className="d-none d-lg-flex navbar-nav float-end">
        <li className='nav-item'>
            <a href={`/pt-BR${router.asPath}`} className='nav-link'>
                <span className="fi fi-br"></span>
            </a>
        </li>
        <li className='nav-item'>
            <a href={`/en-US${router.asPath}`} className='nav-link'>
                <span className="fi fi-us"></span>
            </a>
        </li>
        <li className="nav-item">
            <Link className="nav-link" href="/cart">

                <i className="bi bi-cart"> </i>{t('MyCart')}
            </Link>
        </li>
        {props.userLoginStore.loggedIn ?
            <>
                <li className="nav-item">
                    <Link className="nav-link" href="/wishlist">

                        <i className="bi bi-bag-heart-fill"> </i>{t('Wishlist')}
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/account">

                        <i className="bi bi-person-workspace"> </i>{t('MyAccount.MyAccount')}
                    </Link>
                </li>
            </>
            :
            <li className="nav-item">
                <Link className="nav-link" href="/login">

                    <i className="bi bi-person"> </i>{t('Login.Login')}
                </Link>
            </li>
        }
    </ul>
}

export const LargeTopNav = observer(LargeTopNavComponent);
