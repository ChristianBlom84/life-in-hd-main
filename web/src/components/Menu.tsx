import React, { useState } from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';

const Menu: React.FC = () => {
  const [humanDesignExpanded, setHumanDesignExpanded] = useState(false);

  return (
    <nav className={styles.nav}>
      <ul className={styles.menuList}>
        <li
          onMouseEnter={(): void => setHumanDesignExpanded(true)}
          onMouseLeave={(): void => setHumanDesignExpanded(false)}
          // onFocus={(): void => setHumanDesignExpanded(true)}
          // onBlur={(): void => setHumanDesignExpanded(false)}
          className={styles.menuItem}
        >
          <Link to="/human-design">Human Design</Link>
          <div
            aria-hidden={!humanDesignExpanded}
            className={`${styles.humanDesignMenu} ${
              !humanDesignExpanded && styles.hidden
            }`}
          >
            <Link to="/human-design/the-four-types">The Four Types</Link>
            <Link to="/human-design/inner-authority">Inner Authority</Link>
            <Link to="/human-design/the-nine-centers">The Nine Centers</Link>
          </div>
        </li>
        <li className={styles.menuItem}>
          <Link to="/immersion">Immersion</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/services">Services</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/about">About</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
