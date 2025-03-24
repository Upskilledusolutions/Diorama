import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/Home/Hero.module.css";

export default function Hero() {
  const [scaleHero2, setScaleHero2] = useState(1);
  const [scaleHero3, setScaleHero3] = useState(1);
  const [scaleBtn, setScaleBtn] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Scale Hero2 from the beginning
      setScaleHero2(Math.max(0.5, 1 - scrollY / 1000));

      // Start scaling Hero3 and button after scrolling 50% of viewport height
      if (scrollY > viewportHeight * 0.5) {
        const newScale = Math.max(0.5, 1 - (scrollY - viewportHeight * 0.5) / 1000);
        setScaleHero3(newScale);
        setScaleBtn(newScale);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.hero}>
      <Image
        className={styles.hero1}
        src={"/Home/hero01.jpg"}
        width={1000}
        height={1000}
        alt="hero"
      />
      <Image
        className={styles.hero02}
        src={"/Home/hero10.png"}
        width={1000}
        height={1000}
        alt="hero"
      />
      <div className={styles.text}>
        <div>Some heading goes here</div>
        <div>Some text goes here</div>
      </div>
      <Image
        className={styles.hero2}
        src={"/Home/birdimg.png"}
        width={300}
        height={300}
        alt="hero"
        style={{ transform: `scale(${scaleHero2})` }} // Scale from start
      />
      <Image
        className={styles.hero3}
        src={"/Home/Hero3.png"}
        width={500}
        height={500}
        alt="hero"
        style={{ transform: `scale(${scaleHero3})` }} // Scale after 50% scroll
      />
      <button className={styles.btn} style={{ transform: `scale(${scaleBtn})` }}>
        Learn More
      </button>
    </div>
  );
}
