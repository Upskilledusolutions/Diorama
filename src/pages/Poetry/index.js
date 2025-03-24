import Poem from '@/Components/Poetry/Poem'
import Quotes from '@/Components/Poetry/Quotes'
import React, { useEffect, useRef } from 'react'
import styles from '@/styles/Poetry/Poetry.module.css'
import FadeInSection from '@/Components/Poetry/FadeInSection';
import { motion, useScroll } from "framer-motion";
import Image from 'next/image';
import NewSlider from '@/Components/Poetry/NewSlider'
import NewSliderCnf from '@/Components/Poetry/NewSliderCnf'
import Others from '@/Components/Poetry/Others';

const Poemdata = [
  {
    "poemid": "1",
    "title": "Poem 1",
    "poem": "Lorem ipsum dolor sit amet, consectetur adipiscing elit <br/> sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua. Ut enim ad minim veniam, <br/> quis nostrud exercitation ullamco laboris nisi ut aliquip <br/> ex ea commodo consequat. <br/> Duis aute irure dolor in reprehenderit <br/> in voluptate velit esse cillum dolore <br/> eu fugiat nulla pariatur."
  },
  {
    "poemid": "2",
    "title": "Poem 2",
    "poem": "Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit sed do <br/> eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua. <br/> Ut enim ad minim veniam, <br/> quis nostrud exercitation ullamco <br/> laboris nisi ut aliquip <br/> ex ea commodo consequat. <br/> Duis aute irure dolor in reprehenderit <br/> in voluptate velit esse cillum dolore <br/> eu fugiat nulla pariatur."
  },
  {
    "poemid": "3",
    "title": "Poem 3",
    "poem": "Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit <br/> sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua. Ut enim ad minim veniam, <br/> quis nostrud exercitation ullamco laboris nisi ut aliquip <br/> ex ea commodo consequat. <br/> Duis aute irure <br/> dolor in reprehenderit <br/> in voluptate velit esse <br/> cillum dolore <br/> eu fugiat nulla pariatur."
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
          src={"/banners/10.jpg"}
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
          <div className={styles.heading}>Poetry</div>
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
  <div className={styles.heading1}>Featured Poetry</div>
  <div>
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

  <div className={styles.heading1}>Emerging Poetry</div>
  <div>
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

  <div className={styles.heading1}>Recent Poetry</div>
  <div>
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
    <NewSlider titlehead={'Prose'} title={'Prose'} slider={3}/>
    <NewSliderCnf titlehead={'Cnf'} title={'Creative Non-Fiction'} slider={2}/>
  </div>
</div>

    </div>
  );
}
