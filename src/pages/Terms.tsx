import React from "react";
import { Footer } from "../components/Footer";
export const Terms: React.FC = () => {
  return (
    <>
      <div
        className="tos-content"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.6",
          color: "#333",
        }}
      >
        <section>
          <h2
            style={{
              textAlign: "center",
              color: "#2a2a2a",
              marginBottom: "20px",
              borderBottom: "2px solid #ddd",
              paddingBottom: "10px",
            }}
          >
            🔒 Terms & Conditions & Product Disclaimer
          </h2>

          <div style={{ marginBottom: "20px" }}>
            <p>
              <strong>Effective Date:</strong> March, 20th, 2025
            </p>
            <p>
              <strong>Business Name:</strong> Zero Bars Outpost
            </p>
            <p>
              <strong>Website:</strong> zerobarsoutpost.com
            </p>
          </div>

          <hr style={{ border: "1px solid #eee", margin: "25px 0" }} />

          <h3 style={{ color: "#444", marginTop: "25px" }}>
            1. Legal Compliance
          </h3>
          <p>
            Zero Bars Outpost sells tactical bags with integrated holster
            systems intended for use by responsible, law-abiding firearm owners.
            It is the <strong>sole responsibility of the buyer</strong> to
            ensure compliance with all local, state, and federal laws regarding
            firearm ownership, concealed carry, and the use of holsters.
          </p>

          <hr style={{ border: "1px solid #eee", margin: "25px 0" }} />

          <h3 style={{ color: "#444", marginTop: "25px" }}>
            2. Liability Disclaimer
          </h3>
          <p>
            Zero Bars Outpost is <strong>not liable</strong> for any damages,
            injuries, or legal issues arising from the misuse or improper use of
            our products. The purchaser assumes{" "}
            <strong>full responsibility and liability</strong> for the safe
            handling, storage, transport, and use of any item purchased.
          </p>
          <p>We encourage all customers to:</p>
          <ul style={{ paddingLeft: "25px", marginBottom: "20px" }}>
            <li>Seek proper training in firearm safety and handling.</li>
            <li>
              Follow the <strong>Four Universal Firearm Safety Rules</strong> at
              all times.
            </li>
            <li>
              Never carry a firearm in a manner inconsistent with{" "}
              <strong>safe, lawful practices</strong>.
            </li>
          </ul>

          <hr style={{ border: "1px solid #eee", margin: "25px 0" }} />

          <h3 style={{ color: "#444", marginTop: "25px" }}>
            3. Concealed Carry Notice
          </h3>
          <p>
            Our products do not grant or imply any legal right to carry a
            concealed firearm. Possession of our tactical gear
            <strong> does not substitute</strong> for a concealed carry permit
            or any legal authorization to carry a weapon.
          </p>
          <p>It is your responsibility to:</p>
          <ul style={{ paddingLeft: "25px", marginBottom: "20px" }}>
            <li>
              Understand your{" "}
              <strong>state and local concealed carry laws</strong>.
            </li>
            <li>Carry only where and when legally permitted.</li>
          </ul>

          <hr style={{ border: "1px solid #eee", margin: "25px 0" }} />

          <h3 style={{ color: "#444", marginTop: "25px" }}>
            4. Shipping Policy
          </h3>
          <p>
            We currently ship to addresses{" "}
            <strong>within the United States only</strong>. We do not offer
            international shipping due to regulatory restrictions on
            firearm-related accessories.
          </p>

          <hr style={{ border: "1px solid #eee", margin: "25px 0" }} />

          <h3 style={{ color: "#444", marginTop: "25px" }}>
            5. Returns & Refunds
          </h3>
          <p>
            Please refer to our{" "}
            <a href="#" style={{ color: "#0066cc", textDecoration: "none" }}>
              Refund Policy
            </a>{" "}
            for details on eligible returns, restocking fees, and conditions.
          </p>

          <hr style={{ border: "1px solid #eee", margin: "25px 0" }} />

          <h3 style={{ color: "#444", marginTop: "25px" }}>
            6. Privacy & Payment
          </h3>
          <p>
            We use <strong>Stripe</strong> to process payments. All payment
            transactions are encrypted and securely processed by Stripe. We do
            not store or have access to your full credit card information.
            Please refer to Stripe’s Privacy Policy for details on how they
            handle your data.
          </p>

          <hr style={{ border: "1px solid #eee", margin: "25px 0" }} />

          <h3 style={{ color: "#444", marginTop: "25px" }}>
            7. Acceptance of Terms
          </h3>
          <p>By purchasing from Zero Bars Outpost, you confirm that you:</p>
          <ul style={{ paddingLeft: "25px", marginBottom: "20px" }}>
            <li>Have read and understood these Terms & Conditions.</li>
            <li>Agree to all disclaimers and liability limitations.</li>
            <li>
              Are solely responsible for the use and handling of the purchased
              items.
            </li>
          </ul>

          <p
            style={{
              marginTop: "30px",
              borderTop: "1px solid #eee",
              paddingTop: "20px",
            }}
          >
            If you have any questions, contact us at{" "}
            <a
              href="mailto:info.zerobarsoutpost@gmail.com"
              style={{ color: "#0066cc", textDecoration: "none" }}
            >
              info.zerobarsoutpost@gmail.com
            </a>
            .
          </p>
        </section>{" "}
      </div>
      <Footer />
    </>
  );
};
