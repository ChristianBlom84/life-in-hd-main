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
      immersionRome: file(relativePath: { eq: "immersion-rome.jpg" }) {
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
      romeMap: file(relativePath: { eq: "rome-map.jpg" }) {
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
  const immersionRome = data.immersionRome.childImageSharp.gatsbyImageData;

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

  const romeMap = data.romeMap.childImageSharp.gatsbyImageData;

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
              <h2>Human Design Immersion in Rome, Italy</h2>
              <p>
                Price:
                <br />
                Previous attendees of Milla or Hunt&apos;s immersions:{' '}
                <b>€400</b>
                <br />
                Early bird, before April 20: <b>€450</b>
                <br />
                Regular price after April 20: <b>€550</b>
              </p>
              <p>
                Dates: <b>May 6 - 10, 2026</b>
                <br />
                Times: <b>2:30 pm - 5:30 pm each day (14:30 - 17:30)</b>
              </p>
              <p>
                Venue: Aura Sacred Space
                <br />
                Via degli Ombrellari, 44, 00193 Roma RM, Italy
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
                image={immersionRome}
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
              <p>Here&apos;s what she says about Hunt.</p>
              <p>
                &quot;I met Hunt at the very first immersion I went to with Mary
                Ann Winiger. Our interaction - or lack thereof - gave me hope
                that there really was something to this Human Design system. It
                took me a while to initiate anything with Hunt, and that in
                itself said a lot for me. For the first time, I sensed space
                moving toward someone who was living their Design and being ok
                with me to make the first move.
              </p>
              <p>
                Over the years, through Mary Ann&apos;s Immersions and our
                ongoing connection, Hunt has become apmn ally - someone who
                waits, doesn&apos;t push, and allows me to move in my own
                timing. He is one of the ones I trust to hold a clean space in
                this experiment.&quot;
              </p>
              <p>
                More curious about Hunt? You can{' '}
                <a
                  href="https://hunthollidayhd.com/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  read more here.
                </a>
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
                  image={romeMap}
                  alt="Map of venue location"
                  className={styles.romeMap}
                />
                <div>
                  <h3>Metro</h3>
                  <p>The Venue is a 10 minute walk from Ottaviano.</p>
                  <h3>Bus</h3>
                  <p>
                    The bus routes with the closest stops are Vitelleschi, 23
                    and Crescenzio/Risorgimento, 49.
                  </p>
                  <h3>Train</h3>
                  <p>The Venue is a 20 minute walk from Roma San Pietro.</p>
                </div>
                <div className={styles.parking}>
                  <h3>Parking Garage</h3>
                  <p>
                    Terminal Gianicolo Via Urbano VIII, 16, 00193 Roma RM Front
                    driving entrance hours: open everyday from 06:30 to 01:30
                  </p>
                  <p>Gate hours 06:30 to 20:30</p>
                  <p>
                    Take elevator to the bottom floor and follow the escalators
                    through Tunnel Conciliazione to St. Peter&apos;s Square
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
