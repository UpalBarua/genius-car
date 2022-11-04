import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsLinkedin, BsGoogle } from 'react-icons/bs';
import Container from '../UI/Container/Container';
import Button from '../UI/Button/Button';
import styles from './SignUp.module.css';
import loginImg from '../../assets/images/login/login.svg';

const SignUp = () => {
  return (
    <Container className={styles.grid}>
      <div className={styles.column}>
        <img src={loginImg} alt="" />
      </div>

      <div className={styles.column}>
        <h2 className="form-title">Sign Up</h2>

        <form className="form">
          <div className="form-container">
            <label className="label">Name</label>
            <input className="input" type="text" />
            {/* <p className="error-message">Abir bolod</p> */}
          </div>

          <div className="form-container">
            <label className="label">Email</label>
            <input className="input" type="text" />
            {/* <p className="error-message">Abir bolod</p> */}
          </div>

          <div className="form-container">
            <label className="label">Password</label>
            <input className="input" type="password" />
            {/* <p className="error-message">Abir bolod</p> */}
          </div>

          <Button type="submit" variant="primary">
            Sign Up
          </Button>
        </form>

        <div className={styles.footer}>
          <p>Or Sign Up with</p>
          <ul className={styles.signupOptions}>
            <li className={styles.signupOption}>
              <Button variant="rounded">
                <BsFacebook />
              </Button>
            </li>

            <li className={styles.signupOption}>
              <Button variant="rounded">
                <BsLinkedin />
              </Button>
            </li>

            <li className={styles.signupOption}>
              <Button variant="rounded">
                <BsGoogle />
              </Button>
            </li>
          </ul>
          <p className={styles.text}>
            Already have an account? <Link to="/">Login</Link>{' '}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
