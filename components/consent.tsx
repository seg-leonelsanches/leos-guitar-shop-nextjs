import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { SubscriptionForm } from "./newsletter";
import { ConsentManager, openConsentManager } from "@segment/consent-manager";

export const Consent = (props:any) => {
    const [shouldOpenConsent, setShouldOpenConsent] = useState(true)
    const bannerContent = (
    <span>
      We use cookies (and other similar technologies) to collect data to improve
      your experience on our site. By using our website, you’re agreeing to the
      collection of data as described in our{" "}
      <a href="/docs/legal/website-data-collection-policy/" target="_blank">
        Website Data Collection Policy
      </a>
      .
    </span>
  );
  const bannerSubContent = "You can change your preferences at any time.";
  const preferencesDialogTitle = "Website Data Collection Preferences";
  const preferencesDialogContent =
    "We use data collected by cookies and JavaScript libraries to improve your browsing experience, analyze site traffic, deliver personalized advertisements, and increase the overall performance of our site.";
  const cancelDialogTitle = "Are you sure you want to cancel?";
  const cancelDialogContent =
    "Your preferences have not been saved. By continuing to use our website, you՚re agreeing to our Website Data Collection Policy.";

    useEffect(() => {if (shouldOpenConsent) {
        openConsentManager ()
        setShouldOpenConsent (false)
        }
    }, [shouldOpenConsent])

  return (
    <>
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
