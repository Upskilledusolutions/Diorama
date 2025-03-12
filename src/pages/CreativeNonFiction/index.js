import Poem from '@/Components/cnf/Cnf'
import React from 'react'
import styles from '@/styles/CNF/cnf.module.css'
import FadeInSection from '@/Components/Poetry/FadeInSection';
import Image from 'next/image';

const Poemdata = [
    {
      "poemid": "1",
      "title": "Creative Non-Fiction 1",
      "poem": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur consequat, nisl nisi dictum sapien, sed scelerisque felis sapien sit amet nunc. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    },
    {
      "poemid": "2",
      "title": "Creative Non-Fiction 2",
      "poem": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur consequat, nisl nisi dictum sapien, sed scelerisque felis sapien sit amet nunc. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
    },
    {
      "poemid": "3",
      "title": "Creative Non-Fiction 3",
      "poem": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur consequat, nisl nisi dictum sapien, sed scelerisque felis sapien sit amet nunc. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur consequat, nisl nisi dictum sapien, sed scelerisque felis sapien sit amet nunc. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
    }
  ];


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
      <div className={styles.heading}>Creative Non-Fiction</div>
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
            <FadeInSection >
            <Poem Poemdata={Poemdata[1]}/>
            </FadeInSection >
            <FadeInSection >
            <Poem Poemdata={Poemdata[2]}/>
            </FadeInSection >
        </div>
    </div>
    </div>
  )
}
