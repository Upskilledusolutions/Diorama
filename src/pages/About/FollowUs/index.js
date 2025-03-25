import React from 'react';
import styles from '@/styles/About/Followus.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaYoutube, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

/* Banner Component */
const Banner = () => (
  <div className={styles.banner}>
  <Image
    className={styles.squirrel}
    src={"/banners/14.jpg"}
    width={400}
    height={400}
    alt="image"
  />
  <Image
    className={styles.white}
    src={"/Home/hero10.png"}
    width={400}
    height={400}
    alt="image"
  />
  <div className={styles.content}>
    <div className={styles.heading}>Follow Us</div>
    <div className={styles.text}>
      We help children engage through fun and educational Magazines.
    </div>
  </div>
</div>
);

/* Reusable Social Media Section Component */
const SocialSection = ({ platform, imgSrc, icon: Icon, description }) => {
  return (
    <motion.div
      className={styles.socialSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.sectionHeader}>
        <Icon className={styles.sectionIcon} />
        <h2>{platform}</h2>
      </div>
      <div className={styles.sectionContent}>
        <div className={styles.imageWrapper}>
          <Image
            src={imgSrc}
            alt={`${platform} banner`}
            layout="fill"
            objectFit="cover"
            className={styles.sectionImage}
          />
        </div>
        <p className={styles.sectionDescription}>{description}</p>
      </div>
    </motion.div>
  );
};

/* Main FollowUs Page */
export default function FollowUs() {
  return (
    <div>
      <Banner />
      <div className={styles.sectionsContainer}>
        <SocialSection
          platform="YouTube"
          imgSrc="/banners/15.jpg" // Update with your actual image path
          icon={FaYoutube}
          description="Watch our latest videos and subscribe for more content."
        />
        <SocialSection
          platform="Facebook"
          imgSrc="/banners/16.jpg" // Update with your actual image path
          icon={FaFacebookF}
          description="Join our community on Facebook for updates and discussions."
        />
        <SocialSection
          platform="Instagram"
          imgSrc="/banners/17.jpg" // Update with your actual image path
          icon={FaInstagram}
          description="Follow our visual journey on Instagram."
        />
        <SocialSection
          platform="Twitter"
          imgSrc="/banners/18.jpg" // Update with your actual image path
          icon={FaTwitter}
          description="Stay updated with our latest tweets and news."
        />
      </div>
    </div>
  );
}
