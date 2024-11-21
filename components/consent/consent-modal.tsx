import React from 'react'
import { ManageConsentModal } from './manage-consent-modal';
// import { useTranslation } from 'next-i18next';

export const ConsentModal: React.FunctionComponent = () => {
    // const { t, i18n } = useTranslation();
    const [visible, setVisible] = React.useState(true);
    const [manageConsentVisible, setManageConsentVisible] = React.useState(false);

    return <div id="cb-cookie-banner" className={`position-fixed bottom-0 col-12 alert alert-dark text-center mb-0 ${visible ? `` : 'd-none'}`} role="alert">
    🍪 This website uses cookies to ensure you get the best experience on our website.&nbsp;
        <button type="button" className="btn btn-secondary btn-sm ms-3" onClick={() => setManageConsentVisible(true)}>
            Manage consent preferences
        </button>

        <button type="button" className="btn btn-primary btn-sm ms-3" onClick={() => setVisible(false)}>
            I Got It
        </button>
        <ManageConsentModal visible={manageConsentVisible} setVisible={setManageConsentVisible} setParentVisible={setVisible}/>
    </div>
};
