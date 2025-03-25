import Poem from '@/Components/Poetry/Poem'
import React, { useEffect, useRef } from 'react'
import styles from '@/styles/Poetry/Poetry.module.css'
import FadeInSection from '@/Components/Poetry/FadeInSection';
import { motion, useScroll } from "framer-motion";
import Image from 'next/image';
import NewSlider from '@/Components/Poetry/NewSliderPoetry'
import NewSliderCnf from '@/Components/Poetry/NewSliderCnf'

const Poemdata = [
  {
    "poemid": "1",
    "title": "Prose Piece 1",
    "poem": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur consequat, nisl nisi dictum sapien, sed scelerisque felis sapien sit amet nunc. <br/> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
  },
  {
    "poemid": "2",
    "title": "Prose Piece 2",
    "poem": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. <br/> Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
  },
  {
    "poemid": "3",
    "title": "Prose Piece 3",
    "poem": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, <br/> sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
  }
];

const Quotesdata = [
  {
    "quoteid": "1",
    "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "quoteid": "2",
    "quote": "Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];

export default function Index() {
  // Global scroll for the poet video
  const { scrollYProgress } = useScroll();
  const poetVideoRef = useRef(null);

  // Writing video in the left column
  const writingContainerRef1 = useRef(null);
  const { scrollYProgress: writingScrollProgress1 } = useScroll({
    target: writingContainerRef1,
    offset: ["start end", "end start"],
  });
  const writingVideoRef1 = useRef(null);

  // Writing video in the right column
  const writingContainerRef2 = useRef(null);
  const { scrollYProgress: writingScrollProgress2 } = useScroll({
    target: writingContainerRef2,
    offset: ["start end", "end start"],
  });
  const writingVideoRef2 = useRef(null);

  // Update poet video based on global scroll
  useEffect(() => {
    const unsubscribeGlobal = scrollYProgress.on("change", (latest) => {
      if (poetVideoRef.current && poetVideoRef.current.readyState >= 2) {
        poetVideoRef.current.currentTime = latest * poetVideoRef.current.duration * 1.5;
      }
    });
    return () => unsubscribeGlobal();
  }, [scrollYProgress]);

  // Update left column writing video based on its container scroll
  useEffect(() => {
    const unsubscribeWriting1 = writingScrollProgress1.on("change", (latest) => {
      if (writingVideoRef1.current && writingVideoRef1.current.readyState >= 2) {
        writingVideoRef1.current.currentTime = latest * writingVideoRef1.current.duration * 1.0;
      }
    });
    return () => unsubscribeWriting1();
  }, [writingScrollProgress1]);

  // Update right column writing video based on its container scroll
  useEffect(() => {
    const unsubscribeWriting2 = writingScrollProgress2.on("change", (latest) => {
      if (writingVideoRef2.current && writingVideoRef2.current.readyState >= 2) {
        writingVideoRef2.current.currentTime = latest * writingVideoRef2.current.duration * 1.0;
      }
    });
    return () => unsubscribeWriting2();
  }, [writingScrollProgress2]);

  return (
    <div>
      <div className={styles.banner}>
        <Image
          className={styles.squirrel}
          src={"/banners/10 (1).jpg"}
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
          <div className={styles.heading}>Prose</div>
          <div className={styles.text}>
            We help children engage through fun and educational Magazines.
          </div>
        </div>
      </div>

<div className={styles.animatedVideoContainer}>
  <motion.video
    src="/Home/toad.mp4"  // Update with your actual video path
    autoPlay
    loop
    muted
    playsInline
    className={styles.frog}
  />
  <div className={styles.containercon}>
    <div className={styles.quotetext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    <div className={styles.quoteauthor}>- Lorem ipsum</div>
  </div>
</div>

<div>
  <div className={styles.blue}>
  <div className={styles.heading1}>Featured Prose</div>
  <FadeInSection>
    <Poem Poemdata={Poemdata[0]} big={true}/>
  </FadeInSection>
  <FadeInSection>
    <Poem Poemdata={Poemdata[1]} big={false}/>
  </FadeInSection>
  <FadeInSection>
    <Poem Poemdata={Poemdata[2]} big={false}/>
  </FadeInSection>
  </div>

  <div className={styles.blue2}>
  <Image
  src="/animations/rabbit.gif"  // Update with your actual GIF path
  className={styles.frog2}
  width={100}
  height={100}
  alt="animated GIF"
  unoptimized // Ensures Next.js doesn't optimize the GIF as a static image
/>
  <div className={styles.heading1}>Emerging Prose</div>
  <FadeInSection>
    <Poem Poemdata={Poemdata[0]} big={true}/>
  </FadeInSection>
  <FadeInSection>
    <Poem Poemdata={Poemdata[1]} big={false}/>
  </FadeInSection>
  <FadeInSection>
    <Poem Poemdata={Poemdata[2]} big={false}/>
  </FadeInSection>
  </div>

  <div className={styles.blue3}>
  <Image
  src="/animations/rabbit2.gif"  // Update with your actual GIF path
  className={styles.frog3}
  width={100}
  height={100}
  alt="animated GIF"
  unoptimized // Ensures Next.js doesn't optimize the GIF as a static image
/>
  <div className={styles.heading1}>Recent Prose</div>
  <FadeInSection>
    <Poem Poemdata={Poemdata[0]} big={true}/>
  </FadeInSection>
  <FadeInSection>
    <Poem Poemdata={Poemdata[1]} big={false}/>
  </FadeInSection>
  <FadeInSection>
    <Poem Poemdata={Poemdata[2]} big={false}/>
  </FadeInSection>
  </div>

  <div className={styles.marginbtm}>
    <NewSlider title={'Poetry'}/>
    <NewSliderCnf title={'Creative Non-Fiction'}/>
  </div>
</div>

    </div>
  );
}
