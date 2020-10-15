import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';

const Menu: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menuList}>
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
