import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { BiX, BiCaretDown, BiCaretUp } from 'react-icons/bi';
import styles from './SideMenu.module.scss';
import HumanDesignPage from '../pages/human-design';

interface Props {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  menuClosing: boolean;
  handleClose: () => void;
}

const Menu: React.FC<Props> = ({
  menuOpen,
  setMenuOpen,
  menuClosing,
  handleClose,
}) => {
  const [delayedOpen, setDelayedOpen] = useState(false);
  const [delayedClosing, setDelayedClosing] = useState(false);
  const [humanDesignExpanded, setHumanDesignExpanded] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      setTimeout(() => {
        setDelayedOpen(true);
      }, 20);
    }
  }, [menuOpen]);

  return (
    <>
      <div
        className={`${styles.overlay} ${
          delayedOpen && menuOpen && !menuClosing && styles.overlayOpen
        }`}
        onClick={handleClose}
        onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>): void => {
          if (e.key === 'Escape') {
            handleClose();
          }
        }}
        role="button"
        tabIndex={0}
      ></div>
      <nav
        className={`${styles.nav} ${
          delayedOpen && menuOpen && !menuClosing && styles.open
        }`}
      >
        <button
          className={styles.closeButton}
          type="button"
          onClick={handleClose}
        >
          <BiX />
        </button>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link to="/human-design" onClick={handleClose}>
              Human Design
            </Link>
            <button
              className={styles.expandButton}
              type="button"
              onClick={(): void => setHumanDesignExpanded(!humanDesignExpanded)}
            >
              {humanDesignExpanded ? <BiCaretUp /> : <BiCaretDown />}
            </button>
          </li>
          <li
            aria-hidden={!humanDesignExpanded}
            className={`${styles.humanDesignMenu} ${
              !humanDesignExpanded ? styles.hidden : ''
            }`}
          >
            <ul>
              <li>
                <Link to="/human-design/four-types" onClick={handleClose}>
                  The Four Types
                </Link>
              </li>
              <li>
                <Link to="/human-design/inner-authority" onClick={handleClose}>
                  Inner Authority
                </Link>
              </li>
              <li>
                <Link to="/human-design/nine-centers" onClick={handleClose}>
                  The Nine Centers
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.menuItem}>
            <Link to="/services" onClick={handleClose}>
              Services
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/about" onClick={handleClose}>
              About
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/contact" onClick={handleClose}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
