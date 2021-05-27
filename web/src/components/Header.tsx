import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React, { useState, useEffect, useRef } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Menu from './Menu';
import SideMenu from './SideMenu';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const [width, setWidth] = useState(768);

  const handleResize = (): void => {
    setWidth(window.innerWidth);
  };

  const handleClose = (): void => {
    if (menuOpen) {
      setMenuClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setMenuClosing(false);
      }, 200);
    } else {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('resize', handleResize);
      handleResize();
    }
  }, []);

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
        <Img fluid={fluid} alt="" />
      </Link>
      {width > 767 ? (
        <Menu />
      ) : (
        <button onClick={(): void => setMenuOpen(!menuOpen)} type="button">
          <GiHamburgerMenu className={styles.menuIcon} />
        </button>
      )}
      {menuOpen && (
        <SideMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          menuClosing={menuClosing}
          handleClose={handleClose}
        />
      )}
    </header>
  );
};

export default Header;
