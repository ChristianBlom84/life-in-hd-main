import React from 'react';
import { Link } from 'gatsby';
import styles from './menu.module.scss';

const Menu: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <Link to="#">Services</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="#">About</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="#">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
