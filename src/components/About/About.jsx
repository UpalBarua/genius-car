import React from 'react';
import Container from '../UI/Container/Container';
import Button from '../UI/Button/Button';
import styles from './About.module.css';
import img1 from '../../assets/images/about_us/person.jpg';
import img2 from '../../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <Container className={styles.grid}>
      <div className={styles.column}>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </div>

      <div className={styles.column}>
        <h2 className="primary-title">About Us</h2>
        <p className="secondary-title">
          We are qualified & of experience in this field
        </p>
        <p className="body-text">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{' '}
        </p>
        <p className="body-text">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{' '}
        </p>
        <Button variant={'primary'}>Get More Info</Button>
      </div>
    </Container>
  );
};

export default About;
