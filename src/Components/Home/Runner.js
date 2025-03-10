"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "@/styles/Home/Runner.module.css";
import Image from "next/image";

export default function Runner() {
  const { scrollYProgress } = useScroll();

  // Runner moves from 0vw to 15vw
  const runnerX = useTransform(scrollYProgress, [0, 1], ["0vw", "15vw"]);

  // Snail moves from 40vw to -10vw (right to left, slower than runner)
  const snailX = useTransform(scrollYProgress, [0, 1], ["40vw", "-10vw"]);

  return (
    <div className={styles.container}>
      {/* Runner Image - Moves Left to Right */}
      <motion.div style={{ x: runnerX }} className={styles.runner}>
        <Image className={styles.runnerimg} src={"/Home/runners.svg"} height={400} width={400} alt="Runner" />
      </motion.div>

      {/* Snail Image - Moves Right to Left (Slower) */}
      <motion.div style={{ x: snailX }} className={styles.snail}>
        <Image src={"/Home/snail.svg"} height={400} width={400} alt="Snail" />
      </motion.div>

      {/* Path and Tree - Static */}
      <Image className={styles.img2} src={"/Home/path.svg"} height={400} width={400} alt="Path" />
      <Image className={styles.img3} src={"/Home/tree.svg"} height={400} width={400} alt="Tree" />

      {/* Content Section */}
      <div className={styles.content}>
        <div className={styles.title}>Join us now!</div>
        <div className={styles.text}>
          Become a part of our exciting children's magazine, where curiosity meets creativity! We bring engaging stories, fun activities, educational content, and interactive challenges designed to inspire young minds. Whether you're a parent, teacher, or young explorer, our platform is perfect for learning and entertainment. Subscribe to receive fresh content, contribute your own stories or artwork, and connect with a vibrant community. Let's nurture imagination, encourage reading, and make learning fun together. Join us today and unlock a world of adventure, knowledge, and creativity for your child!
        </div>
        <div className={styles.flex}>
            <button className={styles.btn1}>Schedule a Meeting</button>
            or
            <button className={styles.btn2}>Join Us now!</button>
        </div>
      </div>
    </div>
  );
}
