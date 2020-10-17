import React, { useState } from 'react';
import SEO from '../components/Seo';
import styles from './about.module.scss';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO title="About us | Life in HD" />
      <section className={styles.section}>
        <div className={styles.hero}>
          <h1 className={styles.h1}>About us</h1>
          <p>Here we will have information about us.</p>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
