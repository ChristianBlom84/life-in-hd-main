/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useRef, useState } from 'react';
import BackgroundImage from 'gatsby-background-image';
import { convertToBgImage } from 'gbimage-bridge';
import { useStaticQuery, graphql } from 'gatsby';
import { Parallax } from 'react-scroll-parallax';
import Lightbox from 'yet-another-react-lightbox';
import Inline from 'yet-another-react-lightbox/plugins/inline';
import 'yet-another-react-lightbox/styles.css';
import SEO from '../components/Seo';
import Spinner from '../components/Spinner';
import * as styles from './immersion.module.scss';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MdClose } from 'react-icons/md';

const Immersion: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const toggleOpen = (state: boolean) => () => setOpen(state);
  const updateIndex = ({ index: current }: { index: number }) =>
    setIndex(current);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [birthImage, setBirthImage] = useState<File | null>(null);
  const [sendingForm, setSendingForm] = useState(false);
  const [formErrored, setFormErrored] = useState(false);
  const [formSentMessageVisible, setFormSentMessageVisible] = useState(false);
  const [formMessageDelayedOpen, setFormMessageDelayedOpen] = useState(false);
  const formMessageRef = useRef<HTMLDivElement | null>(null);

  const handleClose = async (): Promise<void> => {
    setFormMessageDelayedOpen(false);
    setTimeout(() => {
      setFormSentMessageVisible(false);
    }, 200);
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setFormErrored(false);
    setSendingForm(true);

    const formData = new FormData();
    formData.append('form-name', 'immersion');
    formData.append('first-name', firstName);
    formData.append('last-name', lastName);
    formData.append('email', email);
    formData.append('birth-date', birthDate);
    formData.append('birth-time', birthTime);
    formData.append('birth-place', birthPlace);
    if (birthImage) {
      formData.append('birth-image', birthImage);
    }

    try {
      const res = await fetch('/', {
        method: 'POST',
        body: formData,
      });

      if (res.status === 200) {
        setFormSentMessageVisible(true);
        setTimeout(() => {
          setFormMessageDelayedOpen(true);
        }, 70);
        setTimeout(() => {
          handleClose();
        }, 3000);
        setFirstName('');
        setLastName('');
        setEmail('');
        setBirthDate('');
        setBirthTime('');
        setBirthPlace('');
        setBirthImage(null);
      } else {
        setFormErrored(true);
        setFormSentMessageVisible(true);
        setTimeout(() => {
          setFormMessageDelayedOpen(true);
        }, 70);
        setTimeout(() => {
          handleClose();
        }, 3000);
      }
    } catch (error) {
      console.error(error);
      setFormErrored(true);
    }

    setSendingForm(false);
  };

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
      immersionStockholm: file(
        relativePath: { eq: "immersion-stockholm.jpg" }
      ) {
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
      venueFour: file(relativePath: { eq: "Venue4.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 80
            breakpoints: [320, 640]
            layout: FULL_WIDTH
          )
        }
      }
      venueFive: file(relativePath: { eq: "Venue5.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 80
            breakpoints: [320, 640]
            layout: FULL_WIDTH
          )
        }
      }
      stockholmMap: file(relativePath: { eq: "stockholm-map.jpg" }) {
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
  const immersionStockholm =
    data.immersionStockholm.childImageSharp.gatsbyImageData;

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
    {
      src: data.venueFour.childImageSharp.gatsbyImageData.images.fallback.src,
    },
    {
      src: data.venueFive.childImageSharp.gatsbyImageData.images.fallback.src,
    },
  ];

  const stockholmMap = data.stockholmMap.childImageSharp.gatsbyImageData;

  return (
    <>
      <SEO title="Human Design Immersion | Life in HD" />
      <BackgroundImage
        Tag={`section`}
        id={`hero`}
        className={styles.background}
        {...backgroundImmersion}
      >
        {formSentMessageVisible ? (
          <div
            className={`${styles.formSentMessage} ${
              formMessageDelayedOpen ? styles.visible : ''
            }`}
            ref={formMessageRef}
            onClick={(e): void => {
              e.stopPropagation();
            }}
          >
            <button onClick={(): void => setFormSentMessageVisible(false)}>
              <MdClose />
            </button>
            {formErrored ? (
              <>
                <p className={styles.mb2}>Something went wrong!</p>
                <p className={styles.mb0}>
                  Please try again, or email us directly at info@lifeinhd.se.
                </p>
              </>
            ) : (
              <>
                <p className={styles.mb2}>Thank you for contacting us!</p>
                <p className={styles.mb0}>
                  We will get back to you as soon as we can.
                </p>
              </>
            )}
          </div>
        ) : null}
        <div className={styles.heroOverlay}>
          <Parallax translateY={['0px', '50px']}>
            <div className={styles.heroText}>
              <h1 className={styles.heroHeading}>Human Design Immersions</h1>
            </div>
          </Parallax>
          <Parallax translateY={['150px', '50px']}>
            <div className={`${styles.contentOverlay} ${styles.mAuto}`}>
              <h2>Human Design Immersion in Stockholm, Sweden</h2>
              <p>
                Price:
                <br />
                Previous attendees of Milla or Hunt&apos;s immersions:{' '}
                <b>€400</b>
                <br />
                Early bird, before July 9th: <b>€425</b>
                <br />
                Regular price after July 9th: <b>€500</b>
              </p>
              <p>
                Dates: <b>July 23 - 26, 2026</b>
                <br />
                Times: <b>10 am - 1:00 pm each day (10:00 - 13:00)</b>
              </p>
              <p>
                Venue: YogaDevi
                <br />
                Pontonjärgatan 36, 112 36 Stockholm, Sweden
              </p>
              <GatsbyImage
                image={immersionStockholm}
                alt="Immersion information overview"
                className={styles.immersionImage}
              />
              <h3>Registration Form</h3>
              <p>
                Please fill out the form below to register for the Human Design
                Immersion in Stockholm. You can either generate your chart at{' '}
                <a
                  href="https://jovianarchive.com/pages/get-your-human-design-chart"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://jovianarchive.com/pages/get-your-human-design-chart/
                </a>{' '}
                and upload an image of your chart, or fill in your birth data.
                We hope to see you there!
              </p>
              <form
                name="immersion"
                method="POST"
                onSubmit={handleSubmit}
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                encType="multipart/form-data"
                className={styles.form}
              >
                <input type="hidden" name="form-name" value="immersion" />
                <div className={styles.hiddenField}>
                  <label>
                    Don&apos;t fill this out if you&apos;re human:
                    <input name="bot-field" />
                  </label>
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="first-name">First Name*</label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    required
                    value={firstName}
                    onChange={(e: React.FormEvent<HTMLInputElement>): void =>
                      setFirstName(e.currentTarget.value)
                    }
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="last-name">Last Name*</label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    required
                    value={lastName}
                    onChange={(e: React.FormEvent<HTMLInputElement>): void =>
                      setLastName(e.currentTarget.value)
                    }
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e: React.FormEvent<HTMLInputElement>): void =>
                      setEmail(e.currentTarget.value)
                    }
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="birth-date">Birth Date</label>
                  <input
                    type="date"
                    id="birth-date"
                    name="birth-date"
                    required
                    value={birthDate}
                    onChange={(e: React.FormEvent<HTMLInputElement>): void =>
                      setBirthDate(e.currentTarget.value)
                    }
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="birth-time">Birth Time</label>
                  <input
                    type="time"
                    id="birth-time"
                    name="birth-time"
                    required
                    value={birthTime}
                    onChange={(e: React.FormEvent<HTMLInputElement>): void =>
                      setBirthTime(e.currentTarget.value)
                    }
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="birth-place">Birth Place</label>
                  <input
                    type="text"
                    id="birth-place"
                    name="birth-place"
                    placeholder="City, (State), Country"
                    required
                    value={birthPlace}
                    onChange={(e: React.FormEvent<HTMLInputElement>): void =>
                      setBirthPlace(e.currentTarget.value)
                    }
                  />
                </div>
                <div className={`${styles.inputGroup} ${styles.fullwidth}`}>
                  <label htmlFor="birth-image">Upload Image</label>
                  <input
                    type="file"
                    id="birth-image"
                    name="birth-image"
                    accept="image/*"
                    onChange={(e: React.FormEvent<HTMLInputElement>): void =>
                      setBirthImage(
                        e.currentTarget.files ? e.currentTarget.files[0] : null,
                      )
                    }
                  />
                </div>
                <button
                  className={styles.button}
                  type="submit"
                  disabled={sendingForm || formSentMessageVisible}
                >
                  {sendingForm || formSentMessageVisible ? (
                    <Spinner />
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
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
                ongoing connection, Hunt has become an ally - someone who waits,
                doesn&apos;t push, and allows me to move in my own timing. He is
                one of the ones I trust to hold a clean space in this
                experiment.&quot;
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
                  image={stockholmMap}
                  alt="Map of venue location"
                  className={styles.map}
                />
                <div>
                  <h3>Public Transportation</h3>
                  <p>
                    The Venue is a 5 minute walk from Fridhemsplan. There is a
                    metro stop on both the green and blue lines, as well as bus
                    stops for lines 1, 3 and 4.
                  </p>
                  <p>
                    You can use contactless payment, the SL app or a travel card
                    when using public transportation. For more information on
                    how to get around, check out the SL website:{' '}
                    <a
                      href="https://sl.se/en/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://sl.se/en/
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className={styles.parking}>
                <h3>Parking</h3>
                <p>
                  Street parking is available in the area, but it can be
                  limited. You can use the Parkster app to pay for parking.
                </p>
                <p>
                  Stockholm is a beautiful city to explore with public
                  transportation and walking, so we recommend using those
                  options if possible.
                </p>
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
