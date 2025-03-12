import React from 'react';
import styles from '@/styles/Poetry/Poetry.module.css';
import Link from 'next/link';

export default function Poem({Poemdata}) {
  return (
    <div className={styles.poem}>
        <div className={styles.title}>{Poemdata.title}</div>
        <div className={styles.text}>
            {Poemdata.poem.slice(0,250).split("<br/>").map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ))}
        </div>
        <Link href={`/Poetry/Poem/${Poemdata.poemid}`} className={styles.text1}>Read more</Link>
    </div>
  );
}
