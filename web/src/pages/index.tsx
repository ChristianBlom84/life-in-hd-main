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
      backgroundTwo: file(relativePath: { eq: "backgrounds/start_bg2.jpg" }) {
        childImageSharp {
          fluid(
            quality: 70
            srcSetBreakpoints: [600, 1000, 1200, 1600, 2500, 4032]
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      backgroundThree: file(relativePath: { eq: "backgrounds/start_bg3.jpg" }) {
        childImageSharp {
          fluid(
            quality: 70
            srcSetBreakpoints: [600, 1000, 1200, 1600, 2500, 4032]
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      backgroundFour: file(relativePath: { eq: "backgrounds/start_bg4.jpg" }) {
        childImageSharp {
          fluid(
            quality: 70
            srcSetBreakpoints: [600, 1000, 1200, 1600, 2500, 4032]
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      backgroundFive: file(relativePath: { eq: "backgrounds/start_bg5.jpg" }) {
        childImageSharp {
          fluid(
            quality: 70
            srcSetBreakpoints: [600, 1000, 1200, 1600, 2500, 4032]
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heroBackground: file(relativePath: { eq: "backgrounds/start_hero.jpg" }) {
        childImageSharp {
          fluid(
            quality: 70
            srcSetBreakpoints: [600, 1000, 1200, 1600, 2500, 4032]
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      backgroundSix: file(relativePath: { eq: "backgrounds/start_bg6.jpg" }) {
        childImageSharp {
          fluid(
            quality: 70
            srcSetBreakpoints: [600, 1000, 1200, 1600, 2500, 4032]
          ) {
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
  console.log(data.backgroundTwo);
  const backgroundTwo = data.backgroundTwo.childImageSharp.fluid;
  const backgroundThree = data.backgroundThree.childImageSharp.fluid;
  const backgroundFour = data.backgroundFour.childImageSharp.fluid;
  const backgroundFive = data.backgroundFive.childImageSharp.fluid;
  const backgroundSix = data.backgroundSix.childImageSharp.fluid;

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
          className={`${styles.background} ${styles.justifyCenter}`}
          fluid={backgroundTwo}
        >
          <Parallax y={['-75px', '75px']}>
            <div className={`${styles.contentOverlay} ${styles.mAuto}`}>
              <h3>What is Human Design?</h3>
              <p>
                Human Design is an intricate, amazing system for self-discovery
                and integrity. The core principle of Human Design is that your
                mind is an amazing tool - but it is not meant to make decisions
                for you in your life. Human Design shows you how you as a unique
                individual are made to make correct decisions and gives you the
                tools to find out the truth for yourself.
              </p>
              <p className={styles.mb0}>
                Human Design is not a religion and there is no dogma. There is
                only a mapping of the mechanical aspects that lie beneath and
                drive life as we know it, and the individual exploration
                possible through experimentation with your own correct decision
                making.
              </p>
            </div>
          </Parallax>
        </BackgroundImage>
        <BackgroundImage
          Tag={`section`}
          className={`${styles.background} ${styles.justifyCenter}`}
          fluid={backgroundThree}
          rootMargin="400px"
        >
          <Parallax y={['-100px', '100px']}>
            <div className={`${styles.contentOverlay} ${styles.mAuto}`}>
              <p className={styles.mb0}>
                Here at Life in HD we offer{' '}
                <Link to="/services">readings, sessions and classes</Link> to
                help you get started on your own, personal journey of living
                correctly as yourself. Often we need information, support or
                sharing coming from outside ourselves in order to trigger a
                change in our direction. Is this what you need? If this
                information resonates with you, we invite you to{' '}
                <Link to="/contact">contact us</Link>.
              </p>
            </div>
          </Parallax>
        </BackgroundImage>
        <BackgroundImage
          Tag={`section`}
          className={`${styles.background} ${styles.justifyEven}`}
          fluid={backgroundFour}
          rootMargin="400px"
        >
          <Parallax y={['50px', '-50px']}>
            <div className={`${styles.contentOverlay} ${styles.contentRight}`}>
              <h3>Foundation reading with Christian</h3>
              <p>
                A foundation reading is the natural place to start your Human
                Design experiment. You will learn the elemental aspects and
                challenges of your particular design and become familiar with
                the core concepts of Type, Strategy and Inner Authority.
              </p>
              <p className={styles.mb0}>
                <Link to="/services">Read more</Link>
              </p>
            </div>
          </Parallax>
          <Parallax y={['100px', '-100px']}>
            <div className={`${styles.contentOverlay} ${styles.contentLeft}`}>
              <h3>Manifestor sessions with Milla</h3>
              <p>
                Do you have a Manifestor in your life? Are you struggling with
                communication and wondering how to best deal with this person?
                I’m inviting you to reach out for a Manifestor session with me,
                where you can ask all your questions and I’ll give you an inside
                aura perspective. To be clear: I will not be speaking from
                anything other than my direct experience and am therefore
                unable, and unwilling, to answer on someone else’s behalf.
              </p>
              <p className={styles.mb0}>
                <Link to="/services">Read more</Link>
              </p>
            </div>
          </Parallax>
        </BackgroundImage>
        <BackgroundImage
          Tag={`section`}
          className={`${styles.background} ${styles.justifyCenter}`}
          fluid={backgroundSix}
          rootMargin="400px"
        >
          <Parallax y={['-100px', '100px']}>
            <div className={`${styles.contentOverlay} ${styles.mAuto}`}>
              <h3>Who are we?</h3>
              <p>
                Milla and Christian, (6/2 Manifestor and 4/6 Projector) have
                been married since 2013. Christian had his first Human Design
                reading February 2007 and Milla started her experiment June
                2012. They are raising their two kids, Leia (5/1 Manifesting
                Generator) and Elektra (6/2 Generator), according to their
                design.
              </p>
              <p>
                Christian is a certified Human Design Analyst and Living Your
                Design Guide. Milla is a certified Living Your Design Guide.
              </p>
              <p className={styles.mb0}>
                <Link to="/about">Read more</Link>
              </p>
            </div>
          </Parallax>
        </BackgroundImage>
      </section>
    </>
  );
};

export default IndexPage;
