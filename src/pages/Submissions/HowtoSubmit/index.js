"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaBookOpen, FaFeatherAlt } from "react-icons/fa";
import styles from "@/styles/Submissions/howtosubmit.module.css";
import Image from "next/image";

export default function HowToSubmit() {
  return (
    <div>
      <div className={styles.banner}>
        <Image
          className={styles.squirrel}
          src={"/banners/6.jpg"}
          width={400}
          height={400}
          alt="image"
        />
        <Image
          className={styles.white}
          src={"/Home/hero10.png"}
          width={400}
          height={400}
          alt="image"
        />
        <div className={styles.content}>
          <div className={styles.heading}>How to Submit</div>
          <div className={styles.text}>
            We help children engage through fun and educational Magazines.
          </div>
        </div>
      </div>
    <div className={styles.container}>

      {/* Poetry Submission Section */}
      <section className={styles.section}>
        <motion.div
          className={styles.submissionBox}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.icon}>
            <FaQuoteLeft size={40} />
          </div>
          <div className={styles.info}>
            <h2>Poetry Submissions</h2>
            <p>
              Submit 3–5 original poems in a single document (max 1,000 words). Include
              your name, contact details, and a brief bio (150 words max). Please format
              your work as a PDF or Word document.
            </p>
          </div>
          <img
            src="/Submissions/poems.jpg"
            alt="Poetry"
            className={styles.subImage}
          />
        </motion.div>
      </section>

      {/* Prose Submission Section */}
      <section className={styles.section}>
        <motion.div
          className={styles.asubmissionBox}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className={styles.icon}>
            <FaBookOpen size={40} />
          </div>
          <div className={styles.info}>
            <h2>Prose Submissions</h2>
            <p>
              We accept short stories, essays, and creative fiction between 1,500 and
              5,000 words. Include a cover letter with your title, word count, and a short
              author bio. Format your submission as a PDF or Word document.
            </p>
          </div>
          <img
            src="/Submissions/prose1.jpg"
            alt="Prose"
            className={styles.subImage}
          />
        </motion.div>
      </section>

      {/* Creative Nonfiction Submission Section */}
      <section className={styles.section}>
        <motion.div
          className={styles.submissionBox}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className={styles.icon}>
            <FaFeatherAlt size={40} />
          </div>
          <div className={styles.info}>
            <h2>Creative Nonfiction Submissions</h2>
            <p>
              Share your personal essays, memoirs, and narrative journalism (2,000 to 6,000
              words). Include a cover letter with your title, word count, and a brief bio.
              Please submit your work in PDF or Word format.
            </p>
          </div>
          <img
            src="/Submissions/cnf.jpg"
            alt="Creative Nonfiction"
            className={styles.subImage}
          />
        </motion.div>
      </section>
    </div>
    </div>
  );
}
