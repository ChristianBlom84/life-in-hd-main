import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Menu from './Menu';
import SideMenu from './SideMenu';
import * as styles from './Header.module.scss';

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
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
    }
  }, []);

  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "life-in-hd-banner.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
    }
  `);

  const logo = data.logo.childImageSharp.gatsbyImageData;

  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        <GatsbyImage image={logo} alt="" />
      </Link>
      {width > 970 ? (
        <Menu />
      ) : (
        <button
          className={styles.menuButton}
          onClick={(): void => setMenuOpen(!menuOpen)}
          type="button"
        >
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
