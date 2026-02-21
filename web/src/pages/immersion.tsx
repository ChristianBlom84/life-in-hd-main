/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import BackgroundImage from 'gatsby-background-image';
import { convertToBgImage } from 'gbimage-bridge';
import { useStaticQuery, graphql } from 'gatsby';
import { Parallax } from 'react-scroll-parallax';
import Lightbox from 'yet-another-react-lightbox';
import Inline from 'yet-another-react-lightbox/plugins/inline';
import 'yet-another-react-lightbox/styles.css';
import SEO from '../components/Seo';
import * as styles from './immersion.module.scss';
import { GatsbyImage } from 'gatsby-plugin-image';

const Immersion: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const toggleOpen = (state: boolean) => () => setOpen(state);
  const updateIndex = ({ index: current }: { index: number }) =>
    setIndex(current);

  const data = useStaticQuery(graphql`
    {
      backgroundImmersion: file(
        relativePath: { eq: "backgrounds/immersion_bg.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            quality: 80
            breakpoints: [800, 1200, 1600, 2500, 4032]
            layout: FULL_WIDTH
          )
        }
      }
      immersionMallorca: file(relativePath: { eq: "immersion-mallorca.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 80
            breakpoints: [320, 640, 768]
            layout: FULL_WIDTH
          )
        }
      }
      venueOne: file(relativePath: { eq: "Venue1.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 80
            breakpoints: [320, 640]
            layout: FULL_WIDTH
          )
        }
      }
      venueTwo: file(relativePath: { eq: "Venue2.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 80
            breakpoints: [320, 640]
            layout: FULL_WIDTH
          )
        }
      }
      venueThree: file(relativePath: { eq: "Venue3.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 80
            breakpoints: [320, 640]
            layout: FULL_WIDTH
          )
        }
      }
      mallorcaMap: file(relativePath: { eq: "mallorca-map.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 80
            breakpoints: [150, 295]
            layout: FULL_WIDTH
          )
        }
      }
    }
  `);

  const backgroundImmersion = convertToBgImage(
    data.backgroundImmersion.childImageSharp.gatsbyImageData,
  );

  return (
    <>
      <SEO title="Human Design Immersion | Life in HD" />
      <BackgroundImage
        Tag={`section`}
        id={`hero`}
        className={styles.background}
        {...backgroundImmersion}
      >
        <div className={styles.heroOverlay}>
          <Parallax translateY={['0px', '50px']}>
            <div className={styles.heroText}>
              <h1 className={styles.heroHeading}>Human Design Immersions</h1>
            </div>
          </Parallax>
          <Parallax translateY={['150px', '50px']}>
            <div className={`${styles.contentOverlay} ${styles.mAuto}`}>
              <h2>What is an Immersion?</h2>
              <p>
                The Human Design Immersion, as brought by Mary Ann Winiger, is a
                call to fully live your Design. It&apos;s not about concepts,
                theories, or mental understanding — it&apos;s about aligning
                with your Strategy and Authority and allowing your inner GPS to
                guide you as yourself. It&apos;s a chance to strip away
                conditioning, resistance, and the need to &quot;figure it
                out&quot;, so you can discover what happens when you align with
                your Design.
              </p>
              <p>
                With Mary Ann Winiger&apos;s full support and blessing, I am
                honored to facilitate this process, creating a space for radical
                observation, experimentation, and integration. This isn&apos;t a
                program to fix or teach you something new—it&apos;s a profound
                experience where you can simply be, observe, and learn to trust
                yourself at a cellular level.
              </p>
              <p>
                Through shared exploration, practical exercises, and deep
                support, the Immersion becomes a container for transformation.
                Here, you&apos;ll explore what it truly means to live in
                alignment and navigate life through the simplicity of Strategy
                and Authority.
              </p>
              <p>
                This is your invitation to step into the experiment, to
                experience life as yourself, and to trust your Design.
              </p>
              <p> Are you ready?</p>
            </div>
          </Parallax>
          <Parallax translateY={['150px', '50px']}>
            <div className={`${styles.contentOverlay} ${styles.mAuto}`}>
              <h2>Your Facilitator</h2>
              <p>
                Milla Berglund, Splenic Manifestor 6/2. Experimenting since
                2012, in what only could be described as a radical fashion, even
                down to not even answering texts that she didn&apos;t initiate.
                (Her phone has been on silent since the &apos;90s so not
                answering phone calls was already a given). Initiated a husband,
                two kids, selling/buying a house, did her LYD-guide in 2015 and
                eventually became an IHDS certified Analyst in 2024.
              </p>
              <p>
                The first 30 years (3rd line phase) was intense. It&apos;s a
                little surprising she&apos;s alive today because over the years,
                there were some close calls. Once life shifted again (the roof
                phase at around 30) and is now moving to coming off the roof. To
                her surprise, she&apos;s enjoying coming off the roof to find
                how life will unfold.
              </p>
            </div>
          </Parallax>
        </div>
      </BackgroundImage>
    </>
  );
};

export default Immersion;
