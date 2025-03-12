"use client";
import React from "react";
import Image from "next/image";
import styles from "@/styles/Gallery/Gallery.module.css";

const galleryData = [
  { id: 1, src: "/Home/img1.jpg", caption: "Sunset Over the Hills" },
  { id: 2, src: "/Home/img2.jpg", caption: "City Lights" },
  { id: 3, src: "/Home/img3.jpg", caption: "Forest Trail" },
  { id: 4, src: "/Home/img4.jpg", caption: "Mountain Peaks" },
  { id: 5, src: "/Home/img1.jpg", caption: "Ocean Breeze" },
  { id: 6, src: "/Home/img2.jpg", caption: "Desert Mirage" },
];

export default function Gallery() {
  return (
    <div className={styles.container}>
      {galleryData.map((item) => (
        <div key={item.id} className={styles.item}>
          <Image
            src={item.src}
            alt={item.caption}
            layout="responsive"
            width={500}
            height={400}
            className={styles.image}
          />
          <div className={styles.overlay}>
            <div className={styles.caption}>{item.caption}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
