import React from 'react';
import styles from '@/styles/Prose/Proses.module.css';
import Link from 'next/link';
import { FaComment, FaHeart, FaRegComment, FaRegHeart } from 'react-icons/fa';

export default function Poem({Poemdata}) {
  return (
    <div className={styles.poem}>
        <div className={styles.title}>{Poemdata.title}</div>
        <div className={styles.text}>
            {Poemdata.poem.slice(0,350).split("<br/>").map((line, index) => (
                <React.Fragment key={index}>
                    {line}...
                </React.Fragment>
            ))}
        </div>
        <div className={styles.flex5}>
        <Link href={`/CreativeNonFiction/${Poemdata.poemid}`} className={styles.text1}>
          Read more
        </Link>
        <div className={styles.flex6}>
          <div className={styles.iconWrapper}>
            <FaRegHeart className={styles.outlineIcon} />
            <FaHeart className={styles.solidIcon} />
          </div>
          <div className={styles.iconWrapper}>
            <FaRegComment className={styles.outlineIcon} />
            <FaComment className={styles.solidIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}
