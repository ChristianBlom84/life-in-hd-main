import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from './index.module.scss';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Life in HD | Home" />
    <section className={styles.hero}>
      <h1>Life in HD</h1>
      <p className={styles.preamble}>
        Human Design services in Stockholm, Sweden
      </p>
    </section>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
