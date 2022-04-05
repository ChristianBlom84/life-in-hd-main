import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
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
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bodygraph: file(relativePath: { eq: "bodygraph.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      gCenter: file(relativePath: { eq: "gside.png" }) {
        childImageSharp {
          fluid(maxWidth: 280) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
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

  const { fluid } = data.placeholderImage.childImageSharp;
  const backgroundHumanDesign =
    data.backgroundHumanDesign.childImageSharp.fluid;
  const bodygraph = data.bodygraph.childImageSharp.fluid;
  const gCenter = data.gCenter.childImageSharp.fluid;
  const mandalaBodygraph = data.mandalaBodygraph.childImageSharp.fluid;

  return (
    <>
      <SEO title="Human Design Information" />
      <BackgroundImage
        Tag={`section`}
        id={`hero`}
        className={styles.background}
        fluid={backgroundHumanDesign}
      >
        <div className={styles.heroOverlay}>
          <Parallax y={['25px', '75px']}>
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
                Type, which shows you your Strategy, and Authority - in fact,
                for most people Strategy and Authority is all they&apos;ll ever
                need. Your Strategy and Authority enable you to make correct
                decisions as yourself and provide a path to living your unique
                life. Read more about <Link to="the-four-types">Strategy</Link>{' '}
                and <Link to="inner-authority">Authority</Link>.
              </p>
              <h3>The Nine Centers</h3>
              <p>
                The discovery of Uranus in 1781 triggered a mutation in humanity
                and we moved from having 7 chakras to being 9 centered beings.
                One way to look at the bodygraph is as a circuit board that
                shows you how energy naturally flows in a person with the
                centers being energy hubs and the channels connecting them being
                part of different circuits. The way the centers are activated
                and connected in a chart forms the foundation for Type and Inner
                Authority and shows us where we can be susceptible to
                conditioning in our lives.{' '}
                <Link to="the-nine-centers">
                  Read more about the nine Centers.
                </Link>
              </p>
              <figure
                className={`${styles.mandalaBodygraph} ${styles.gCenterImage}`}
              >
                <Img fluid={gCenter} alt="The G center" />
                <figcaption>The G Center</figcaption>
              </figure>
            </div>
          </Parallax>
        </div>
      </BackgroundImage>
    </>
  );
};

export default HumanDesignPage;
