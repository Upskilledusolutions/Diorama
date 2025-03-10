"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "@/styles/Home/kids.module.css";
import Image from "next/image";

const kidsData = [
  {
    id: 1,
    title: "Toddlers (1-3 years)",
    description: "Engaging activities that boost sensory and motor skills.",
    imgSrc: "/Home/img1.jpg",
  },
  {
    id: 2,
    title: "Preschoolers (3-5 years)",
    description: "Interactive learning to develop cognitive and social skills.",
    imgSrc: "/Home/img2.jpg",
  },
  {
    id: 3,
    title: "School-age (6-12 years)",
    description: "Encouraging creativity and problem-solving abilities.",
    imgSrc: "/Home/img3.jpg",
  },
  {
    id: 4,
    title: "Teens (13-18 years)",
    description: "Enhancing independence and critical thinking.",
    imgSrc: "/Home/img4.jpg",
  },
];

export default function Kids() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Transform x-axis position based on scroll progress (slides in and out)
  const x = useTransform(scrollYProgress, [0, 1], [200, 0]); // Moves in as you scroll down

  return (
    <div ref={ref} className={styles.container}>
      <h2 className={styles.title}>Kids with Different Age Groups</h2>

      <div className={styles.cards}>
        {kidsData.map((kid) => (
          <div key={kid.id} className={styles.card}>
            <Image className={styles.img} src={kid.imgSrc} width={400} height={400} alt={kid.title} />
            <div className={styles.content}>
              <h3 className={styles.heading}>{kid.title}</h3>
              <p className={styles.text}>{kid.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Peeking Image (Scroll-Triggered) */}
      <motion.div className={styles.peekingWrapper} style={{ x }}>
        <Image className={styles.peekingImg} src={"/Home/peeking.png"} width={400} height={400} alt="Peeking Character" />
      </motion.div>
    </div>
  );
}
