import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '../UI/Container/Container';
import Button from '../UI/Button/Button';
import ServicesCard from './ServicesCard';
import styles from './Services.module.css';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await axios.get('services.json');
      setServices(data.data);
    })();
  }, []);

  return (
    <Container className={styles.services}>
      <h2 className="primary-title">Service</h2>
      <p className="secondary-title">Our Service Area</p>
      <p className="body-text">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
      </p>
      <section className={styles.grid}>
        {services.map(service => (
          <ServicesCard key={service._id} service={service} />
        ))}
      </section>
      <Button variant={'secondary'}>More Services</Button>
    </Container>
  );
};

export default Services;
