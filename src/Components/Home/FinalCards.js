import React from 'react'
import styles from '@/styles/Home/finalcards.module.css'
import { MdQuestionAnswer } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { PiChatTeardropDotsFill } from "react-icons/pi";

export default function FinalCards() {
  return (
    <div className={styles.cards}>
        <div className={styles.card}>
            <MdQuestionAnswer className={styles.icon}/>
            <div className={styles.title}>Any Questions?</div>
            <div className={styles.text}>Make an Enquiry</div>
        </div>
        <div className={styles.card}>
            <RiTeamFill className={styles.icon}/>
            <div className={styles.title}>Join Us Now!</div>
            <div className={styles.text}>Book your spot now!</div>
        </div>
        <div className={styles.card}>
            <PiChatTeardropDotsFill className={styles.icon}/>
            <div className={styles.title}>See it yourself</div>
            <div className={styles.text}>Get more information</div>
        </div>
    </div>
  )
}
