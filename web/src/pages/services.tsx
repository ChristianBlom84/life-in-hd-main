import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { Parallax } from 'react-scroll-parallax';
import { graphql, Link, useStaticQuery } from 'gatsby';
import SEO from '../components/Seo';
import styles from './services.module.scss';
import bgStyles from './index.module.scss';

const ServicesPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      backgroundServices: file(
        relativePath: { eq: "backgrounds/services_bg.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const backgroundServices = data.backgroundServices.childImageSharp.fluid;

  return (
    <>
      <SEO title="Human Design Services | Life in HD" />
      <section className={styles.hero}>
        <h1>
          <span>Human</span>
          <span>Design</span>
          <span>Services</span>
        </h1>
        <p>
          <p>
            Here at Life in HD we offer readings, sessions and classes to help
            you get started on your own, personal journey of living correctly as
            yourself. Often we need information, support or sharing coming from
            outside ourselves in order to trigger a change in our direction. Is
            this what you need? If this information resonates with you, we
            invite you to <Link to="contact">contact us</Link>.
          </p>
        </p>
      </section>
      <BackgroundImage
        Tag={`section`}
        id={`hero`}
        className={bgStyles.background}
        fluid={backgroundServices}
      >
        <div className={bgStyles.heroOverlay}>
          <Parallax y={[-50, 50]}>
            <div className={bgStyles.heroText}>
              <h2 className={bgStyles.heroHeading}>Readings and sessions</h2>
              <p className={bgStyles.preamble}>
                Welcome! Are you ready to start your experiment?
              </p>
            </div>
          </Parallax>
        </div>
      </BackgroundImage>
      <section className={styles.content}>
        <h2>Readings and sessions</h2>
        <h3>Foundation reading with Christian</h3>
        <p>
          A foundation reading is the natural place to start your Human Design
          experiment. You will learn the elemental aspects and challenges of
          your particular design and become familiar with the core concepts of
          Type, Strategy and Inner Authority.
        </p>
        <h3>Manifestor session with Milla</h3>
        <p>
          Do you have a Manifestor in your life? Are you struggling with
          communication and wondering how to best deal with this person? I’m
          inviting you to reach out for a Manifestor session with me, where you
          can ask all your questions and I’ll give you an inside aura
          perspective. To be clear: I will not be speaking from anything other
          than my direct experience and is therefore unable, and unwilling, to
          answer on someone else’s behalf.
        </p>
      </section>
    </>
  );
};

export default ServicesPage;
