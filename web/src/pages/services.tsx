import React from 'react';
import SEO from '../components/Seo';

import styles from './services.module.scss';

const ServicesPage: React.FC = () => (
  <>
    <SEO title="Human Design Services | Life in HD" />
    <section className={styles.hero}>
      <h1>
        <span>Human</span>
        <span>Design</span>
        <span>Services</span>
      </h1>
      <p>
        Here you will find information about Human Design readings, courses and
        sessions we offer.
      </p>
    </section>
    <section className={styles.content}>
      <h2>Readings and sessions</h2>
      <h3>Foundation reading with Christian</h3>
      <p>
        A foundation reading is the natural place to start your Human Design
        experiment. You will learn the elemental aspects and challenges of your
        particular design and become familiar with the core concepts of Type,
        Strategy and Inner Authority.
      </p>
      <h3>Manifestor session with Milla</h3>
      <p>
        Do you have a Manifestor in your life? Are you struggling with
        communication and wondering how to best deal with this person? I’m
        inviting you to reach out for a Manifestor session with me, where you
        can ask all your questions and I’ll give you an inside aura perspective.
        To be clear: I will not be speaking from anything other than my direct
        experience and is therefore unable, and unwilling, to answer on someone
        else’s behalf.
      </p>
    </section>
  </>
);

export default ServicesPage;
