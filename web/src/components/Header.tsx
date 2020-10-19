import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Menu from './Menu';
import useWindowSize from '../../utils/useWindowSize';
import styles from './Header.module.scss';

interface Props {
  setMenuOpen: () => void;
}

const Header: React.FC<Props> = ({ setMenuOpen }) => {
  const [width, setWidth] = useState(768);

  const handleResize = (): void => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('resize', handleResize);
      handleResize();
    } else {
      window.removeEventListener('resize', handleResize);
    }
  });

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

  const { fluid } = data.placeholderImage.childImageSharp;

  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        <Img fluid={fluid} />
      </Link>
      {width > 767 ? (
        <Menu />
      ) : (
        <button onClick={(): void => setMenuOpen(!menuOpen)} type="button">
          <GiHamburgerMenu className={styles.menuIcon} />
        </button>
      )}
    </header>
  );
};

export default Header;
