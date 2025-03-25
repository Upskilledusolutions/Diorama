"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useAnimation } from "framer-motion";
import styles from "@/styles/Home/blobslider.module.css";
import Image from "next/image";

const images = [
  "/Home/img1.jpg",
  "/Home/img2.jpg",
  "/Home/img3.jpg",
  "/Home/img4.jpg",
];

export default function BlobSlider() {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const controls = useAnimation();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check window width after mounting
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 786);
    };

    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animate "Learn" image with scroll
  const x = useTransform(scrollYProgress, [0, 1], [150, 0]);

  // Handle navigation
  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div ref={ref} className={styles.sliderContainer}>
      {/* Blob SVG Wrapper */}
      <div className={styles.blobWrapper}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="blobMask">
              <path
                fill="#FF0066"
                d="M57.1,-56.9C68.7,-45.4,69.2,-22.7,67.2,-2C65.1,18.7,60.5,37.3,48.9,52.1C37.3,66.8,18.7,77.7,1.5,76.2C-15.7,74.7,-31.5,61,-46.8,46.2C-62.2,31.5,-77.1,15.7,-79.5,-2.4C-81.9,-20.5,-71.8,-41.1,-56.4,-52.6C-41.1,-64.1,-20.5,-66.6,1.1,-67.7C22.7,-68.7,45.4,-68.5,57.1,-56.9Z"
                transform="translate(100 100)"
              />
            </clipPath>
          </defs>

          {/* Image inside Blob */}
          <AnimatePresence mode="wait">
            <motion.foreignObject
              key={index}
              width="200"
              height="200"
              clipPath="url(#blobMask)"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={images[index]}
                alt="Blob Image"
                className={styles.img}
              />
            </motion.foreignObject>
          </AnimatePresence>
        </svg>

        {/* Navigation Buttons */}
        <button className={styles.prev} onClick={prevSlide}>◀</button>
        <button className={styles.next} onClick={nextSlide}>▶</button>
      </div>

      {/* Content Area */}
      <div className={styles.flex}>
        {/* Points Indicator */}
        <div className={styles.points}>
          {[
            "1. Better Learning",
            "2. Quality Learning",
            "3. Growth and Development",
            "4. Efficient Learning",
          ].map((point, idx) => (
            <motion.div
              key={idx}
              className={`${styles.point} ${index === idx ? styles.activePoint : ""}`}
              onClick={() => setIndex(idx)}
              whileHover={{ scale: 1.1 }}
              animate={{ opacity: index === idx ? 1 : 0.5 }}
              style={{ cursor: "pointer" }}
            >
              {point}
            </motion.div>
          ))}
        </div>

        {/* Image + Button Section */}
        <div className={styles.imgContainer}>
          <motion.div className={styles.imgAnimate} style={isDesktop ? { x } : {}}>
            <Image className={styles.image} src={"/Home/learn.png"} width={500} height={500} alt="Learn More" />
          </motion.div>
          <button className={styles.btn}>Learn More</button>
        </div>
      </div>
    </div>
  );
}
