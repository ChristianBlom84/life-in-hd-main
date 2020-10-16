import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Menu from './Menu';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "life-in-hd-banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  console.log(data);

  const { fluid } = data.placeholderImage.childImageSharp;

  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        <Img fluid={fluid} />
      </Link>
      <Menu />
    </header>
  );
};

export default Header;
