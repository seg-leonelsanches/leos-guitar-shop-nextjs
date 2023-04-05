import React, { useEffect, useState } from "react";

import { ConsentManager, openConsentManager } from "@segment/consent-manager";
import Script from "next/script";

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
      <Script
        id="show-banner"
        dangerouslySetInnerHTML={{
          __html: `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};;analytics.SNIPPET_VERSION="4.13.2";
          analytics.page();
          }}();`
        }}
      />
      <ConsentManager
        writeKey={props.writeKey}
        shouldRequireConsent={() => true}
        bannerContent={bannerContent}
        bannerSubContent={bannerSubContent}
        preferencesDialogTitle={preferencesDialogTitle}
        preferencesDialogContent={preferencesDialogContent}
        cancelDialogTitle={cancelDialogTitle}
        cancelDialogContent={cancelDialogContent}
      />

      <button type="button" onClick={openConsentManager}>
        Website Data Collection Preferences
      </button>
    </>
  );
};
