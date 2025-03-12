"use client";
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '@/styles/Prose/Prose.module.css';
import { FaTwitter, FaFacebook } from "react-icons/fa6";
import { FaComment, FaHeart } from 'react-icons/fa';

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

export default function PoemDetail() {
  const router = useRouter();

  // Wait until the router query is ready to prevent mismatches.
  if (!router.isReady) return null;
  
  const { id } = router.query;
  if (!id) return <div>Loading...</div>;

  const poem = Poemdata.find(item => item.poemid === id);
  if (!poem) return <div>Poem not found</div>;

  return (
    <div className={styles.poemDetail}>
      <Link href="/CreativeNonFiction" className={styles.text1}>Go back</Link>
      <div className={styles.middle}>
        <h1 className={styles.title}>{poem.title}</h1>
        <div className={styles.text}>
          {poem.poem.split("<br/>").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className={styles.icons}>
        <FaTwitter className={styles.icon} />
        <FaFacebook className={styles.icon} />
        <FaHeart className={styles.icon} />
        <FaComment className={styles.icon} />
      </div>
    </div>
  );
}
