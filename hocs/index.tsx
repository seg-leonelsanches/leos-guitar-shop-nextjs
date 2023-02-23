import { useRouter } from "next/router";
import { useAnalytics } from "../hooks";

export const withAnalytics = (Component: any) => (props: any) => {
    const analytics = useAnalytics();
    return <Component {...props} analytics={analytics} />;
};

export const withRouter = (Component: any) => (props: any) => {
    const router = useRouter();
    return <Component {...props} router={router} />;
};