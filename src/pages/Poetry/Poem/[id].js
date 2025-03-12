"use client";
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '@/styles/Poetry/Poem.module.css';
import { FaTwitter, FaFacebook } from "react-icons/fa6";
import { FaComment, FaHeart } from 'react-icons/fa';

const Poemdata = [
  {
    poemid: "1",
    title: "Poem 1",
    poem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit <br/> sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua. Ut enim ad minim veniam, <br/> quis nostrud exercitation ullamco laboris nisi ut aliquip <br/> ex ea commodo consequat. <br/> Duis aute irure dolor in reprehenderit <br/> in voluptate velit esse cillum dolore <br/> eu fugiat nulla pariatur."
  },
  {
    poemid: "2",
    title: "Poem 2",
    poem: "Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit sed do <br/> eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua. <br/> Ut enim ad minim veniam, <br/> quis nostrud exercitation ullamco <br/> laboris nisi ut aliquip <br/> ex ea commodo consequat. <br/> Duis aute irure dolor in reprehenderit <br/> in voluptate velit esse cillum dolore <br/> eu fugiat nulla pariatur."
  },
  {
    poemid: "3",
    title: "Poem 3",
    poem: "Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit <br/> sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua. Ut enim ad minim veniam, <br/> quis nostrud exercitation ullamco laboris nisi ut aliquip <br/> ex ea commodo consequat. <br/> Duis aute irure <br/> dolor in reprehenderit <br/> in voluptate velit esse <br/> cillum dolore <br/> eu fugiat nulla pariatur."
  }
];

export default function PoemDetail() {
  const router = useRouter();

  // Wait until the router query is ready to prevent mismatches.
  if (!router.isReady) return null;
  
  const { id } = router.query;
  if (!id) return <div>Loading...</div>;

  const poem = Poemdata.find(item => item.poemid === id);
  if (!poem) return <div>Poem not found</div>;

  return (
    <div className={styles.poemDetail}>
      <Link href="/Poetry" className={styles.text1}>Go back</Link>
      <div className={styles.middle}>
        <h1 className={styles.title}>{poem.title}</h1>
        <div className={styles.text}>
          {poem.poem.split("<br/>").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className={styles.icons}>
        <FaTwitter className={styles.icon} />
        <FaFacebook className={styles.icon} />
        <FaHeart className={styles.icon} />
        <FaComment className={styles.icon} />
      </div>
    </div>
  );
}
