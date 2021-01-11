import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './Header';
import Footer from './Footer';
import './Layout.scss';
import 'typeface-open-sans';
import 'typeface-montserrat';

const Layout: React.FC<React.ReactNode> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ParallaxProvider>
      <div id="life-in-hd-wrapper">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </ParallaxProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
