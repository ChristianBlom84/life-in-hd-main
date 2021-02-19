import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { SiInstagram, SiFacebook } from 'react-icons/si';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Life in HD</p>
      <a
        className={styles.mr4}
        href="https://www.facebook.com/Life-in-HD-102470187893894"
      >
        <SiFacebook size="1.5rem" />
      </a>
      <a href="https://www.instagram.com/lifeinhd.se/">
        <SiInstagram size="1.5rem" />
      </a>
    </footer>
  );
};

export default Footer;
