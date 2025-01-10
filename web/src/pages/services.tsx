import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { convertToBgImage } from 'gbimage-bridge';
import { Parallax } from 'react-scroll-parallax';
import { graphql, Link, useStaticQuery } from 'gatsby';
import SEO from '../components/Seo';
import * as styles from './services.module.scss';

const ServicesPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    {
      backgroundServices: file(
        relativePath: { eq: "backgrounds/services_bg.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            quality: 80
            breakpoints: [800, 1200, 1600, 2500, 4032]
            layout: FULL_WIDTH
          )
        }
      }
      gatheringImage: file(
        relativePath: { eq: "manifestors-talk-gathering.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            quality: 80
            breakpoints: [800, 1200, 1600]
            layout: FULL_WIDTH
          )
        }
      }
    }
  `);

  const backgroundServices = convertToBgImage(
    data.backgroundServices.childImageSharp.gatsbyImageData,
  );

  return (
    <>
      <SEO title="Human Design Services" />
      <BackgroundImage
        Tag={`section`}
        id={`hero`}
        className={styles.background}
        {...backgroundServices}
      >
        <div className={styles.heroOverlay}>
          <Parallax translateY={['0px', '50px']}>
            <div className={styles.heroText}>
              <h1 className={styles.heroHeading}>Human Design Services</h1>
            </div>
          </Parallax>
          <Parallax translateY={['150px', '50px']}>
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
              <p>Price: $200</p>
              <h3 className={styles.mt4}>Foundation reading with Milla</h3>
              <p>
                During a foundation reading with me, you will get information
                about what is consistently, reliable you. We will also go over
                possible not-self strategies as well as conditioning and how all
                of this may influence your movement in life.
              </p>
              <p>
                This information is crucial when it comes to navigating the
                world and making decision as yourself, according to your unique
                blueprint, in Human Design called Inner Authority and Strategy.
              </p>
              <p>
                The reading is online via Zoom. Included in the price is a
                follow up session / checking in on your experiment.
              </p>
              <p className={styles.mb0}>Price: $250</p>
            </div>
            <div
              className={`${styles.contentOverlay} ${styles.mt4} ${styles.mhAuto}`}
            >
              <h3>Manifestor session: Manifestor to Manifestor</h3>
              <p>
                This is me offering what I wanted when I first started my
                experiment, someone who’d been in their experiment for a while
                and could support me through sharing their first hand
                experience. With the focus on the Manifestor navigating this
                world through Strategy and Inner Authority, you decide what you
                want to talk about. If you have any questions or looking for
                practical advice, I’m happy to support you with my experience.
              </p>
              <p>
                Please note: this is ONLY available after a foundation reading
                from a certified IHDS Analyst.
              </p>
              <p>Price: $80</p>
              <h3>
                Manifestor sessions: Manifestor to
                Projector/Generator/Manifesting Generator
              </h3>
              <p>
                Manifestor sessions: Manifestor to
                Projector/Generator/Manifesting Generator This is my way of
                contributing to a better understanding and communication between
                the Types. It’s not uncommon to have difficulties in any
                relationship, especially when there’s a Manifestor involved.
                Even more so when they themselves may not even know they’re a
                Manifestor!
              </p>
              <p>
                I’m providing a space where you can ask questions and get an
                inside perspective from a mechanical point of view.
              </p>
              <p>Price: $80</p>
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
