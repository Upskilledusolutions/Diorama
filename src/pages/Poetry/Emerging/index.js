import Poem from '@/Components/Poetry/Poem'
import Quotes from '@/Components/Poetry/Quotes'
import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/Poetry/Poetry.module.css'
import FadeInSection from '@/Components/Poetry/FadeInSection';
import { motion, useInView, useScroll } from "framer-motion";
import Image from 'next/image';
import NewSlider from '@/Components/Poetry/NewSlider'
import NewSliderCnf from '@/Components/Poetry/NewSliderCnf'
import Others from '@/Components/Poetry/Others';

const Poemdata = [
  {
    poemid: "1",
    title: "Poem 1",
    "src":"/Home/13.png",
    poem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit <br/> sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua."
  },
  {
    poemid: "2",
    title: "Poem 2",
    "src":"/Home/14.png",
    poem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit <br/> sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua."
  },
  {
    poemid: "3",
    title: "Poem 3",
    "src":"/Home/15.png",
    poem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit <br/> sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua."
  },
  {
    poemid: "4",
    title: "Poem 4",
    "src":"/Home/16.png",
    poem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit <br/> sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua."
  },
  {
    poemid: "5",
    title: "Poem 5",
    "src":"/Home/13.png",
    poem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit <br/> sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua."
  },
  {
    poemid: "6",
    title: "Poem 6",
    "src":"/Home/14.png",
    poem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit <br/> sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua."
  },
  {
    poemid: "7",
    title: "Poem 7",
    "src":"/Home/15.png",
    poem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit <br/> sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua."
  },
  {
    poemid: "8",
    title: "Poem 8",
    "src":"/Home/16.png",
    poem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit <br/> sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua."
  },
  {
    poemid: "9",
    title: "Poem 9",
    "src":"/Home/13.png",
    poem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit <br/> sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua."
  },
  {
    poemid: "10",
    title: "Poem 10",
    "src":"/Home/14.png",
    poem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit <br/> sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua."
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
  const itemsPerPage = 5;
  const totalPages = Math.ceil(Poemdata.length / itemsPerPage);
  const [page, setPage] = useState(0);

  // Slice out the current page's items
  const currentItems = Poemdata.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  const handlePrev = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const handlePageClick = (pageIndex) => {
    setPage(pageIndex);
  };

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
    <div>
      <div className={styles.banner}>
        <Image
          className={styles.squirrel}
          src={"/Home/32.svg"}
          width={400}
          height={400}
          alt="image"
        />
        <Image
          className={styles.white}
          src={"/Home/hero05.png"}
          width={400}
          height={400}
          alt="image"
        />
        <div className={styles.content}>
          <div className={styles.heading}>Emerging Poetry</div>
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
<div className={styles.blue2}>
<div className={styles.position}>
    <SlideInDiv src={'/Home/22.png'} />
  </div>
<div className={styles.pages}>
        {currentItems.map((item, index) => (
          <div key={item.poemid} className={styles.box1}>
            {/* First card of the page is rendered big */}
            <Poem Poemdata={item} big={index === 0} />
          </div>
        ))}
      </div>
      <div className={styles.paginationControls}>
        <button className={styles.prevButton} onClick={handlePrev}>Prev</button>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`${styles.pageButton} ${page === i ? styles.activePageButton : ''}`}
            onClick={() => handlePageClick(i)}
          >
            {i + 1}
          </button>
        ))}
        <button className={styles.nextButton} onClick={handleNext}>Next</button>
      </div>
    </div>

  <div className={styles.marginbtm}>
  <Image
  src="/Home/cat.gif"  // Update with your actual GIF path
  className={styles.frog5}
  width={100}
  height={100}
  alt="animated GIF"
  unoptimized // Ensures Next.js doesn't optimize the GIF as a static image
/>
<div className={styles.featslider}>
    <NewSlider titlehead={'Prose'} title={'Featured Poetry'} slider={3}/>
    </div>
    <div className={styles.recslider}>
    <NewSlider titlehead={'Prose'} title={'Recent Poetry'} slider={3}/>
    </div>
  </div>
</div>

    </div>
  );
}
