import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
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
      hexagramOne: file(relativePath: { eq: "hexagram1.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hexagramTwo: file(relativePath: { eq: "hexagram2.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const bigIcon = data.bigIcon.childImageSharp.fluid;
  const hexagramOne = data.hexagramOne.childImageSharp.fluid;
  const hexagramTwo = data.hexagramTwo.childImageSharp.fluid;

  return (
    <>
      <SEO title="Home | Life in HD" />
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroHeading}>
            <span className={styles.heroHeadingSpanLeft}>Welcome to</span>
            <span className={styles.heroHeadingSpanRight}>
              Life in Human Design
            </span>
          </h1>
          <p className={styles.preamble}>
            Human Design readings and courses online and
            <br />
            in Stockholm, Sweden
          </p>
        </div>
        <Image className={styles.heroImage} fluid={bigIcon} />
      </section>
      <section className={styles.contentSection}>
        <Image className={styles.hexagramOne} fluid={hexagramOne} />
        <div className={styles.content}>
          <p>
            Have you struggled with a feeling of frustration? Maybe you’re
            health has suffered? Or you’ve felt caught in situations or
            relationships you just couldn’t get out of? Let the anger get the
            best of you?
          </p>
          <p>
            Do you want to get information on how to make decisions in a way
            that is correct for you? A good place to start understanding how to
            navigate is having a <Link to="services">reading</Link> of your
            Human Design chart. If you’ve already had a reading and want to dive
            deeper, then a <Link to="services">Living Your Design course</Link>{' '}
            could be an option.
          </p>
          <p>
            Are you ready to learn how to navigate life in a way that is correct
            for you?
          </p>
        </div>
        <Image className={styles.hexagramTwo} fluid={hexagramTwo} />
      </section>
    </>
  );
};

export default IndexPage;
