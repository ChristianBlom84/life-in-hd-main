import React, { useState } from 'react';
import SEO from '../components/Seo';
import styles from './contact.module.scss';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      <SEO title="Contact us | Life in HD" />
      <section>
        <h1>Contact us</h1>
        <p>
          Use the form below to contact us and we&apos;ll get back to you as
          soon as we can.
        </p>
        <div>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
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
            <input type="hidden" name="form-name" value="contact" />
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
