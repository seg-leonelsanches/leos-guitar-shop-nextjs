import React from 'react'
import { observer } from 'mobx-react';
// import { useTranslation } from 'next-i18next';

import { useMobxStores } from '../../data/stores';

export interface ManageConsentModalProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    setParentVisible: (visible: boolean) => void;
}

const ManageConsentModalComponent: React.FunctionComponent<ManageConsentModalProps> = (props) => {
    // const { t, i18n } = useTranslation();
    const { consentStore } = useMobxStores();

    return <div className={`modal fade ${props.visible ? `d-block show` : ''}`} id="consent-management-modal" tabIndex={-1} role="dialog" aria-labelledby="consent-management-modal" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Cookies & Privacy</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className='modal-header'>
                    <p>This website uses cookies to ensure you get the best experience on our website.</p>
                </div>
                <div className="modal-body">
                    <div className='form-check'>
                        <input className="form-check-input" type="checkbox" id="necessary-cookies" checked={consentStore.essential} onChange={() => consentStore.setEssential(!consentStore.essential)}/>
                        <label className="form-check-label" htmlFor="necessary-cookies">
                            <strong>Essential Cookies: </strong>
                            help with the basic functionality of our website, e.g remember if you gave consent to cookies.
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className="form-check-input" type="checkbox" id="analytical-cookies" checked={consentStore.analytical} onChange={() => consentStore.setAnalytical(!consentStore.analytical)}/>
                        <label className="form-check-label" htmlFor="analytical-cookies">
                            <strong>Analytical Cookies: </strong>
                            make it possible to gather statistics about the use and traffic on our website, so we can make it better.
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className="form-check-input" type="checkbox" id="marketing-cookies" checked={consentStore.marketing} onChange={() => consentStore.setMarketing(!consentStore.marketing)}/>
                        <label className="form-check-label" htmlFor="marketing-cookies">
                            <strong>Marketing Cookies: </strong>
                            make it possible to show you more relevant social media content and advertisements on our website and other platforms.
                        </label>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => {
                        consentStore.setEssential(false);
                        consentStore.setAnalytical(false);
                        consentStore.setMarketing(false);
                        props.setVisible(false);
                        props.setParentVisible(false);
                    }}>
                        Deselect all
                    </button>
                    <button type="button" className="btn btn-primary" onClick={() => { 
                        props.setVisible(false);
                        props.setParentVisible(false);
                    }}>Save changes</button>
                </div>
            </div>
        </div>
    </div>
};

export const ManageConsentModal = observer(ManageConsentModalComponent)