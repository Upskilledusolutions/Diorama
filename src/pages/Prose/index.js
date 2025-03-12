import Poem from '@/Components/Prose/Prose'
import Quotes from '@/Components/Prose/Quotes'
import React from 'react'
import styles from '@/styles/Prose/Proses.module.css'
import FadeInSection from '@/Components/Poetry/FadeInSection';
import Image from 'next/image';

const Poemdata = [
    {
      "poemid": "1",
      "title": "Prose Piece 1",
      "poem": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur consequat, nisl nisi dictum sapien, sed scelerisque felis sapien sit amet nunc. <br/> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
    },
    {
      "poemid": "2",
      "title": "Prose Piece 2",
      "poem": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. <br/> Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
    },
    {
      "poemid": "3",
      "title": "Prose Piece 3",
      "poem": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, <br/> sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
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
      <div className={styles.heading}>Prose</div>
      <div className={styles.text}>
        We help children engage through fun and educational Magazines.
      </div>
    </div>
  </div>
    <div className={styles.container}>
        <div className={styles.left}>
            <FadeInSection >
            <Poem Poemdata={Poemdata[0]}/>
            </FadeInSection >
            {/* <FadeInSection >
            <Quotes Quotesdata={Quotesdata[0]}/>
            </FadeInSection>
            <FadeInSection >
            <Quotes Quotesdata={Quotesdata[1]}/>
            </FadeInSection > */}
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
            {/* <FadeInSection >
            <Quotes Quotesdata={Quotesdata[0]}/>
            </FadeInSection > */}
            <FadeInSection >
            <Poem Poemdata={Poemdata[2]}/>
            </FadeInSection >
        </div>
    </div>
    </div>
  )
}
