import React from 'react';
import { Link } from 'gatsby';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} Life in HD
    </footer>
  );
};

export default Footer;
