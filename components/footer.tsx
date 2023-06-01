import React from "react";

import Image from "next/image";

import { SubscriptionForm } from "./newsletter";

export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row mb-5">
        <div className="col-sm-6">
          <div className="row">
            <div className="col">
              <Image
                className="logo m-auto"
                src="/logo.png"
                alt="Leo's Guitar Shop"
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
              <p>This is a cool guitar store crafted to test Segment events.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row">
            <div className="col">
              <h5>Newsletter</h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Subscribe to our newsletter below</p>
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
