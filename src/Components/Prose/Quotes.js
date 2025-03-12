import React from 'react'
import styles from '@/styles/Prose/Proses.module.css'
import Image from 'next/image'

export default function Quotes({Quotesdata}) {
  return (
    <div className={styles.quotes}>
        <Image className={styles.img} src={'/Poetry/quotes.svg'} width={400} height={400} alt='quotes'/>
        {Quotesdata.quote}
    </div>
  )
}
