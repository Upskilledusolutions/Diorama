"use client";
import React from "react";
import Image from "next/image";
import styles from "@/styles/Terms/Terms.module.css";

export default function TermsAndConditions() {
  return (
    <div className={styles.container}>
      {/* Hero Banner */}
      <div className={styles.banner}>
        <Image
          className={styles.squirrel}
          src={"/banners/3.jpg"}
          width={400}
          height={400}
          alt="image"
        />
        <div className={styles.content}>
          <div className={styles.heading}>Terms and Conditions</div>
          <div className={styles.text}>
            We help children engage through fun and educational Magazines.
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Subscription Based Access</h2>
          <p>
            Welcome to Diorama, where creativity meets learning! By subscribing to
            our service, you gain access to our exclusive digital issues, interactive
            content, and special offers. Your subscription is billed on a monthly or
            annual basis and grants you unlimited access to current and archived issues.
          </p>
          <p>
            Please note that subscriptions are subject to periodic updates and may be
            modified by Diorama. In the event of non-payment or cancellation, access to
            premium content will be restricted.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Complete Magazine Downloads</h2>
          <p>
            In addition to subscription-based access, Diorama offers the option to
            purchase and download complete digital copies of select issues. Once
            downloaded, these issues are yours for personal use and offline reading.
          </p>
          <p>
            Digital copies are provided under a personal-use license only. Redistribution,
            reproduction, or sharing without permission is prohibited.
          </p>
        </section>

        <section className={styles.section}>
          <h2>General Terms</h2>
          <p>
            By using Diorama’s website and services, you agree to these Terms and
            Conditions. We reserve the right to update these terms at any time without
            prior notice. Your continued use of our services constitutes your
            acceptance of any changes.
          </p>
          <p>
            For any questions regarding these terms, please contact our support team.
          </p>
        </section>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Diorama. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
