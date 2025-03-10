import { useEffect, useRef, useState } from "react";
import styles from "@/styles/common/BelowHero.module.css";
import Image from "next/image";

export default function Hero() {
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Observe when the hero section enters the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Trigger when 30% of the container is visible
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      if (!isVisible) return;

      const containerTop = heroRef.current?.offsetTop || 0;
      const containerHeight = heroRef.current?.offsetHeight || 1;
      const scrollY = window.scrollY + window.innerHeight;

      // Calculate progress smoothly (damping effect)
      const targetProgress = Math.max(0, Math.min(1, (scrollY - containerTop) / containerHeight));
      
      setScrollProgress((prev) => prev + (targetProgress - prev) * 0.1); // Smooth transition

      if (videoRef.current) {
        const duration = videoRef.current.duration || 1;
        videoRef.current.currentTime = scrollProgress * duration;
      }

      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, scrollProgress]);

  return (
    <div ref={heroRef} className={styles.hero}>
      {/* Bird Video (Moves from Right to Left with Smoother Motion) */}
      <video
        ref={videoRef}
        className={styles.heroVideo}
        src="/Home/Bird.mp4"
        playsInline
        muted
        preload="auto"
        disablePictureInPicture
        style={{ 
          transform: `translateX(${80 - scrollProgress * 60}vw)`, // Reduced movement range for slower effect
          transition: "transform 0.2s ease-out" // Smooth transition effect
        }}
      />

      {/* Text Content */}
      <div className={styles.heroContent}>
        <div className={styles.written}>
          <h1>Discover the Journey</h1>
          <p>The bird symbolizes freedom, guiding you through the wonders of nature. Join us as we explore the beauty of the wild.</p>
        </div>
        <Image       
          src={"/Home/cloud.png"}  
          className={styles.cloud}
          width={1000}
          height={1000}
          alt="hero"
        />
      </div>
    </div>
  );
}
