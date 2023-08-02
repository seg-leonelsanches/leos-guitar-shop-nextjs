/* eslint-disable react/display-name */
import { useRouter } from "next/router";

import { useAnalytics } from "../hooks";
import { useTranslation } from "next-i18next";

export const withAnalytics = (Component: any) => (props: any) => {
    const analytics = useAnalytics();
    return <Component {...props} analytics={analytics} />;
};

export const withRouter = (Component: any) => (props: any) => {
    const router = useRouter();
    return <Component {...props} router={router} />;
};

export const withTranslation = (Component: any) => (props: any) => {
    const { t, i18n } = useTranslation();
    return <Component {...props} t={t} i18n={i18n} />;
};
