import React from "react";

import Image from "next/legacy/image";

import { SubscriptionForm } from "./newsletter";
import { useTranslation } from "next-i18next";

export const Footer: React.FunctionComponent = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="row mb-5">
          <div className="col-sm-6">
            <div className="row">
              <div className="col">
                <Image
                  className="logo m-auto"
                  src="/logo.png"
                  alt="Leo&apos;s Guitar Shop"
                  width={251}
                  height={27}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>
                  {t('ShopDescription')}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col">
                <h5>{t('Newsletter')}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>{t('NewsletterDescription')}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <SubscriptionForm />
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-1">
          <div className="col d-flex align-items-center justify-content-center">
            <a
              className="m-auto"
              href="https://segment.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by Segment
            </a>
          </div>
        </div>
        <div className="footer-bottom"></div>
      </div>
    </footer>
  );
};
