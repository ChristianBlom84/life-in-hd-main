/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import BackgroundImage from 'gatsby-background-image';
import { convertToBgImage } from 'gbimage-bridge';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Parallax } from 'react-scroll-parallax';
import Lightbox from 'yet-another-react-lightbox';
import Inline from 'yet-another-react-lightbox/plugins/inline';
import 'yet-another-react-lightbox/styles.css';
import SEO from '../components/Seo';
import * as styles from './immersion.module.scss';
import * as aboutStyles from './about.module.scss';
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
      immersionAustralia: file(
        relativePath: { eq: "immersion-australia.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            quality: 80
            breakpoints: [320, 640]
            layout: FULL_WIDTH
          )
        }
      }
    }
  `);

  const backgroundImmersion = convertToBgImage(
    data.backgroundImmersion.childImageSharp.gatsbyImageData,
  );
  const immersionAustralia =
    data.immersionAustralia.childImageSharp.gatsbyImageData;

  // const slides = [
  //   {
  //     src: data.immersionAustralia.childImageSharp.gatsbyImageData.images
  //       .fallback.src,
  //   },
  // ];

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
              <h2>Your Facilitators</h2>
              <p>
                Milla Berglund, 6/2 Splenic Manifestor, 13 years experimenting,
                IHDS Certified Human Design Analyst.
              </p>
              <p>
                Lady Kat, 4/6 Emotional Manifestor, 5 years experimenting, IHDS
                Certified Living Your Design Guide.
              </p>
              <p>
                Both facilitators are flying in from Europe as speakers for the
                annual Australian Human Design Conference.
              </p>
              <p>
                This Immersion isn&apos;t a program to fix or teach you
                something new—it&apos;s a profound experience where you can
                simply be, observe, and learn to trust yourself at a cellular
                level.
              </p>
              <p>
                Through shared exploration, practical exercises, and deep
                support, the Immersion becomes a container for transformation.
                Here, you&apos;ll explore what it truly means to live in
                alignment and navigate life through the simplicity of Strategy
                and Authority.
              </p>
              <p>
                Our 2 days will run from 11am until 5pm, with a break for lunch
                (not included).
              </p>
              <p>
                This is your invitation to step into the experiment, to
                experience life as yourself, and to trust your Design.
              </p>
              <p> Are you ready?</p>
            </div>
          </Parallax>
          <Parallax translateY={['150px', '75px']}>
            <div className={`${styles.contentOverlay} ${styles.mAuto}`}>
              <h2>Human Design Immersion in Mullumbimby, Australia</h2>
              <p>
                Price:
                <br />
                Two days <b>$250 AUSD</b>
                <br />
                One day <b>$140 AUSD</b>
              </p>
              <p>
                Dates: <b>May 7 & 8</b> Times: <b>11 am - 5 pm</b>
              </p>
              <p>
                Venue: Mullumbimby Civic Memorial Hall
                <br />
                Address: 55 Dalley Street Mullumbimby, NSW 2482
              </p>
              <p>
                For tickes and registration:{' '}
                <a
                  href="https://www.eventbrite.com.au/e/human-design-immersion-registration-1299242883439"
                  target="_blank"
                  rel="noreferrer"
                >
                  Human Design Immersion at Eventbrite
                </a>
                .
              </p>
              <GatsbyImage
                image={immersionAustralia}
                alt="Immersion information overview"
                className={aboutStyles.aboutImage}
              />
            </div>
          </Parallax>

          {/* <Lightbox
            index={index}
            slides={slides}
            plugins={[Inline]}
            on={{
              view: updateIndex,
              click: toggleOpen(true),
            }}
            carousel={{
              padding: 0,
              spacing: 0,
              imageFit: 'cover',
            }}
            inline={{}}
            className={styles.yarl__root}
          />

          <Lightbox
            open={open}
            close={toggleOpen(false)}
            index={index}
            slides={slides}
            on={{ view: updateIndex }}
            animation={{ fade: 0 }}
            controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
          /> */}
        </div>
      </BackgroundImage>
    </>
  );
};

export default Immersion;
