import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/Seo';
import styles from './about.module.scss';

const AboutPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "millachristian.jpg" }) {
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
          <div>
            <p>
              Milla and Christian, (6/2 Manifestor and 4/6 Projector) have been
              married since 2013. Christian had his first Human Design reading
              February 2007 and Milla started her experiment June 2012. They are
              raising their two kids, Leia (5/1 Manifesting Generator) and
              Elektra (6/2 Generator), according to their design.
            </p>
            <p>
              Christian is a certified Human Design Analyst and Living Your
              Design Guide. Milla is a certified Living Your Design Guide.
            </p>
          </div>
          <Img className={styles.aboutImage} fluid={fluid} />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
