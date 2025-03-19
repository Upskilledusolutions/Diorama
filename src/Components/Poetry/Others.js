import React, { useState } from 'react';
import styles from '@/styles/Poetry/Poetry.module.css';
import Link from 'next/link';
import { RiArrowDownSFill } from "react-icons/ri";

export default function Others() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className={styles.poem}>
      {["Poetry", "Prose", "Creative Non-Fiction"].map((category) => (
        <div key={category} className={styles.box}>
        <div className={styles.flex50} onClick={() => toggleSection(category)}>
          <div className={styles.featopic}>
            <Link className={styles.link} 
                href={`/${category !== "Creative Non-Fiction" ? category : "CreativeNonFiction"}`}  
                onClick={(e) => e.stopPropagation()}>
                {category}
            </Link>
          </div>
          <RiArrowDownSFill/>
          </div>
          <div className={`${styles.feats} ${openSections[category] ? styles.show : styles.hide}`}>
            <div>Featured {category}</div>
            <div>Emerging {category}</div>
            <div>Recent {category}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
