import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Parallax } from 'react-scroll-parallax';
import Img from 'gatsby-image';
import SEO from '../../components/Seo';
import styles from '../human-design.module.scss';
import localStyles from './inner-authority.module.scss';

const InnerAuthorityPage: React.FC = () => {
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
              <h1 className={styles.heroHeading}>The Human Design System</h1>
            </div>
          </Parallax>
          <Parallax y={['100px', '50px']}>
            <div className={`${styles.contentOverlay} ${styles.mAuto}`}>
              <h2>Human Design Basics</h2>
              <p>
                Human Design is a synthesis of several ancient and modern
                systems of knowing. Aspects of the I&apos;Ching, Astrology,
                Kabbalah&apos;s Tree of Life and the Hindu Brahman Chakra System
                come together with genetics and physics through the influence of
                neutrinos and are synthesized in what&apos;s called the
                Bodygraph.
              </p>
              <figure className={styles.mandalaBodygraph}>
                <Img
                  fluid={mandalaBodygraph}
                  alt="Rave Mandala with the Bodygraph in the center"
                />
                <figcaption>
                  Rave Mandala with the Bodygraph in the center
                </figcaption>
              </figure>
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
              <h3>Strategy and Authority</h3>
              <p>
                The most practical surface level of Human Design begins with
                Strategy and Authority - in fact, for most people Strategy and
                Authority is all they&apos;ll ever need. Your Strategy and
                Authority enable you to make correct decisions as yourself and
                provide a path to living your unique life.
              </p>
              <h3>Type and Aura</h3>
              <p>
                Your Strategy of decision making is a description of how your
                vehicle - your body - navigates in world in a way that
                eliminates resistance. Strategy is derived from your Human
                Design Type of which there are four variations, Generator,
                Manifestor, Projector and Reflector. Each Type has a distinct
                aura which forms the foundation of how we meet other people.
              </p>
            </div>
          </Parallax>
        </div>
      </BackgroundImage>
    </>
  );
};

export default InnerAuthorityPage;
