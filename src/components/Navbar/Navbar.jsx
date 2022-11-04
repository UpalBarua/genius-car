import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsHandbag, BsSearch } from 'react-icons/bs';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Container from '../UI/Container/Container';
import Button from '../UI/Button/Button';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavOpenToggle = () => {
    setIsNavOpen(prevIsNavOpen => !prevIsNavOpen);
  };

  return (
    <Container>
      <nav className={styles.navbar}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="" />
        </Link>

        <ul className={styles.menu} data-is-open={isNavOpen}>
          <li className={styles.menuItem}>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        <div className={styles.buttonGroup}>
          <Button variant={'square'}>
            <BsHandbag />
          </Button>
          <Button variant={'square'}>
            <BsSearch />
          </Button>
          <Button variant={'secondary'}>Appointment</Button>
          <Button
            className={styles.toggle}
            variant={'square'}
            onClick={handleNavOpenToggle}>
            {isNavOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </Button>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
