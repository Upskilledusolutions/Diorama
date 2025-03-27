import React, { useRef } from 'react';
import styles from '@/styles/Gallery/Gallery.module.css';
import Grid from '@/Components/Gallery/grid';
import { motion, useInView } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

export default function Index() {
    const SlideInDiv = ({ src }) => {
      const ref = useRef(null);
      const isInView = useInView(ref, { once: false });
  
      return (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 200 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image src={src} className={styles.slidein} height={200} width={200} alt='img' />
        </motion.div>
      );
    };
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
<div className={styles.blue}>
<div className={styles.position}>
    <SlideInDiv src={'/Home/20.png'} />
  </div>
    <div className={styles.flex2}>
    <motion.video
    src="/Home/toad.mp4"  // Update with your actual video path
    autoPlay
    loop
    muted
    playsInline
    className={styles.frog}
  />
      <div>
      <Image
          className={styles.img1}
          src={"/Home/img3.jpg"}
          width={400}
          height={400}
          alt="image"
        />
      </div>
      <div>
        <div className={styles.heading}>Event gallery 1</div>
        <div className={styles.text}>Event gallery 1 content goes here - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        <div className={styles.date}><b>Date: </b>20/ 02/ 2025 - 22/ 02/ 2025</div>
        <Link href={'/Gallery/1.js'} className={styles.btn}>Go to Gallery</Link>
      </div>
    </div>

    <div className={styles.flex3}>

      <div className={styles.card}>
      <Image
          className={styles.img2}
          src={"/Home/img3.jpg"}
          width={400}
          height={400}
          alt="image"
        />
      <div>
        <div className={styles.heading1}>Event gallery 2</div>
        <div className={styles.text1}>Event gallery 2 content goes here.</div>
        <div className={styles.date1}><b>Date: </b>20/ 02/ 2025 - 22/ 02/ 2025</div>
        <Link href={'/Gallery/1.js'} className={styles.btn1}>Go to Gallery</Link>
      </div>
      </div>

      <div className={styles.card}>
      <Image
          className={styles.img2}
          src={"/Home/img3.jpg"}
          width={400}
          height={400}
          alt="image"
        />
      <div>
        <div className={styles.heading1}>Event gallery 2</div>
        <div className={styles.text1}>Event gallery 2 content goes here.</div>
        <div className={styles.date1}><b>Date: </b>20/ 02/ 2025 - 22/ 02/ 2025</div>
        <Link href={'/Gallery/1.js'} className={styles.btn1}>Go to Gallery</Link>
      </div>
      </div>

    </div>

    <div className={styles.flex3}>

<div className={styles.card}>
<Image
    className={styles.img2}
    src={"/Home/img3.jpg"}
    width={400}
    height={400}
    alt="image"
  />
<div>
  <div className={styles.heading1}>Event gallery 2</div>
  <div className={styles.text1}>Event gallery 2 content goes here.</div>
  <div className={styles.date1}><b>Date: </b>20/ 02/ 2025 - 22/ 02/ 2025</div>
  <Link href={'/Gallery/1.js'} className={styles.btn1}>Go to Gallery</Link>
</div>
</div>

<div className={styles.card}>
<Image
    className={styles.img2}
    src={"/Home/img3.jpg"}
    width={400}
    height={400}
    alt="image"
  />
<div>
  <div className={styles.heading1}>Event gallery 2</div>
  <div className={styles.text1}>Event gallery 2 content goes here.</div>
  <div className={styles.date1}><b>Date: </b>20/ 02/ 2025 - 22/ 02/ 2025</div>
  <Link href={'/Gallery/1.js'} className={styles.btn1}>Go to Gallery</Link>
</div>
</div>

</div>
</div>
    
    </div>
  );
}
