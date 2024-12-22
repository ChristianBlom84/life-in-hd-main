import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Parallax } from 'react-scroll-parallax';
import Img from 'gatsby-image';
import SEO from '../components/Seo';
import styles from './about.module.scss';

const AboutPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      backgroundImmersion: file(
        relativePath: { eq: "backgrounds/immersion_bg.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 80, srcSetBreakpoints: [800, 1200, 1600, 2500, 4032]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const backgroundImmersion = data.backgroundImmersion.childImageSharp.fluid;

  return (
    <>
      <SEO title="Human Design Immersion | Life in HD" />
      <BackgroundImage
        Tag={`section`}
        id={`hero`}
        className={styles.background}
        fluid={backgroundImmersion}
      >
        <div className={styles.heroOverlay}>
          <Parallax y={['0px', '50px']}>
            <div className={styles.heroText}>
              <h1 className={styles.heroHeading}>Human Design Immersions</h1>
            </div>
          </Parallax>
          <Parallax y={['150px', '50px']}>
            <div className={`${styles.contentOverlay} ${styles.mAuto}`}>
              <h2>What is an Immersion?</h2>
              <p>
                The Human Design Immersion, as brought by Mary Ann Winiger, is a
                call to fully live your Design. It’s not about concepts,
                theories, or mental understanding — it’s about aligning with
                your Strategy and Authority and allowing your inner GPS to guide
                you as yourself. It’s a chance to strip away conditioning,
                resistance, and the need to &quot;figure it out&quot;, so you
                can discover what happens when you align with your Design.
              </p>
              <p>
                With Mary Ann Winiger’s full support and blessing, I am honored
                to facilitate this process, creating a space for radical
                observation, experimentation, and integration. This isn’t a
                program to fix or teach you something new—it’s a profound
                experience where you can simply be, observe, and learn to trust
                yourself at a cellular level.
              </p>
              <p>
                Through shared exploration, practical exercises, and deep
                support, the Immersion becomes a container for transformation.
                Here, you’ll explore what it truly means to live in alignment
                and navigate life through the simplicity of Strategy and
                Authority.
              </p>
              <p>
                This is your invitation to step into the experiment, to
                experience life as yourself, and to trust your Design.
              </p>
              <p> Are you ready?</p>
            </div>
          </Parallax>
          <Parallax y={['150px', '75px']}>
            <div className={`${styles.contentOverlay} ${styles.mAuto}`}>
              <h2>The Inaugural Human Design Immersion on Gran Canaria</h2>
              <p>
                Price:
                <br />
                Early Bird - <b>€300</b>
                <br />
                After February 1st - <b>€400</b>
              </p>
              <p>
                Dates: February 21st - 23rd Times:
                <br />
                Friday: 14:00 - 17:00
                <br />
                Saturday & Sunday: 10:00 - 17:00
              </p>
              <p>
                Venue: Pranapure
                <br />
                Address: Av. Touroperador Kuoni, 25
                <br />
                35100 Maspalomas
              </p>
              <p>
                The closest place to stay is here{' '}
                <a
                  href="https://maspalomaslagocs.com/en/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://maspalomaslagocs.com/en/
                </a>{' '}
                (no affiliation).
              </p>
              <p>
                Register via our <Link to="/contact">contact form.</Link>
              </p>
              <p>
                We need your name and, if you know, your Type and Inner
                Authority. If you don’t know, you can send your birth data
                (date, time and location).
              </p>
              <p>
                Payment via PayPal or bank transfer, please state which in your
                registration email.
              </p>
            </div>
          </Parallax>
        </div>
      </BackgroundImage>
    </>
  );
};

export default AboutPage;
