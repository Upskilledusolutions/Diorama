"use client";
import React from "react";
import styles from "@/styles/About/Editor.module.css";
import Image from "next/image";

export default function EditorProfileOne() {
  return (
    <div className={styles.container}>
      <div className={styles.profileFlex}>
        {/* Editor Picture */}
        <div className={styles.imageWrapper}>
          <Image
            src={'/About/editor1.jpg'}
            alt="Maria, Director"
            width={500}
            height={500}
            className={styles.editorImage}
          />
        </div>
        {/* Editor Text Content */}
        <div className={styles.textWrapper}>
          <h2 className={styles.editorName}>Maria</h2>
          <h3 className={styles.editorTitle}>Director</h3>
          <p className={styles.editorBio}>
            My name is Maria and I started working at Skole in July 2011. I
            studied my Bachelor’s Degree in Early Childhood and Primary Education
            through the Australian Catholic University.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>14</span> Educators
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>5</span> Star Rating
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>11</span> Classrooms
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>80+</span> Kids
            </div>
          </div>
          <p className={styles.editorBio}>
            Since starting at Skole Childcare in 2011, I spent most of my time in
            the 0-2 age group as the Room Leader – which was very rewarding.
            However, at the start of 2016 I was keen for a change and to work with
            a new age group, so I moved to the preschool room. In early 2017, I
            embraced new challenges as I transitioned into a 2IC role and then, from
            May 2017, into the Centre Director position. I absolutely love my role,
            and I continually learn new skills in managing a service, mentoring a
            team of educators, and overseeing office administration.
          </p>
        </div>
      </div>
    </div>
  );
}
