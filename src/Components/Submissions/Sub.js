"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaRegClock, FaNewspaper } from "react-icons/fa";
import styles from "@/styles/Submissions/sub.module.css";

export default function KeyDatesSection() {
  return (
    <section className={styles.keyDatesSection}>
      <motion.div
        className={styles.keyDates}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Key Dates</h2>
        <ul className={styles.keyDatesList}>
          <li>
            <span className={styles.icon}><FaCalendarAlt /></span>
            <div>
              <strong>Submission Opens:</strong> August 1, 2025
            </div>
          </li>
          <li>
            <span className={styles.icon}><FaRegClock /></span>
            <div>
              <strong>Submission Deadline:</strong> September 15, 2025
            </div>
          </li>
          <li>
            <span className={styles.icon}><FaNewspaper /></span>
            <div>
              <strong>Publication Date:</strong> October 1, 2025
            </div>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
