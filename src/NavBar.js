import React, { useState } from 'react'
import styles from './NavBar.module.css'
import NavList from './NavList'
import { AiOutlineMenu } from 'react-icons/ai'

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = event => {
    event.preventDefault();
    setShowMenu(current => !current);
  };

  const menuClasses = `${styles.menuDropdown} ${showMenu ? styles.visible : styles.invisible}`;

  return (
    <section>
      <div className={styles.containerMenuNav}>
        <nav className={styles.navbar}>
          <h1 className={styles.logo}>LOGO</h1>
          <ul className={styles.navList}>
            <NavList />
          </ul>
          <AiOutlineMenu onClick={handleClick} className={styles.menuIcon} />
        </nav>
      </div>
      <div className={menuClasses}>
        <NavList />
      </div>
    </section>
  );
}