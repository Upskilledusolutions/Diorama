import Poem from '@/Components/Poetry/Poem'
import Quotes from '@/Components/Poetry/Quotes'
import React from 'react'
import styles from '@/styles/Poetry/Poetry.module.css'
import FadeInSection from '@/Components/Poetry/FadeInSection';
import Image from 'next/image';

const Poemdata = [
    {
        "poemid": "1",
        "title": "Poem 1",
        "poem": "Lorem ipsum dolor sit amet, consectetur adipiscing elit <br/> sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua. Ut enim ad minim veniam, <br/> quis nostrud exercitation ullamco laboris nisi ut aliquip <br/> ex ea commodo consequat. <br/> Duis aute irure dolor in reprehenderit <br/> in voluptate velit esse cillum dolore <br/> eu fugiat nulla pariatur."
    },
    {
        "poemid": "2",
        "title": "Poem 2",
        "poem": "Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit sed do <br/> eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua. <br/> Ut enim ad minim veniam, <br/> quis nostrud exercitation ullamco <br/> laboris nisi ut aliquip <br/> ex ea commodo consequat. <br/> Duis aute irure dolor in reprehenderit <br/> in voluptate velit esse cillum dolore <br/> eu fugiat nulla pariatur."
    },
    {
        "poemid": "3",
        "title": "Poem 3",
        "poem": "Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit <br/> sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua. Ut enim ad minim veniam, <br/> quis nostrud exercitation ullamco laboris nisi ut aliquip <br/> ex ea commodo consequat. <br/> Duis aute irure <br/> dolor in reprehenderit <br/> in voluptate velit esse <br/> cillum dolore <br/> eu fugiat nulla pariatur."
    }
];

const Quotesdata = [
    { "quoteid": "1",
    "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    { "quoteid": "2",
        "quote": "Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
]

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
      <div className={styles.heading}>Poetry</div>
      <div className={styles.text}>
        We help children engage through fun and educational Magazines.
      </div>
    </div>
  </div>
    <div className={styles.container}>
        <div className={styles.left}>
            <FadeInSection >
            <Quotes Quotesdata={Quotesdata[0]}/>
            </FadeInSection>
            <FadeInSection >
            <Poem Poemdata={Poemdata[0]}/>
            </FadeInSection >
            <FadeInSection >
            <Quotes Quotesdata={Quotesdata[1]}/>
            </FadeInSection >
            <FadeInSection >
            <Poem Poemdata={Poemdata[1]}/>
            </FadeInSection >
            <FadeInSection >
            <Poem Poemdata={Poemdata[0]}/>
            </FadeInSection >
        </div>
        <div className={styles.right}>
        <FadeInSection >
            <Poem Poemdata={Poemdata[1]}/>
            </FadeInSection >
            <FadeInSection >
            <Poem Poemdata={Poemdata[2]}/>
            </FadeInSection >
            <FadeInSection >
            <Quotes Quotesdata={Quotesdata[0]}/>
            </FadeInSection >
            <FadeInSection >
            <Poem Poemdata={Poemdata[2]}/>
            </FadeInSection >
        </div>
    </div>
    </div>
  )
}
