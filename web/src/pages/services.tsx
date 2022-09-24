import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { Parallax } from 'react-scroll-parallax';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/Seo';
import styles from './services.module.scss';

const ServicesPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      backgroundServices: file(
        relativePath: { eq: "backgrounds/services_bg.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 80, srcSetBreakpoints: [800, 1200, 1600, 2500, 4032]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      gatheringImage: file(
        relativePath: { eq: "manifestors-talk-gathering.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 80, srcSetBreakpoints: [800, 1200, 1600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const backgroundServices = data.backgroundServices.childImageSharp.fluid;
  const gatheringImage = data.gatheringImage.childImageSharp.fluid;

  return (
    <>
      <SEO title="Human Design Services" />
      <BackgroundImage
        Tag={`section`}
        id={`hero`}
        className={styles.background}
        fluid={backgroundServices}
      >
        <div className={styles.heroOverlay}>
          <Parallax y={['0px', '50px']}>
            <div className={styles.heroText}>
              <h1 className={styles.heroHeading}>Human Design Services</h1>
            </div>
          </Parallax>
          <Parallax y={['150px', '50px']}>
            <div className={`${styles.contentOverlay} ${styles.mAuto}`}>
              <h2>Manifestor Online Gathering</h2>
              <figure className={styles.gatheringImage}>
                <Img fluid={gatheringImage} alt="" />
              </figure>
              <p>Welcome to the inaugural Manifestors Talk online gathering</p>
              <p>
                The space is held by Milla, 6/2 Splenic Manifestor,
                experimenting since 2012, and Leena, 3/5 Ego Manifestor,
                experimenting since 2020.
              </p>
              <p>
                We created this to come together and share our experience with
                Strategy and Authority. This is a space safe for you to listen
                and share, or not!, about your experiment. Whether you’re just
                starting or years deep in the experiment, you are most welcome.
              </p>
              <p>
                FYI: This is NOT a teaching of the Human Design system. We are
                keeping it simple and profound.{' '}
              </p>
              <p>
                And yes, there will be frequent use of creative, colorful
                language.
              </p>
              <p>Much love, Milla & Leena </p>
              <p>
                NOTE: The Zoomlink will be sent to the email address you use to
                pay. If you want it sent to another email, let me know.
              </p>
              <p className={styles.mb2}>Price: €15</p>
              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_blank"
                id={`paypal`}
              >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="encrypted" value="LSQUT3ZRM4WUC" />
                <input
                  type="image"
                  src="https://www.paypalobjects.com/en_US/SE/i/btn/btn_buynowCC_LG.gif"
                  name="submit"
                  alt="PayPal - The safer, easier way to pay online!"
                />
                <img
                  alt=""
                  src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </div>
            <div
              className={`${styles.contentOverlay} ${styles.mhAuto} ${styles.mt4}`}
            >
              <h2>Readings and sessions</h2>
              <h3>Foundation reading with Christian</h3>
              <p>
                A Human Design Foundation reading is where it all starts. We
                will go on a journey through your bodygraph focusing on the Four
                Views of Strategy, Authority, Definition and Profile.
              </p>
              <p>
                You will learn how to know which things in life are truly for
                you through your Type and Strategy and to make correct decision
                through your Inner Authority or decision making process. Your
                definition will show you what the reliable aspects of your life
                force are and how they flow through you and your Profile gives
                you a clear description of your natural role in the grand movie
                of life.
              </p>
              <p>
                The reading can be done online via Zoom or in person in the
                Stockholm area. The whole process usually takes 1-2 hours
                including time for questions.
              </p>
              <p className={styles.mb0}>Price: $200</p>
            </div>
            <div
              className={`${styles.contentOverlay} ${styles.mt4} ${styles.mhAuto}`}
            >
              <h3>Manifestor sessions with Milla: Manifestor to Manifestor</h3>
              <p>
                This is me trying to be what I would’ve wanted when I first
                started my experiment, someone who’d be in their experiment for
                a while and had first hand experience to share. With the focus
                on the Manifestor navigating this world using Strategy and
                Authority, you decide what you want to talk about. If you have
                any questions or looking for practical advice, I’d be more than
                willing to help.
              </p>
              <h3>
                Manifestor sessions: Manifestor to
                Projector/Generator/Manifesting Generator
              </h3>
              <p>
                This is my way of trying to contribute to a better understanding
                and communication between the types. It’s not uncommon to have
                difficulties in a relationship, of varying nature, when there’s
                a Manifestor involved. Even more so when they may not even
                themselves know they’re a Manifestor!
              </p>
              <p className={styles.mb0}>
                I cordially invite you to get in touch and book a session if you
                have questions you’d like to ask a Manifestor! Reach out on
                Instagram (
                <a href="https://www.instagram.com/lifeinhd.se/">
                  @lifeinhd.se
                </a>
                ) or via our <Link to="/contact">contact form.</Link>
              </p>
            </div>
          </Parallax>
        </div>
      </BackgroundImage>
    </>
  );
};

export default ServicesPage;
