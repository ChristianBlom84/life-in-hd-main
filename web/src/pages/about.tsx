import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';
import { Parallax } from 'react-scroll-parallax';
import Img from 'gatsby-image';
import SEO from '../components/Seo';
import styles from './about.module.scss';

const AboutPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      millaChristian: file(relativePath: { eq: "millachristian.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      milla: file(relativePath: { eq: "Milla.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      christian: file(relativePath: { eq: "Christian.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      backgroundAbout: file(relativePath: { eq: "backgrounds/about_bg.jpg" }) {
        childImageSharp {
          fluid(quality: 80, srcSetBreakpoints: [800, 1200, 1600, 2500, 4032]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const millaChristian = data.millaChristian.childImageSharp.fluid;
  const milla = data.milla.childImageSharp.fluid;
  const christian = data.christian.childImageSharp.fluid;
  const backgroundAbout = data.backgroundAbout.childImageSharp.fluid;

  return (
    <>
      <SEO title="About us | Life in HD" />
      <BackgroundImage
        Tag={`section`}
        id={`hero`}
        className={styles.background}
        fluid={backgroundAbout}
      >
        <div className={styles.heroOverlay}>
          <Parallax y={['0px', '50px']}>
            <div className={styles.heroText}>
              <h1 className={styles.heroHeading}>About us</h1>
            </div>
          </Parallax>
          <Parallax y={['150px', '50px']}>
            <div className={`${styles.contentOverlay} ${styles.mAuto}`}>
              <p>Milla and Christian met during the summer of 2012.</p>
              <p>
                Three weeks later Milla (6/2 Manifestor) initiated a very
                spontaneous proposal. The invitation was clear as a bell for
                Christian (4/6 Projector). One year later, almost to the day,
                they got married.
              </p>
              <p>
                A year later they were graced with their eldest daughter Leia
                (5/1 Manifesting Generator) and four years after that Elektra
                (6/2 Generator) entered the world. They currently live north of
                Stockholm and are raising their children according to their
                design.
              </p>
              <Img className={styles.aboutImage} fluid={millaChristian} />
              <p>
                Christian is a certified Human Design Analyst and Living Your
                Design Guide. He recieved his first reading in February of 2007
                and has been studying, experimenting with and living Human
                Design since then. He completed his Living Your Design Guide
                training in 2012 and became a certified Analyst in 2015.
              </p>
              <p>
                Milla is a trained physiotherapist and professional bodyworker.
                She received her reading June 2012 and hurtled head long into
                her experiment. Since 2015 she is also a certified Living Your
                Design Guide and became an IHDS Analyst in 2024. She travels the
                world working with Human Design, facilitating workshops and
                retreats, creating space for profound transformation for
                participants. The soft spot in her heart for Manifestors, and
                for people who have Manifestors in their life, is still as
                caring and supportive as ever.
              </p>
              <div className={styles.imageParagraph}>
                <div className={styles.bodygraphContainer}>
                  <Img
                    className={styles.bodygraphImage}
                    fluid={milla}
                    alt="Milla's bodygraph"
                  />
                  <p>
                    <i>Milla</i>
                  </p>
                </div>
                <div className={styles.bodygraphContainer}>
                  <Img
                    className={styles.bodygraphImage}
                    fluid={christian}
                    alt="Christian's bodygraph"
                  />
                  <p>
                    <i>Christian</i>
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
        </div>
      </BackgroundImage>
    </>
  );
};

export default AboutPage;
