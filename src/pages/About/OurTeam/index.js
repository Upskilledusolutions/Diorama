import React from 'react'
import styles from '@/styles/About/team.module.css'
import Image from 'next/image'
import EditorProfileOne from '@/Components/About/Editor';
import EditorProfileTwo from '@/Components/About/Editor2';

export default function Index() {
  return (
    <div>
      <div className={styles.banner}>
        <Image
          className={styles.squirrel}
          src={"/banners/12.jpg"}
          width={400}
          height={400}
          alt="image"
        />
        <div className={styles.content}>
          <div className={styles.heading}>Our Team</div>
          <div className={styles.text}>
            We help children engage through fun and educational Magazines.
          </div>
        </div>
      </div>
      <div>
        <EditorProfileOne />
        <EditorProfileTwo />
      </div>
    </div>
  )
}
