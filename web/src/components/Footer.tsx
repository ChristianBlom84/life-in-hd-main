import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { SiInstagram } from 'react-icons/si';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Life in HD</p>
      <SiInstagram size="1.5rem" />
    </footer>
  );
};

export default Footer;
