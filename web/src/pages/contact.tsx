import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { convertToBgImage } from 'gbimage-bridge';
import { Parallax } from 'react-scroll-parallax';
import React, { useRef, useState } from 'react';
import { MdClose } from 'react-icons/md';
import SEO from '../components/Seo';
import Spinner from '../components/Spinner';
import * as styles from './contact.module.scss';

interface FormData {
  [key: string]: string;
  'form-name': string;
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sendingForm, setSendingForm] = useState(false);
  const [formErrored, setFormErrored] = useState(false);
  const [formSentMessageVisible, setFormSentMessageVisible] = useState(false);
  const [formMessageDelayedOpen, setFormMessageDelayedOpen] = useState(false);
  const formMessageRef = useRef(null);

  const data = useStaticQuery(graphql`
    {
      backgroundContact: file(
        relativePath: { eq: "backgrounds/contact_bg.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            quality: 80
            breakpoints: [800, 1200, 1600, 2500, 4032]
            layout: FULL_WIDTH
          )
        }
      }
    }
  `);

  const backgroundContact = convertToBgImage(
    data.backgroundContact.childImageSharp.gatsbyImageData,
  );

  const encodeForm = (data: FormData): string => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

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
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm({ 'form-name': 'contact', name, email, message }),
      });
      console.log(res);
      if (res.status === 200) {
        setFormSentMessageVisible(true);
        setTimeout(() => {
          setFormMessageDelayedOpen(true);
        }, 70);
        await setTimeout(() => {
          handleClose();
        }, 3000);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setFormErrored(true);
        setFormSentMessageVisible(true);
        setTimeout(() => {
          setFormMessageDelayedOpen(true);
        }, 70);
        await setTimeout(() => {
          handleClose();
        }, 3000);
      }
    } catch (error) {
      console.error(error);
      setSendingForm(false);
      setFormErrored(true);
    }
    setSendingForm(false);
  };

  return (
    <>
      <SEO title="Contact us | Life in HD" />
      <BackgroundImage
        Tag={`section`}
        id={`hero`}
        className={styles.background}
        {...backgroundContact}
        onClick={async (e: React.MouseEvent<HTMLElement>): Promise<void> => {
          console.log(e);
          if (
            formSentMessageVisible &&
            formMessageRef.current !== e.currentTarget
          ) {
            console.log(e.currentTarget);
            console.log(formMessageRef.current);
            await handleClose();
          }
        }}
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
              <h1 className={styles.heroHeading}>Contact us</h1>
            </div>
          </Parallax>
          <Parallax translateY={['150px', '50px']}>
            <form
              name="contact"
              method="post"
              onSubmit={handleSubmit}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className={`${styles.form} ${styles.mAuto}`}
            >
              <div className={styles.inputGroup}>
                <label htmlFor="name">Your Name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={name}
                  onChange={(e: React.FormEvent<HTMLInputElement>): void =>
                    setName(e.currentTarget.value)
                  }
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Your Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e: React.FormEvent<HTMLInputElement>): void =>
                    setEmail(e.currentTarget.value)
                  }
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Message:</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  value={message}
                  rows={10}
                  onChange={(e: React.FormEvent<HTMLTextAreaElement>): void =>
                    setMessage(e.currentTarget.value)
                  }
                />
              </div>
              <button
                className={styles.button}
                type="submit"
                disabled={sendingForm || formSentMessageVisible}
              >
                {sendingForm || formSentMessageVisible ? <Spinner /> : 'Submit'}
              </button>
              <input type="hidden" name="form-name" value="contact" />
            </form>
          </Parallax>
        </div>
      </BackgroundImage>
    </>
  );
};

export default ContactPage;
