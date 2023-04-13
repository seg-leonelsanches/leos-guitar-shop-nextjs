import React from "react";

import Script from "next/script";

import { ConsentManager } from "@segment/consent-manager";
import inEU from '@segment/in-eu'

export const Consent = (props: any) => {
  const bannerContent = (
    <span>
      🍪 We like cookies 🍪
    </span>
  );
  const bannerSubContent = 'Change your preferences 👻';
  const preferencesDialogTitle = 'Website Data Collection';
  const preferencesDialogContent = 'We use data collected by cookies and JavaScript libraries.';
    
  const cancelDialogTitle = "Are you sure you want to cancel?";
  const cancelDialogContent =
    "Your preferences have not been saved.";

  return (
    <>
      <ConsentManager
        writeKey={props.writeKey}
        shouldRequireConsent={() => true}
        // Uncomment below to configure the component to only show the banner in the EU
        // shouldRequireConsent={inEU}
        bannerContent={bannerContent}
        bannerSubContent={bannerSubContent}
        preferencesDialogTitle={preferencesDialogTitle}
        preferencesDialogContent={preferencesDialogContent}
        cancelDialogTitle={cancelDialogTitle}
        cancelDialogContent={cancelDialogContent}
      />
    </>
  );
};
