import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import styles from './ServicesCard.module.css';

const ServicesCard = ({ service }) => {
  const { img, price, title } = service;
  return (
    <div className={styles.card}>
      <img className={styles.image} src={img} alt={title} />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.footer}>
        <p className={styles.price}>Price: ${price}</p>
        <Link to={`/services/${title}`}>
          <AiOutlineArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
