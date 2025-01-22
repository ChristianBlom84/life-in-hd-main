import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { convertToBgImage } from 'gbimage-bridge';
import { Parallax } from 'react-scroll-parallax';
import SEO from '../components/Seo';
import * as styles from './index.module.scss';

const IndexPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    {
      bigIcon: file(relativePath: { eq: "BG-2-Def-Cent-on-white.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      hexagramOne: file(relativePath: { eq: "hexagram1.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      hexagramTwo: file(relativePath: { eq: "hexagram2.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      backgroundTwo: file(relativePath: { eq: "backgrounds/start_bg2.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 70
            breakpoints: [600, 1000, 1200, 1600, 2500, 4032]
            layout: FULL_WIDTH
          )
        }
      }
      backgroundThree: file(relativePath: { eq: "backgrounds/start_bg3.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 70
            breakpoints: [600, 1000, 1200, 1600, 2500, 4032]
            layout: FULL_WIDTH
          )
        }
      }
      backgroundFour: file(relativePath: { eq: "backgrounds/start_bg4.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 70
            breakpoints: [600, 1000, 1200, 1600, 2500, 4032]
            layout: FULL_WIDTH
          )
        }
      }
      backgroundFive: file(relativePath: { eq: "backgrounds/start_bg5.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 70
            breakpoints: [600, 1000, 1200, 1600, 2500, 4032]
            layout: FULL_WIDTH
          )
        }
      }
      heroBackground: file(relativePath: { eq: "backgrounds/start_hero.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 70
            breakpoints: [600, 1000, 1200, 1600, 2500, 4032]
            layout: FULL_WIDTH
          )
        }
      }
      backgroundSix: file(relativePath: { eq: "backgrounds/start_bg6.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 70
            breakpoints: [600, 1000, 1200, 1600, 2500, 4032]
            layout: FULL_WIDTH
          )
        }
      }
    }
  `);

  const heroBackground = convertToBgImage(
    data.heroBackground.childImageSharp.gatsbyImageData,
  );
  console.log(data.backgroundTwo);
  const backgroundTwo = convertToBgImage(
    data.backgroundTwo.childImageSharp.gatsbyImageData,
  );
  const backgroundThree = convertToBgImage(
    data.backgroundThree.childImageSharp.gatsbyImageData,
  );
  const backgroundFour = convertToBgImage(
    data.backgroundFour.childImageSharp.gatsbyImageData,
  );
  const backgroundFive = convertToBgImage(
    data.backgroundFive.childImageSharp.gatsbyImageData,
  );
  const backgroundSix = convertToBgImage(
    data.backgroundSix.childImageSharp.gatsbyImageData,
  );

  return (
    <>
      <SEO title="Home" />
      <BackgroundImage
        Tag={`section`}
        id={`hero`}
        className={styles.hero}
        {...heroBackground}
      >
        <div className={styles.heroOverlay}>
          <Parallax translateY={[-50, 50]}>
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
          {...backgroundTwo}
        >
          <Parallax translateY={['-75px', '75px']}>
            <div className={`${styles.contentOverlay} ${styles.mAuto}`}>
              <h2>What is Human Design?</h2>
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
                drive life as we know it, and the individual exploration
                possible through experimentation with your own correct decision
                making.
              </p>
              <p className={styles.mb0}>
                Are you new to Human Design?{' '}
                <a
                  href="http://www.jovianarchive.com/Get_Your_Chart"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get your chart here
                </a>{' '}
                and read more about the basics of the system in our{' '}
                <Link to="/human-design">Human Design information</Link>{' '}
                section.
              </p>
            </div>
          </Parallax>
        </BackgroundImage>
        <BackgroundImage
          Tag={`section`}
          className={`${styles.background} ${styles.justifyCenter}`}
          {...backgroundThree}
          rootMargin="400px"
        >
          <Parallax translateY={['-100px', '100px']}>
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
          {...backgroundFour}
          rootMargin="400px"
        >
          <Parallax translateY={['50px', '-50px']}>
            <div className={`${styles.contentOverlay} ${styles.contentRight}`}>
              <h3>Foundation reading</h3>
              <p className={styles.mb0}>
                A <Link to="/services">foundation reading</Link> is the natural
                place to start your Human Design experiment. You will learn the
                elemental aspects and challenges of your particular design and
                become familiar with the core concepts of Type, Strategy, Inner
                Authority and Profile.
              </p>
            </div>
          </Parallax>
          <Parallax translateY={['100px', '-100px']}>
            <div className={`${styles.contentOverlay} ${styles.contentLeft}`}>
              <h3>Manifestor sessions with Milla</h3>
              <p>
                Do you have a Manifestor in your life? Are you struggling with
                communication and wondering how to best deal with this person?
                I’m inviting you to{' '}
                <Link to="/services">reach out for a Manifestor session</Link>{' '}
                with me, where you can ask all your questions and I’ll give you
                an inside aura perspective. To be clear: I will not be speaking
                from anything other than my direct experience and am therefore
                unable, and unwilling, to answer on someone else’s behalf.
              </p>
              <p className={styles.mb0}>
                If you want to know more about Milla and her perspective and
                process, you can listen to her podcast{' '}
                <a href="https://anchor.fm/lifeonthecorrectfrequency">
                  Life on the Correct Frequency
                </a>
                .
              </p>
            </div>
          </Parallax>
        </BackgroundImage>
        <BackgroundImage
          Tag={`section`}
          className={`${styles.background} ${styles.justifyCenter}`}
          {...backgroundSix}
          rootMargin="400px"
        >
          <Parallax translateY={['-100px', '100px']}>
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
                Christian and Milla are both certified Human Design Analysts and
                Living Your Design Guides.
              </p>
              <p className={styles.mb0}>
                <Link to="/about">Read more about us.</Link>
              </p>
            </div>
          </Parallax>
        </BackgroundImage>
      </section>
    </>
  );
};

export default IndexPage;
