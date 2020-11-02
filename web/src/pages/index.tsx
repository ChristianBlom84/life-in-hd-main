import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
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
            <span className={styles.heroHeadingSpanRight}>Life in HD</span>
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
          <p>
            Here at Life in HD we offer{' '}
            <Link to="services">readings, sessions and classes</Link> to help
            you get started on your own, personal journey of living correctly as
            yourself. Often we need information, support or sharing coming from
            outside ourselves in order to trigger a change in our direction. Is
            this what you need? If this information resonates with you, we
            invite you to <Link to="contact">contact us</Link>.
          </p>
        </div>
        <Image className={styles.hexagramTwo} fluid={hexagramTwo} />
      </section>
    </>
  );
};

export default IndexPage;
