import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from './index.module.scss';

const IndexPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      bigIcon: file(relativePath: { eq: "life-in-hd-icon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const { fluid } = data.bigIcon.childImageSharp;

  return (
    <Layout>
      <SEO title="Life in HD | Home" />
      <section className={styles.hero}>
        <div>
          <h1 className={styles.heroHeading}>
            <span className={styles.heroHeadingSpanLeft}>Welcome to</span>
            <span className={styles.heroHeadingSpanRight}>Life in HD</span>
          </h1>
          <p className={styles.preamble}>
            Human Design services in Stockholm, Sweden
          </p>
        </div>
        <Image fluid={fluid} />
      </section>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
};

export default IndexPage;
