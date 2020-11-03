import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/Seo';
import styles from './human-design.module.scss';

const HumanDesignPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bodygraphs-planet.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  const { fluid } = data.placeholderImage.childImageSharp;

  return (
    <>
      <SEO title="Human Design Information | Life in HD" />
      <section className={styles.hero}>
        <h1>
          <span>The</span>
          <span>Human</span>
          <span>Design</span>
          <span>System</span>
        </h1>
      </section>
      <section className={styles.content}>
        <div className={styles.imageParagraph}>
          <h2>What is Human Design?</h2>
          <p>
            Human Design is an intricate, amazing system for self-discovery and
            integrity. The core principle of Human Design is that your mind is
            an amazing tool - but it is not meant to make decisions for you in
            your life. Human Design shows you how you as a unique individual are
            made to make correct decisions and gives you the tools to find out
            the truth for yourself.
          </p>
          <p>
            Human Design is not a religion and there is no dogma. There is only
            a mapping of the mechanical aspects that lie beneath and drive life
            as we know it, and the individual exploration possible through
            experimentation with your own correct decision making.
          </p>
          <Img className={styles.planetImage} fluid={fluid} />
        </div>
      </section>
    </>
  );
};

export default HumanDesignPage;
