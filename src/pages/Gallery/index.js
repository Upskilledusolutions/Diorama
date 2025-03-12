import React from 'react'
import styles from '@/styles/Gallery/Gallery.module.css'
import Grid from '@/Components/Gallery/grid'
import Image from 'next/image'

export default function index() {
  return (
    <div>
        <div className={styles.banner}>
        <Image
          className={styles.squirrel}
          src={"/Gallery/fox.png"}
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
      <Grid />
    </div>
  )
}
