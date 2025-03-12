"use client";
import React from "react";
import Image from "next/image";
import styles from "@/styles/Privacy/Privacy.module.css";

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      {/* Hero Banner */}
      <div className={styles.banner}>
    <Image
      className={styles.squirrel}
      src={"/Gallery/fox.png"}
      width={400}
      height={400}
      alt="image"
    />
    <div className={styles.content1}>
      <div className={styles.heading}>Privacy Policy</div>
      <div className={styles.text}>
        We help children engage through fun and educational Magazines.
      </div>
    </div>
  </div>

      {/* Content Section */}
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Introduction</h2>
          <p>
            Welcome to Diorama, our innovative children’s magazine. We are committed to protecting your privacy and ensuring that your personal information is handled responsibly. This Privacy Policy explains how we collect, use, and safeguard your data when you subscribe to our service or download our digital magazines.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Information We Collect</h2>
          <p>
            We collect personal information such as your name, email address, and payment details when you subscribe. We also gather non-personal data like device information and browsing behavior to improve our services. For magazine downloads, a limited set of data may be collected to process your order.
          </p>
        </section>

        <section className={styles.section}>
          <h2>How We Use Your Information</h2>
          <p>
            Your information is used to process subscriptions, deliver digital content, and personalize your experience. We may send you updates, promotions, and important notices. Rest assured, we never sell your personal data to third parties.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Cookies and Tracking</h2>
          <p>
            Our website uses cookies and similar technologies to track user interactions and enhance your browsing experience. You can adjust your cookie preferences via your browser settings.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Data Security & Your Rights</h2>
          <p>
            We implement industry-standard security measures to protect your data. You have the right to access, update, or delete your personal information at any time. If you have any questions or concerns, please contact our support team.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page along with the effective date. Your continued use of our services constitutes acceptance of any updates.
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
