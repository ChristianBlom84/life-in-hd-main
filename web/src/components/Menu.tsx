import React, { useState } from 'react';
import { Link } from 'gatsby';
import * as styles from './Menu.module.scss';

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
          <Link
            to="/human-design"
            aria-label="Learn more about the Human Design system."
          >
            Human Design
          </Link>
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
          <Link
            to="/immersion"
            aria-label="More information about our Human Design immersions."
          >
            Immersion
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link
            to="/services"
            aria-label="Read more about our Human Design services."
          >
            Services
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/about" aria-label="Learn more about who we are.">
            About
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/contact" aria-label="Contact us.">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
