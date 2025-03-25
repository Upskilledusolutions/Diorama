import React from 'react';
import styles from '@/styles/Gallery/Gallery.module.css';
import Grid from '@/Components/Gallery/grid';
import Image from 'next/image';

export default function Index() {
  return (
    <div className={styles.bcont}>
      <div className={styles.banner}>
        <Image
          className={styles.squirrel}
          src={"/banners/20.jpg"}
          width={400}
          height={400}
          alt="image"
        />
        <Image
          className={styles.white}
          src={"/Home/hero10.png"}
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

      <Grid />
    </div>
  );
}