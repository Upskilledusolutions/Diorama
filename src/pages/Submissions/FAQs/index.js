"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import styles from "@/styles/Submissions/FAQ.module.css";
import Image from "next/image";

const faqData = [
    {
      question: "What is Diorama?",
      answer:
        "Diorama is an innovative children’s magazine that combines creative storytelling with educational content to inspire young minds.",
    },
    {
      question: "How can I subscribe?",
      answer:
        "You can subscribe through our website by clicking the Subscribe button and following the simple steps provided.",
    },
    {
      question: "What types of content do you offer?",
      answer:
        "We offer a mix of stories, art, puzzles, and educational activities designed to engage and inspire children of all ages.",
    },
    {
      question: "How do I submit my work?",
      answer:
        "Visit our Submissions page for detailed guidelines on submitting your poetry, prose, or creative nonfiction for consideration.",
    },
    {
      question: "How often is the magazine published?",
      answer:
        "Diorama is published monthly, ensuring fresh, engaging content and creative inspiration every month.",
    },
    {
      question: "What age groups does Diorama cater to?",
      answer:
        "Our magazine is designed for children from toddlers to pre-teens, offering age-appropriate content for each stage of development.",
    },
    {
      question: "Can I contribute artwork as well as written content?",
      answer:
        "Absolutely! We welcome submissions in various formats including illustrations, photography, and written stories to help bring our magazine to life.",
    },
    {
      question: "How can I get in touch for collaborations?",
      answer:
        "You can contact us via our website's contact form or email us directly at collaborations@diorama.com for partnership opportunities.",
    },
  ];

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.faqItem}>
      <div className={styles.question} onClick={() => setIsOpen(!isOpen)}>
        <span>{faq.question}</span>
        <motion.span
          className={styles.icon}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FaPlus size={24} />
        </motion.span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.answer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Image
          className={styles.squirrel}
          src={"/banners/5.jpg"}
          width={400}
          height={400}
          alt="image"
        />
        <div className={styles.content}>
          <div className={styles.heading}>FAQs</div>
          <div className={styles.text}>
            We help children engage through fun and educational Magazines.
          </div>
        </div>
      </div>
      <div className={styles.faqList}>
        {faqData.map((faq, index) => (
          <FAQItem key={index} faq={faq} />
        ))}
      </div>
    </div>
  );
}
