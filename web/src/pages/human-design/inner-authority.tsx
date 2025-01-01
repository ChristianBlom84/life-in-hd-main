import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Parallax } from 'react-scroll-parallax';
import { GatsbyImage } from "gatsby-plugin-image";
import SEO from '../../components/Seo';
import * as styles from '../human-design.module.scss';
import localStyles from './inner-authority.module.scss';

const InnerAuthorityPage: React.FC = () => {
  const data = useStaticQuery(graphql`{
  mandalaBodygraph: file(relativePath: {eq: "mandala-bodygraph.png"}) {
    childImageSharp {
      gatsbyImageData(width: 750, layout: CONSTRAINED)
    }
  }
  backgroundHumanDesign: file(
    relativePath: {eq: "backgrounds/humandesign_bg.jpg"}
  ) {
    childImageSharp {
      gatsbyImageData(
        quality: 80
        breakpoints: [800, 1200, 1600, 2500, 4032]
        layout: FULL_WIDTH
      )
    }
  }
}`);

  const backgroundHumanDesign =
    data.backgroundHumanDesign.childImageSharp.gatsbyImageData;
  const mandalaBodygraph = data.mandalaBodygraph.childImageSharp.gatsbyImageData;

  return <>
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
            <h1 className={styles.heroHeading}>Inner Authority</h1>
          </div>
        </Parallax>
        <Parallax y={['100px', '50px']}>
          <div className={`${styles.contentOverlay} ${styles.mAuto}`}>
            <h2>Your Decision Making Process</h2>
            <p>
              Human Design shows you that there is always a reliable and
              consistent way for you to make decisions in this life. Your
              Inner Authority or decision making process is what makes the
              decisions that come to you through the Strategy of your Type.
            </p>
            <p>
              The one thing all the Inner Authorities have in common is that
              the decisions are never made by what your mind tells you you
              should do. Below you will soon find an overview of the different
              kinds of Inner Authority.
            </p>
            <figure className={styles.mandalaBodygraph}>
              <GatsbyImage
                image={mandalaBodygraph}
                alt="Rave Mandala with the Bodygraph in the center" />
              <figcaption>
                Rave Mandala with the Bodygraph in the center
              </figcaption>
            </figure>
          </div>
        </Parallax>
      </div>
    </BackgroundImage>
  </>;
};

export default InnerAuthorityPage;
