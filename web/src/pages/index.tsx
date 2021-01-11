import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import { Parallax } from 'react-scroll-parallax';
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
      heroBackground: file(relativePath: { eq: "backgrounds/start_hero.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      backgroundTwo: file(relativePath: { eq: "backgrounds/start_bg2.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const bigIcon = data.bigIcon.childImageSharp.fluid;
  const hexagramOne = data.hexagramOne.childImageSharp.fluid;
  const hexagramTwo = data.hexagramTwo.childImageSharp.fluid;
  const heroBackground = data.heroBackground.childImageSharp.fluid;
  // const backgroundTwo = data.backgroundTwo.childImageSharp.fluid;

  return (
    <>
      <SEO title="Home | Life in HD" />
      <BackgroundImage
        Tag={`section`}
        id={`hero`}
        className={styles.hero}
        fluid={heroBackground}
      >
        <div className={styles.heroOverlay}>
          <Parallax y={[-50, 50]}>
            <div className={styles.heroText}>
              <h1 className={styles.heroHeading}>Life in Human Design</h1>
              <p className={styles.preamble}>
                Welcome! Are you ready to start your experiment?
              </p>
            </div>
          </Parallax>
        </div>
      </BackgroundImage>
      <section className={styles.contentSection}>
        <BackgroundImage
          Tag={`section`}
          id={`hero`}
          className={styles.background}
          fluid={data.backgroundTwo.childImageSharp.fluid}
        >
          <div className={styles.contentOverlay}>
            <h3>What is Human Design?</h3>
            <p>
              Human Design is an intricate, amazing system for self-discovery
              and integrity. The core principle of Human Design is that your
              mind is an amazing tool - but it is not meant to make decisions
              for you in your life. Human Design shows you how you as a unique
              individual are made to make correct decisions and gives you the
              tools to find out the truth for yourself.
            </p>
            <p>
              Human Design is not a religion and there is no dogma. There is
              only a mapping of the mechanical aspects that lie beneath and
              drive life as we know it, and the individual exploration possible
              through experimentation with your own correct decision making.
            </p>
          </div>
        </BackgroundImage>
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
      </section>
    </>
  );
};

export default IndexPage;
