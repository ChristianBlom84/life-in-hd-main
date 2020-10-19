import React from 'react';
import SEO from '../components/Seo';

import styles from './services.module.scss';

const ServicesPage: React.FC = () => (
  <>
    <SEO title="Human Design Services | Life in HD" />
    <section className={styles.section}>
      <div className={styles.hero}>
        <h1>
          <span>Human</span>
          <span>Design</span>
          <span>Services</span>
        </h1>
        <p>
          Here you will find information about Human Design readings, courses
          and sessions we offer.
        </p>
      </div>
    </section>
  </>
);

export default ServicesPage;
