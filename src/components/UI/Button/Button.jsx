import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, type, variant, onClick }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      type={type || 'button'}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
