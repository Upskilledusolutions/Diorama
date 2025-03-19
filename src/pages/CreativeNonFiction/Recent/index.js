import Poem from '@/Components/Prose/Prose'
import React, { useEffect, useRef } from 'react'
import styles from '@/styles/CNF/cnf.module.css'
import FadeInSection from '@/Components/Poetry/FadeInSection';
import Image from 'next/image';
import { motion, useScroll } from "framer-motion";
import Others from '@/Components/Prose/Otherscnf';

const Poemdata = [
    {
      "poemid": "1",
      "title": "Creative Non-Fiction 1",
      "poem": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur consequat, nisl nisi dictum sapien, sed scelerisque felis sapien sit amet nunc. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    },
    {
      "poemid": "2",
      "title": "Creative Non-Fiction 2",
      "poem": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur consequat, nisl nisi dictum sapien, sed scelerisque felis sapien sit amet nunc. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
    },
    {
      "poemid": "3",
      "title": "Creative Non-Fiction 3",
      "poem": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur consequat, nisl nisi dictum sapien, sed scelerisque felis sapien sit amet nunc. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur consequat, nisl nisi dictum sapien, sed scelerisque felis sapien sit amet nunc. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
    }
  ];


export default function index() {
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
          src={"/banners/9.jpg"}
          width={400}
          height={400}
          alt="image"
        />
        <div className={styles.content}>
          <div className={styles.heading}>Recent Creative Non-Fiction</div>
          <div className={styles.text}>
            We help children engage through fun and educational Magazines.
          </div>
        </div>
      </div>
    <div className={styles.container}>
      <div className={styles.left}>
        <motion.video
          ref={poetVideoRef}
          className={styles.historyVideo}
          src="/animations/poet.mp4" // Update with actual video path
          autoPlay={false}
          muted
          playsInline
        />
            <FadeInSection >
            <Poem Poemdata={Poemdata[0]}/>
            </FadeInSection >
            <div ref={writingContainerRef1}>
            <motion.video
              ref={writingVideoRef1}
              className={styles.historyVideo1}
              src="/animations/dear.mp4" // Update with actual video path
              autoPlay={false}
              muted
              playsInline
            />
          </div>
            <FadeInSection >
            <Others />
            </FadeInSection >
            <FadeInSection >
            <Poem Poemdata={Poemdata[1]}/>
            </FadeInSection >
            <FadeInSection >
            <Poem Poemdata={Poemdata[2]}/>
            </FadeInSection >
        </div>
        </div>
    </div>
  )
}
