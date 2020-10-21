import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/Seo';
import styles from './about.module.scss';

const AboutPage: React.FC = () => {
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
      <SEO title="About us | Life in HD" />
      <section className={`hero`}>
        <h1 className={styles.heading}>About us</h1>
      </section>
      <section className={styles.content}>
        <div className={styles.imageParagraph}>
          <p>
            Milla and Christian, (Manifestor 6/2 and Projector 4/6) have been
            married since 2013. Christian had his first Human Design reading
            February 2007 and Milla started her experiment June 2012. They are
            raising their two kids, Leia (Manifesting Generator 5/1) and Elektra
            (Generator 6/2), according to their design.
          </p>
          <Img className={styles.planetImage} fluid={fluid} />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
