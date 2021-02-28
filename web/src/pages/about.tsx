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
              Milla and Christian met during the summer of 2012 - three weeks
              later Milla spontaneously proposed and Christian heard himself say
              &quot;Yes!&quot; and one year later they got married. A year later
              they were graced with their eldest daughter Leia (5/1 Manifesting
              Generator) and four years after that Elektra (6/2 Generator)
              entered the world. They currently live north of Stockholm and are
              raising their children according to their design.
            </p>
            <p>
              Christian is a certified Human Design Analyst and Living Your
              Design Guide. He recieved his first reading in February of 2007
              and has been studying, experimenting with and living Human Design
              since then. He completed his Living Your Design Guide training in
              2012 and became a certified Analyst in 2015.
            </p>
            <p>
              Milla is a trained physiotherapist and professional bodyworker,
              since 2015 she is also a certified Living Your Design Guide. As a
              Manifestor she has a particular passion when it comes to helping
              both Manifestors understand how they can live more naturally
              aligned to their own nature and working with the other types to
              help them understand how to best deal with Manifestors in their
              life.
            </p>
          </div>
          <Img className={styles.aboutImage} fluid={fluid} />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
