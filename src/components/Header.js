"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import styles from "./Header.module.css";

// Define navigation data
const navigationData = [
  {
    title: '',
    href: '/', 
    subItems: []
  }
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const navRef = useRef();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      (navRef.current && !navRef.current.contains(event.target)) 
    ) {
      setActiveNavItem(null);
    }
  };

  const handleSubItemClick = () => {
    setActiveNavItem(null); 
  };

  useEffect(() => {
    const updateView = () => {
      setIsMobileView(window.innerWidth <= 970);
    };

    updateView();
    window.addEventListener('resize', updateView);

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', updateView);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.mainHeaderContainer}>
        <div className={styles.logoNavContainer}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <Image height="40" width="200" className={styles.logoImage} src="/FirstDecimalLogo.png" alt="FirstDecimal logo" />
            </Link>
          </div>
          <nav ref={navRef} className={`${styles.navbar} ${menuOpen ? styles.navOpen : ''}`}>
            <ul>
              {navigationData.map((navItem, index) => (
                <NavItem
                  key={index}
                  title={navItem.title}
                  href={navItem.href}
                  activeNavItem={activeNavItem}
                  setActiveNavItem={setActiveNavItem}
                  subItems={navItem.subItems}
                  handleSubItemClick={handleSubItemClick}
                  isMobileView={isMobileView}
                />
              ))}
            </ul>
          </nav>
          <div className={styles.rightMenu}>
            <a href="tel:448450946180">
              <Image src="/phoneIcon.png" width={20} height={20} alt="Phone Icon"/>
              Contact us
            </a>
          </div>
          <button className={styles.menuToggle} aria-label="Toggle navigation" onClick={toggleMenu}>
            <span className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}></span>
          </button>
        </div>
        </div>
    </header>
  );
}

function NavItem({ title, href, activeNavItem, setActiveNavItem, subItems, handleSubItemClick, isMobileView }) {
  const handleMouseEnter = () => {
    if (!isMobileView) {
      setActiveNavItem(title.toLowerCase());
    }
  };

  const handleMouseLeave = () => {
    if (!isMobileView) {
      setActiveNavItem(null);
    }
  };

  const handleClick = () => {
    if (isMobileView) {
      setActiveNavItem(activeNavItem === title.toLowerCase() ? null : title.toLowerCase());
    }
  };

  return (
    <li
      className={`${activeNavItem === title.toLowerCase() ? styles.active : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className={styles.navItemTitleContainer}>
        <Link className={styles.mainNavItem} href={href}>{title}</Link>
      </div>
      {activeNavItem === title.toLowerCase() && (
        <ul className={styles.subMenu}>
          {subItems.map((item, index) => (
            <li key={index} onClick={handleSubItemClick}>
              <Link href={item.href}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}