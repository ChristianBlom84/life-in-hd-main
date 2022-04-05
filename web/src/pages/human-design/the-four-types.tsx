import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Parallax } from 'react-scroll-parallax';
import Img from 'gatsby-image';
import SEO from '../../components/Seo';
import styles from '../human-design.module.scss';
import localStyles from './the-four-types.module.scss';

const FourTypesPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      mandalaBodygraph: file(relativePath: { eq: "mandala-bodygraph.png" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      backgroundHumanDesign: file(
        relativePath: { eq: "backgrounds/humandesign_bg.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 80, srcSetBreakpoints: [800, 1200, 1600, 2500, 4032]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const backgroundHumanDesign =
    data.backgroundHumanDesign.childImageSharp.fluid;
  const mandalaBodygraph = data.mandalaBodygraph.childImageSharp.fluid;

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
          <Parallax y={['0px', '50px']}>
            <div className={styles.heroText}>
              <h1 className={styles.heroHeading}>The Four Types</h1>
            </div>
          </Parallax>
          <Parallax y={['100px', '50px']}>
            <div className={`${styles.contentOverlay} ${styles.mAuto}`}>
              <h2>Type and Aura</h2>
              <p>
                Your Strategy of decision making is a description of how your
                vehicle - your body - navigates in world in a way that
                eliminates resistance. Strategy is derived from your Human
                Design Type of which there are four variations, Generator,
                Manifestor, Projector and Reflector. Each Type has a distinct
                aura which forms the foundation of how we meet other people.
              </p>
              <p>
                Below you will soon find a description of each Type and their
                aura mechanics.
              </p>
            </div>
          </Parallax>
        </div>
      </BackgroundImage>
    </>
  );
};

export default FourTypesPage;
