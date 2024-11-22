import {
  AnyAnalytics,
  Categories,
  createWrapper,
  resolveWhen,
} from "@segment/analytics-consent-tools";
import { IStores } from "../../data/stores/interfaces";

export const withConsent = <Analytics extends AnyAnalytics>(
  analyticsInstance: Analytics,
  settings: {
    stores: IStores;
    onConsentChanged: (event: any) => void;
  }
): Analytics => {
  return createWrapper<Analytics>({
    // Allow for control over wrapper initialization.
    shouldLoadWrapper: async () => {
      await resolveWhen(
        () => settings.stores !== undefined,
        500
      );
    },

    // Allow for control over wrapper + analytics initialization.
    // Delay any calls to analytics.load() until this function returns / resolves.
    shouldLoadSegment: async (ctx) => {
      /* const consentStoreJson = window.localStorage.getItem("ConsentStore");
      const consentStore: {
        essential: boolean;
        analytical: boolean;
        marketing: boolean;
      } = JSON.parse(String(consentStoreJson)); */
       const consentStore = settings.stores.consentStore;
      if (
        !consentStore.essential &&
        !consentStore.analytical &&
        !consentStore.marketing
      ) {
        console.log("Consent not given, loading with opt-out model");
        return ctx.load({ consentModel: "opt-out" });
      }

      console.log("Consent given, loading with opt-in model");
      return ctx.load({ consentModel: "opt-in" });
    },

    getCategories: () => {
      /* const consentStoreJson = window.localStorage.getItem("ConsentStore");
      const consentStore: {
        essential: boolean;
        analytical: boolean;
        marketing: boolean;
      } = JSON.parse(String(consentStoreJson)); */
      const consentStore = settings.stores.consentStore;
      return {
        essential: consentStore.essential,
        analytical: consentStore.analytical,
        marketing: consentStore.marketing,
      };
    },

    registerOnConsentChanged: (setCategories) => {
      settings.onConsentChanged(
        (event: {
          categories: Categories
        }) => {
          setCategories(event.categories as Categories);
        }
      );
    },
  })(analyticsInstance);
};
