import React from "react";
import styles from "@/styles/common/Footer.module.css";
import Image from "next/image";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Image className={styles.bg} src={"/Home/hill2.png"} width={1000} height={500} alt="image" />
      <Image className={styles.tree2} src={"/Home/tree2.svg"} width={1000} height={500} alt="image" />
      <Image className={styles.tree3} src={"/Home/tree3.svg"} width={1000} height={500} alt="image" />
      <Image className={styles.wolf} src={"/Home/wolf.png"} width={1000} height={500} alt="image" />

      <div className={styles.content}>
        {/* Left Section */}
        <div className={styles.left}>
          <div className={styles.links}>
            <div>
              <div>Admissions</div>
              <div>Program</div>
              <div>School Calendar</div>
            </div>
            <div>
              <div>Blog</div>
              <div>About</div>
              <div>Location</div>
            </div>
          </div>
          <div className={styles.copy}>© 2025 Something...</div>
        </div>

        {/* Center Diorama */}
        <div className={styles.center}>Diorama</div>

        {/* Right Section */}
        <div className={styles.right}>
          <div className={styles.info}>
            <div>
              <div>London</div>
              <div>United Kingdom</div>
              <div>Google Map</div>
              <div>Phone: (+1) 541-754-3010</div>
              <div>hi@kindergarten.com</div>
            </div>
            <div>
            <button className={styles.button}>Join us Now!</button>
            <div className={styles.socials}>
              <FaFacebook />
              <FaYoutube />
              <RiInstagramFill />
            </div>
            </div>
          </div>
          <div className={styles.links}>
            <div>Admissions</div>
            <div>Program</div>
            <div>School Calendar</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
