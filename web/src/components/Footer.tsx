import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { SiInstagram, SiFacebook } from 'react-icons/si';
import * as styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const data = useStaticQuery(graphql`
    {
      certificate: file(
        relativePath: { eq: "icons/certified-pro-transparent.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 200, placeholder: NONE, layout: CONSTRAINED)
        }
      }
    }
  `);

  const certificate = data.certificate.childImageSharp.gatsbyImageData;

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
      <GatsbyImage
        image={certificate}
        alt="Certified Human Design Professional"
        className={styles.certificate}
        style={{ position: 'absolute' }}
      />
    </footer>
  );
};

export default Footer;
