import React, { useEffect, useRef } from 'react';
import styles from '@/styles/Gallery/Gallery.module.css';
import Grid from '@/Components/Gallery/grid';
import Image from 'next/image';

// AutoPlayVideo component
const AutoPlayVideo = ({ src, className, ...props }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Restart and play when in view
            videoRef.current.currentTime = 0;
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      muted
      playsInline
      {...props}
    />
  );
};

export default function Index() {
  return (
    <div className={styles.bcont}>
      <div className={styles.banner}>
        <Image
          className={styles.squirrel}
          src={"/banners/7.jpg"}
          width={400}
          height={400}
          alt="image"
        />
        <div className={styles.content}>
          <div className={styles.heading}>Gallery</div>
          <div className={styles.text}>
            We help children engage through fun and educational Magazines.
          </div>
        </div>
      </div>

      {/* Auto-playing videos */}
      <div className={styles.videoContainer}>
        <AutoPlayVideo
          src="/animations/gallery.mp4" // Replace with your actual video path
          className={styles.autoVideo}
        />
      </div>
      <div className={styles.videoContainer}>
        <AutoPlayVideo
          src="/animations/camera.mp4" // Replace with your actual video path
          className={styles.autoVideo1}
        />
      </div>

      <Grid />
    </div>
  );
}
