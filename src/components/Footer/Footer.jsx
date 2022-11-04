import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineGoogle,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from 'react-icons/ai';
import Container from '../UI/Container/Container';
import styles from './Footer.module.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.grid}>
        <div className={styles.column}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="" />
          </Link>
          <p className={styles.text}>
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial .
          </p>
          <ul className={styles.socials}>
            <li className={styles.socialLink}>
              <Link to="google.com">
                <AiOutlineGoogle />
              </Link>
            </li>
            <li className={styles.socialLink}>
              <Link to="twitter.com">
                <AiOutlineTwitter />
              </Link>
            </li>
            <li className={styles.socialLink}>
              <Link to="instagram.com">
                <AiOutlineInstagram />
              </Link>
            </li>
            <li className={styles.socialLink}>
              <Link to="linkedin.com">
                <AiOutlineLinkedin />
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.title}>About</h3>
          <ul className={styles.links}>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.title}>Company</h3>
          <ul className={styles.links}>
            <li>
              <Link to="/faq">Why genius car?</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.title}>Support</h3>
          <ul className={styles.links}>
            <li>
              <Link to="/support">Support Center</Link>
            </li>
            <li>
              <Link to="/accessability">Accessability</Link>
            </li>
            <li>
              <Link to="/feedback">Feedback</Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
