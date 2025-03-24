"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "@/styles/Home/Testimonials.module.css";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    img: "/Home/img1.jpg",
    text: "This magazine is amazing! My child loves reading the stories and doing the activities every month.",
    name: "Sarah Thompson",
  },
  {
    id: 2,
    img: "/Home/img2.jpg",
    text: "A fantastic way to encourage kids to read and learn. Highly recommended for all parents!",
    name: "James Anderson",
  },
  {
    id: 3,
    img: "/Home/img3.jpg",
    text: "The perfect balance of fun and education. My son looks forward to every new edition!",
    name: "Emily Roberts",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Control "last.svg" animation
  const lastX = useTransform(scrollYProgress, [0, 1], ["10vw", "0vw"]); // Moves in as you scroll down

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.left}>
        <div className={styles.frame}>
          {/* Image Slider */}
          <div className={styles.slider}>
            {testimonials.map((testimonial, index) => (
              <Image
                key={testimonial.id}
                className={`${styles.img} ${index === currentIndex ? styles.active : styles.hidden}`}
                src={testimonial.img}
                width={400}
                height={400}
                alt="testimonial"
              />
            ))}
          </div>

          <Image className={styles.tv} src={"/Home/tv.png"} width={400} height={400} alt="tvbottom" ></Image>
        </div>
      </div>
      <div className={styles.textSection}>
        <div className={styles.content}>
          <h2>Testimonials</h2>
          <p className={styles.testimonialText}>{testimonials[currentIndex].text}</p>
          <p className={styles.author}>- {testimonials[currentIndex].name}</p>
          <button className={styles.btn}>See All Testimonials</button>
          </div>
        </div>

        {/* Sliding Image controlled by Scroll */}
        <motion.div className={styles.lastWrapper} style={{ x: lastX }}>
          <Image className={styles.last} src={"/Home/last.svg"} width={400} height={400} alt="last" />
        </motion.div>
    </div>
  );
}
