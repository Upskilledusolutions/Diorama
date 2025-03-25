import React from 'react';
import styles from '@/styles/Poetry/Poetry.module.css';
import Link from 'next/link';
import { FaComment, FaHeart, FaRegComment, FaRegHeart, FaUser } from "react-icons/fa";
import Image from 'next/image';

export default function Poem({Poemdata, big}) {
  return (
    <div className={styles.poem}>
      <div className={styles.usercontent}>
        <Image src={Poemdata.src} className={styles.profile} height={300} width={300} alt='img'/>
        <div className={styles.username}>Some Name</div>
      </div>
      <div className={styles.grow}>
        <div className={styles.title}>{Poemdata.title}</div>
        <div className={styles.text}>
            {Poemdata.poem.slice(0,big ? 300 : 100).split("<br/>").map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ))}
        </div>
        <div className={styles.flex5}>
        <Link href={`/Poetry/Poem/${Poemdata.poemid}`} className={styles.text1}>
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
    </div>
  );
}
