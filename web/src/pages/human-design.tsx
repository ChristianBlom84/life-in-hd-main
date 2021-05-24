import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Parallax } from 'react-scroll-parallax';
import Img from 'gatsby-image';
import SEO from '../components/Seo';
import styles from './human-design.module.scss';

const HumanDesignPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bodygraphs-planet.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      bodygraph: file(relativePath: { eq: "bodygraph.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_noBase64
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

  const { fluid } = data.placeholderImage.childImageSharp;
  const backgroundHumanDesign =
    data.backgroundHumanDesign.childImageSharp.fluid;
  const bodygraph = data.bodygraph.childImageSharp.fluid;

  return (
    <>
      <SEO title="Human Design Information | Life in HD" />
      <BackgroundImage
        Tag={`section`}
        id={`hero`}
        className={styles.background}
        fluid={backgroundHumanDesign}
      >
        <div className={styles.heroOverlay}>
          <Parallax y={['0px', '50px']}>
            <div className={styles.heroText}>
              <h1 className={styles.heroHeading}>The Human Design System</h1>
            </div>
          </Parallax>
          <Parallax y={['100px', '50px']}>
            <div className={`${styles.contentOverlay} ${styles.mAuto}`}>
              <h2>Human Design Basics</h2>
              <div className={styles.imageRight}>
                <p>
                  <figure className={styles.bodygraphFigure}>
                    <Img fluid={bodygraph} className={styles.bodygraph} />
                    <figcaption>The Bodygraph</figcaption>
                  </figure>
                  Human Design is a synthesis of several ancient and modern
                  systems of knowing. Aspects of the I&apos;Ching, Astrology,
                  Kabbalah&apos;s Tree of Life and the Hindu Brahman Chakra
                  System come together with genetics and physics through the
                  influence of neutrinos and are synthesized in what&apos;s
                  called the Bodygraph.
                </p>
              </div>
              <p>
                At the center of Human Design is the revelation that every human
                is a duality - there&apos;s the Design, what&apos;s colored in
                red in the chart, which is the body and the unconscious. The
                other aspect is what we call Personality, the conscious part of
                us, who we think we are and this is what&apos;s colored in
                black. These aspects are held together by the Magnetic Monopole,
                a magnetic force which only attracts, and gives us form as
                unique individuals.
              </p>
              <Img className={styles.planetImage} fluid={fluid} />
            </div>
          </Parallax>
        </div>
      </BackgroundImage>
    </>
  );
};

export default HumanDesignPage;
