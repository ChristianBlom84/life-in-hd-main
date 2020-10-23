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
      <section className={`hero`}>
        <h1 className={styles.heading}>The Human Design System</h1>
      </section>
      <section className={styles.content}>
        <div className={styles.imageParagraph}>
          <p>
            Here you will find information on the foundations of the Human
            Design System.
          </p>
          <Img className={styles.planetImage} fluid={fluid} />
        </div>
      </section>
    </>
  );
};

export default HumanDesignPage;
