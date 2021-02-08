import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { Parallax } from 'react-scroll-parallax';
import { graphql, Link, useStaticQuery } from 'gatsby';
import SEO from '../components/Seo';
import styles from './services.module.scss';

const ServicesPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      backgroundServices: file(
        relativePath: { eq: "backgrounds/services_bg.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const backgroundServices = data.backgroundServices.childImageSharp.fluid;

  return (
    <>
      <SEO title="Human Design Services | Life in HD" />
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
              <h3>Manifestor session with Milla</h3>
              <p>
                Do you have a Manifestor in your life? Are you struggling with
                communication and wondering how to best deal with this person?
                I’m inviting you to reach out for a Manifestor session with me,
                where you can ask all your questions and I’ll give you an inside
                aura perspective. To be clear: I will not be speaking from
                anything other than my direct experience and is therefore
                unable, and unwilling, to answer on someone else’s behalf.
              </p>
              <p className={styles.mb0}>
                Price: <Link to="/contact">Contact us</Link>
              </p>
            </div>
          </Parallax>
        </div>
      </BackgroundImage>
    </>
  );
};

export default ServicesPage;
