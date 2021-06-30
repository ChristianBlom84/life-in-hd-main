import React, { useState } from 'react';
import SEO from '../components/Seo';
import Spinner from '../components/Spinner';
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
  const [sendingForm, setSendingForm] = useState(false);

  const encodeForm = (data: FormData): string => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setSendingForm(true);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm({ 'form-name': 'contact', name, email, message }),
      });
    } catch (error) {
      console.error(error);
      setSendingForm(false);
    }
    setSendingForm(false);
  };

  return (
    <>
      <SEO title="Contact us" />
      <section className={styles.section}>
        <div className="hero">
          <h1>Contact us</h1>
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
              disabled={sendingForm}
            >
              {sendingForm ? <Spinner /> : 'Submit'}
            </button>
            <input type="hidden" name="form-name" value="contact" />
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
