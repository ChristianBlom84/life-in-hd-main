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
  const immersionMallorca =
    data.immersionMallorca.childImageSharp.gatsbyImageData;

  const slides = [
    {
      src: data.venueOne.childImageSharp.gatsbyImageData.images.fallback.src,
    },
    {
      src: data.venueTwo.childImageSharp.gatsbyImageData.images.fallback.src,
    },
    {
      src: data.venueThree.childImageSharp.gatsbyImageData.images.fallback.src,
    },
  ];

  const mallorcaMap = data.mallorcaMap.childImageSharp.gatsbyImageData;

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
              <h2>Human Design Immersion in Palma de Mallorca, Spain</h2>
              <p>
                Price:
                <br />
                Previous attendees of Mill or Hunt&apos;s immersions:{' '}
                <b>€450</b>
                <br />
                Early bird, before October 12: <b>€500</b>
                <br />
                Regular price after October 12: <b>€600</b>
              </p>
              <p>
                Dates: <b>November 12 - 16</b>
                <br />
                Times: <b>10 am - 1 pm (10:00 - 13:00)</b>
              </p>
              <p>
                Venue: Gran Via Asima, 20, 2nd floor, Office 17, 07009 Palma de
                Mallorca, Spain.
              </p>
              <p>
                For tickes and registration:{' '}
                <a
                  href="https://www.cognitoforms.com/Hunthollidayhdcom/RegistrationFormForImmersions"
                  target="_blank"
                  rel="noreferrer"
                >
                  Registration Form
                </a>
                .
              </p>
              <GatsbyImage
                image={immersionMallorca}
                alt="Immersion information overview"
                className={styles.immersionImage}
              />
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
                I met Hunt at the very first immersion I went to with Mary Ann
                Winiger. Our interaction - or lack thereof - gave me hope that
                there really was something to this Human Design system. It took
                me a while to initiate anything with Hunt, and that in itself
                said a lot for me. For the first time, I sensed space moving
                toward someone who was living their response.
              </p>
              <p>
                Over the years, through Mary Ann&apos;s Immersions and our
                ongoing connection, Hunt has become an ally - someone who waits,
                doesn&apos;t push, and allows me to move in my own timing. He is
                one of the ones I trust to hold a clean space in this
                experiment.
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
                This is your invitation to step into the experiment, to
                experience life as yourself, and to trust your Design.
              </p>
              <p> Are you ready?</p>
            </div>
          </Parallax>
          <Parallax translateY={['150px', '50px']}>
            <div className={`${styles.contentOverlay} ${styles.mAuto}`}>
              <h2>Venue</h2>
              <div className={styles.mapBlock}>
                <GatsbyImage
                  image={mallorcaMap}
                  alt="Map of venue location"
                  className={styles.mallorcaMap}
                />
                <div>
                  <p>
                    The Venue is 5 kilometers from La Palma old town city
                    center.
                  </p>
                  <p>
                    It is easily accessible on the M1 metro, which stops a few
                    minutes walk from the venue.
                  </p>
                  <p>
                    You can get a T10 multi trip pass that&apos;s valid for 100
                    days. The price is €15 for 10 trips.
                  </p>
                  <p>
                    Both Uber and taxis are available, though Uber might be the
                    more expensive option in Mallorca.
                  </p>
                </div>
              </div>
              <Lightbox
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
                inline={{
                  style: {
                    width: '100%',
                    maxWidth: '640px',
                    aspectRatio: '3 / 2',
                    margin: '0 auto',
                  },
                }}
              />
            </div>
          </Parallax>

          <Lightbox
            open={open}
            close={toggleOpen(false)}
            index={index}
            slides={slides}
            on={{ view: updateIndex }}
            animation={{ fade: 0 }}
            controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
          />
        </div>
      </BackgroundImage>
    </>
  );
};

export default Immersion;
