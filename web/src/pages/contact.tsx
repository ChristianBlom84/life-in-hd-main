import React, { useState } from 'react';
import SEO from '../components/Seo';
import styles from './contact.module.scss';

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

  const encodeForm = (data: FormData): string => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm({ 'form-name': 'contact', name, email, message }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SEO title="Contact us | Life in HD" />
      <section className={styles.section}>
        <div className={styles.hero}>
          <h1 className={styles.h1}>Contact us</h1>
          <p>
            Use the form below to contact us and we&apos;ll get back to you as
            soon as we can.
          </p>
        </div>
        <div className={styles.formContainer}>
          <form
            name="contact"
            method="post"
            onSubmit={handleSubmit}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className={styles.form}
          >
            <div className={styles.inputGroup}>
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                name="name"
                id="name"
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
                value={email}
                onChange={(e: React.FormEvent<HTMLInputElement>): void =>
                  setEmail(e.currentTarget.value)
                }
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Message:</label>
              <input
                type="text"
                name="message"
                id="message"
                value={message}
                onChange={(e: React.FormEvent<HTMLInputElement>): void =>
                  setMessage(e.currentTarget.value)
                }
              />
            </div>
            <button className={styles.button} type="submit">
              Submit
            </button>
            <input type="hidden" name="form-name" value="contact" />
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
