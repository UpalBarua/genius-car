import React from 'react';
import Button from '../UI/Button/Button';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h2 className={styles.title}>404!</h2>
      <p className={styles.text}>Page not found!</p>
      <Button variant="secondary">Go Home</Button>
    </div>
  );
};

export default NotFound;
