"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/styles/Submissions/sub.module.css";
import Sub from '@/Components/Submissions/Sub'

export default function SubmissionsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    age: "",
    class: "",
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process your submission here (e.g., call an API)
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      {/* Banner */}
      <div className={styles.banner}>
        <Image
          className={styles.squirrel}
          src={"/About/puppy.png"}
          width={400}
          height={400}
          alt="Banner"
        />
        <div className={styles.content}>
          <div className={styles.heading}>Submissions</div>
          <div className={styles.text}>
            We help children engage through fun and educational Magazines.
          </div>
        </div>
      </div>

      {/* Key Dates Section */}
      {/* <section className={styles.keyDatesSection}>
        <motion.div
          className={styles.keyDates}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Key Dates</h2>
          <ul>
            <li>
              <strong>Submission Opens:</strong> August 1, 2025
            </li>
            <li>
              <strong>Submission Deadline:</strong> September 15, 2025
            </li>
            <li>
              <strong>Publication Date:</strong> October 1, 2025
            </li>
          </ul>
        </motion.div>
      </section> */}

      <Sub />

      {/* Process (Steps) Section */}
      <section className={styles.stepsSection}>
        <motion.div
          className={styles.steps}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Our Process</h2>
          <div className={styles.stepsContainer}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepTitle}>Review Submission</div>
              <div className={styles.stepText}>
                Our team carefully reviews your submission for quality and
                relevance.
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepTitle}>Feedback & Revision</div>
              <div className={styles.stepText}>
                We provide feedback and collaborate with you to refine your work.
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepTitle}>Publication</div>
              <div className={styles.stepText}>
                After final approval, your work is published in our magazine.
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Submissions Form Section */}
      <section className={styles.formSection}>
        <motion.div
          className={styles.formContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Submit Your Work</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="age">Age</label>
              <input
                type="number"
                name="age"
                id="age"
                value={formData.age}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="class">Class</label>
              <input
                type="text"
                name="class"
                id="class"
                value={formData.class}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="file">Upload File</label>
              <input
                type="file"
                name="file"
                id="file"
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
