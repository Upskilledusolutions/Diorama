"use client";
import React from "react";
import styles from "@/styles/About/Editor.module.css";
import Image from "next/image";

export default function EditorProfileTwo() {
  return (
    <div className={styles.container}>
      <div className={`${styles.profileFlex} ${styles.rowReverse}`}>
        {/* Editor Text Content */}
        <div className={styles.textWrapper}>
          <h2 className={styles.editorName}>Alexandra</h2>
          <h3 className={styles.editorTitle}>Associate Editor</h3>
          <p className={styles.editorBio}>
            I’m Alexandra, dedicated to bringing creative and insightful content
            to life. With a background in child psychology and education, I
            ensure every issue resonates with our young readers.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>10</span> Projects
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>4</span> Awards
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>8</span> Collaborations
            </div>
          </div>
          <p className={styles.editorBio}>
            Joining the team in 2018, I strive to inspire and innovate. My role
            allows me to bridge creativity with education, ensuring that our
            magazine remains both engaging and enriching for every child.
          </p>
        </div>
        {/* Editor Picture */}
        <div className={styles.imageWrapper}>
          <Image
            src={'/About/editor2.jpg'}
            alt="Alexandra, Associate Editor"
            width={500}
            height={500}
            className={styles.editorImage}
          />
        </div>
      </div>
    </div>
  );
}
