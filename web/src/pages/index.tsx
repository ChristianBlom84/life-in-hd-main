import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import styles from './index.module.scss';

const IndexPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      bigIcon: file(relativePath: { eq: "BG-2-Def-Cent-on-white.png" }) {
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
    <>
      <SEO title="Home | Life in HD" />
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroHeading}>
            <span className={styles.heroHeadingSpanLeft}>Welcome to</span>
            <span className={styles.heroHeadingSpanRight}>Life in HD</span>
          </h1>
          <p className={styles.preamble}>
            Human Design readings and courses
            <br />
            in Stockholm, Sweden
          </p>
        </div>
        <Image className={styles.heroImage} fluid={fluid} />
      </section>
      <section className={styles.content}>
        <p>
          Ex sit anim consequat cupidatat veniam duis occaecat et deserunt
          consectetur enim commodo. Anim elit pariatur qui consectetur occaecat
          velit consectetur pariatur elit quis est. Esse exercitation et nostrud
          duis exercitation. Est sunt anim quis reprehenderit culpa laboris
          Lorem amet excepteur anim id amet sint proident. Commodo mollit eu
          labore magna elit reprehenderit amet quis laboris cillum ex proident.
          Quis dolore Lorem Lorem cillum irure nulla sunt.
        </p>
        <p>
          Ex sit anim consequat cupidatat veniam duis occaecat et deserunt
          consectetur enim commodo. Anim elit pariatur qui consectetur occaecat
          velit consectetur pariatur elit quis est. Esse exercitation et nostrud
          duis exercitation. Est sunt anim quis reprehenderit culpa laboris
          Lorem amet excepteur anim id amet sint proident. Commodo mollit eu
          labore magna elit reprehenderit amet quis laboris cillum ex proident.
          Quis dolore Lorem Lorem cillum irure nulla sunt.
        </p>
      </section>
    </>
  );
};

export default IndexPage;
