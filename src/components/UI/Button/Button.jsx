import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, className, type, variant, onClick }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      type={type || 'button'}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
