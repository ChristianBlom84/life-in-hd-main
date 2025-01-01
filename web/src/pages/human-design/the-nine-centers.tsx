import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Parallax } from 'react-scroll-parallax';
import { GatsbyImage } from 'gatsby-plugin-image';
import SEO from '../../components/Seo';
import * as styles from '../human-design.module.scss';
import * as localStyles from './the-nine-centers.module.scss';

const NineCentersPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    {
      bodygraph: file(relativePath: { eq: "bodygraph.png" }) {
        childImageSharp {
          gatsbyImageData(width: 750, layout: CONSTRAINED)
        }
      }
      backgroundHumanDesign: file(
        relativePath: { eq: "backgrounds/humandesign_bg.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            quality: 80
            breakpoints: [800, 1200, 1600, 2500, 4032]
            layout: FULL_WIDTH
          )
        }
      }
    }
  `);

  const backgroundHumanDesign =
    data.backgroundHumanDesign.childImageSharp.gatsbyImageData;
  const bodygraph = data.bodygraph.childImageSharp.gatsbyImageData;

  return (
    <>
      <SEO title="The Four Types" />
      <BackgroundImage
        Tag={`section`}
        id={`hero`}
        className={styles.background}
        fluid={backgroundHumanDesign}
      >
        <div className={styles.heroOverlay}>
          <Parallax translateY={['0px', '50px']}>
            <div className={styles.heroText}>
              <h1 className={styles.heroHeading}>The Nine Centers</h1>
            </div>
          </Parallax>
          <Parallax translateY={['100px', '50px']}>
            <div className={`${styles.contentOverlay} ${styles.mAuto}`}>
              <h2>Homo Sapiens in Transitus</h2>
              <p>
                Before 1781 humans had 7 centers, or chakras. According to the
                information Ra Uru Hu got during his encounter with the Voice,
                the discovery of Uranus by Hershel triggered a mutation that
                made us 9-centered, or Homo Sapiens in Transitus.
              </p>
              <p>
                In many ways, we 9-centered humans are as different from
                7-centered humans as they were from Neanderthals, who were
                5-centered. Humanity still lives a conditioned strategic life
                that is a remnant of our 7-centered conditioning that
                doesn&apos;t belong to us. Human Design can show you why your
                mind is not fit to be the decision maker in your life. The mind
                is here to measure and be a witness, not to try to decide where
                we should and what we should do.
              </p>
              <p>
                Below you will soon find a short overview of each center, their
                biological functions and the way the open centers can condition
                our minds.
              </p>
              <figure
                className={`${styles.mandalaBodygraph} ${localStyles.bodygraph}`}
              >
                <GatsbyImage
                  image={bodygraph}
                  alt="Bodygraph with the nine centers"
                />
                <figcaption>Bodygraph with the nine centers</figcaption>
              </figure>
            </div>
          </Parallax>
        </div>
      </BackgroundImage>
    </>
  );
};

export default NineCentersPage;
