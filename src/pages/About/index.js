"use client";
import React, { useRef } from "react";
import styles from "@/styles/About/about.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Index() {
  const { scrollYProgress } = useScroll();
  // Snail horizontal movement (to and fro)
  const snailX = useTransform(scrollYProgress, [0, 1], ["40vw", "-10vw"]);

  // For the first flex container
  const flexRef1 = useRef(null);
  const { scrollYProgress: flexProgress1 } = useScroll({
    target: flexRef1,
    offset: ["start end", "end start"],
  });
  const imageY1 = useTransform(flexProgress1, [0, 1], [0, 50]);
  const contentY1 = useTransform(flexProgress1, [0, 1], [0, -50]);

  // For the second flex container
  const flexRef2 = useRef(null);
  const { scrollYProgress: flexProgress2 } = useScroll({
    target: flexRef2,
    offset: ["start end", "end start"],
  });
  const imageY2 = useTransform(flexProgress2, [0, 1], [0, 50]);
  const contentY2 = useTransform(flexProgress2, [0, 1], [0, -50]);

  return (
    <div>
      {/* Banner Section */}
      <div className={styles.banner}>
        <Image
          className={styles.squirrel}
          src={"/About/squirrel.png"}
          width={400}
          height={400}
          alt="image"
        />
        <div className={styles.content}>
          <div className={styles.heading}>About</div>
          <div className={styles.text}>
            We help children engage through fun and educational Magazines.
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className={styles.history}>
        <div className={styles.frame}>
          <Image
            className={styles.top}
            src={"/Home/tvtop.svg"}
            width={400}
            height={400}
            alt="tvtop"
          />
          <Image
            className={styles.img}
            src={"/Home/img1.jpg"}
            width={400}
            height={400}
            alt="testimonial"
          />
          <Image
            className={styles.bottom}
            src={"/Home/tvbottom.svg"}
            width={400}
            height={400}
            alt="tvbottom"
          />
        </div>
        <div className={styles.historycontent}>
          <div className={styles.heading}>Our History</div>
          <div>
            Diorama, our innovative children’s magazine, began its journey in India
            in 2025. Founded by a passionate group of educators, artists, and child
            psychologists, Diorama was created to ignite curiosity and foster
            creativity among young minds. From its modest beginnings in a bustling
            city, the magazine quickly captured the hearts of children and parents
            alike with its colorful illustrations, engaging stories, and interactive
            activities. Over the years, Diorama evolved into a trusted source of
            educational content and imaginative entertainment, embracing diverse
            cultural influences and inspiring creative expression. Today, Diorama
            continues to celebrate the wonder of childhood while championing
            innovation and inclusivity, empowering the next generation of dreamers and
            thinkers across India and beyond. With every issue, Diorama reaffirms its
            promise to spark learning and ignite imagination, leaving a lasting impact
            on young hearts for always.
          </div>
          <div className={styles.btn}>Learn More</div>
        </div>
      </div>

      {/* Cards Section */}
      <div className={styles.cards}>
        {/* First Flex Container: Content Up, Image Down */}
        <motion.div ref={flexRef1} className={styles.flex}>
          <motion.div style={{ y: contentY1 }}>
            <div className={styles.card}>
              <div className={styles.heading}>Our Collections</div>
              <div>
              Our Collections at Diorama are a treasure trove of creativity, learning, and wonder designed specifically for young minds. Each collection is meticulously curated to inspire curiosity and encourage imaginative exploration. From vibrant story compilations and interactive art galleries to engaging science experiments and playful puzzles, our collections span a wide array of topics and themes that celebrate childhood in all its diversity. Whether you’re looking for heartwarming tales, educational activities, or creative challenges, our collections offer a unique blend of fun and learning. Every issue is infused with colorful illustrations, thoughtful narratives, and hands-on projects that empower children to discover their passions and expand their horizons. At Diorama, our collections aren’t just about reading—they’re about experiencing the magic of storytelling and the joy of learning, making every page a journey of discovery for children and families alike.
              </div>
              <div className={styles.btn}>Learn More</div>
            </div>
          </motion.div>
          <motion.div style={{ y: imageY1 }}>
            <Image
              className={styles.img3}
              src={"/Home/img1.jpg"}
              width={400}
              height={400}
              alt="testimonial"
            />
          </motion.div>
        </motion.div>

        {/* Second Flex Container: Content Up, Image Down */}
        <motion.div ref={flexRef2} className={styles.aflex}>
          <motion.div style={{ y: contentY2 }}>
            <div className={styles.card}>
              <div className={styles.heading}>Our Collections</div>
              <div>
              Our Collections at Diorama are a treasure trove of creativity, learning, and wonder designed specifically for young minds. Each collection is meticulously curated to inspire curiosity and encourage imaginative exploration. From vibrant story compilations and interactive art galleries to engaging science experiments and playful puzzles, our collections span a wide array of topics and themes that celebrate childhood in all its diversity. Whether you’re looking for heartwarming tales, educational activities, or creative challenges, our collections offer a unique blend of fun and learning. Every issue is infused with colorful illustrations, thoughtful narratives, and hands-on projects that empower children to discover their passions and expand their horizons. At Diorama, our collections aren’t just about reading—they’re about experiencing the magic of storytelling and the joy of learning, making every page a journey of discovery for children and families alike.
              </div>
              <div className={styles.btn}>Learn More</div>
            </div>
          </motion.div>
          <motion.div style={{ y: imageY2 }}>
            <Image
              className={styles.img3}
              src={"/Home/img1.jpg"}
              width={400}
              height={400}
              alt="testimonial"
            />
          </motion.div>
          <motion.div style={{ x: snailX }} className={styles.snail}>
            <Image
            className={styles.snail1}
              src={"/Home/snail.svg"}
              height={400}
              width={400}
              alt="Snail"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
