import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { SiInstagram, SiFacebook } from 'react-icons/si';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      certificate: file(
        relativePath: { eq: "icons/certified-pro-transparent.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  const certificate = data.certificate.childImageSharp.fluid;

  return (
    <footer className={styles.footer}>
      <div className={styles.leftBlock}>
        <div className={styles.socialIcons}>
          <a
            className={styles.mr4}
            href="https://www.facebook.com/Life-in-HD-102470187893894"
          >
            <SiFacebook size="1.5rem" />
          </a>
          <a href="https://www.instagram.com/lifeinhd.se/">
            <SiInstagram size="1.5rem" />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Life in HD</p>
      </div>
      <Img
        className={styles.certificate}
        style={{ position: 'absolute' }}
        fluid={certificate}
      />
    </footer>
  );
};

export default Footer;
