import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsLinkedin, BsGoogle } from 'react-icons/bs';
import useFormValidation from '../../hooks/useFormValidation/useFormValidation';
import Container from '../UI/Container/Container';
import Button from '../UI/Button/Button';
import validateName from '../../hooks/useFormValidation/validateName';
import validateEmail from '../../hooks/useFormValidation/validateEmail';
import validatePassword from '../../hooks/useFormValidation/validatePassword';
import styles from './SignUp.module.css';
import loginImg from '../../assets/images/login/login.svg';

const SignUp = () => {
  const {
    inputValue: nameValue,
    inputError: nameError,
    handleInputChange: handleNameChange,
    handleInputTouch: handleNameTouch,
  } = useFormValidation(validateName);

  const {
    inputValue: emailValue,
    inputError: emailError,
    handleInputChange: handleEmailChange,
    handleInputTouch: handleEmailTouch,
  } = useFormValidation(validateEmail);

  const {
    inputValue: passwordValue,
    inputError: passwordError,
    handleInputChange: handlePasswordChange,
    handleInputTouch: handlePasswordTouch,
  } = useFormValidation(validatePassword);

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
            <input
              className="input"
              type="text"
              onChange={handleNameChange}
              onBlur={handleNameTouch}
            />
            {nameError && <p className="error-message">{nameError}</p>}
          </div>

          <div className="form-container">
            <label className="label">Email</label>
            <input
              className="input"
              type="text"
              onChange={handleEmailChange}
              onBlur={handleEmailTouch}
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>

          <div className="form-container">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              onChange={handlePasswordChange}
              onBlur={handlePasswordTouch}
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
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
