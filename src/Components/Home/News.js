"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "@/styles/Home/news.module.css";
import Image from "next/image";

const eventsData = [
  {
    id: 1,
    title: "Creative Art Contest",
    description: "Let your imagination run wild! Submit your best artwork and stand a chance to get featured.",
    imgSrc: "/Home/img1.jpg",
  },
  {
    id: 2,
    title: "Storytelling Challenge",
    description: "Share your magical tales and become the next young storyteller in our magazine!",
    imgSrc: "/Home/img2.jpg",
  },
  {
    id: 3,
    title: "Junior Science Fair",
    description: "Showcase your experiments and discoveries in our exciting science fair for young innovators!",
    imgSrc: "/Home/img3.jpg",
  },
];

export default function News() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Slide-in effect
  const x = useTransform(scrollYProgress, [0, 1], [200, 0]);

  return (
    <div ref={ref} className={styles.container}>
      <Image className={styles.imgbg} src={'/Home/jungle.png'} width={1000} height={1000} alt="jungle" />
      <h2 className={styles.title}>Exciting Events for Young Explorers!</h2>

      <div className={styles.cards}>
        {eventsData.map((event) => (
          <motion.div 
            key={event.id} 
            className={styles.card} 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image className={styles.img} src={event.imgSrc} width={400} height={400} alt={event.title} />
            <div className={styles.content}>
              <h3 className={styles.heading}>{event.title}</h3>
              <p className={styles.text}>{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
