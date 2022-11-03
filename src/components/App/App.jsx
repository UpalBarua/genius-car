import React from 'react';
import Button from '../UI/Button/Button';
import Container from '../UI/Container/Container';

function App() {
  return (
    <Container>
      <h2 className="primary-title">About Us</h2>
      <p className="secondary-title">
        We are qualified & of experience in this field
      </p>
      <p className="body-text">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable.{' '}
      </p>
      <p className="body-text">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.{' '}
      </p>
      <Button variant={'secondary'}>Appointment</Button>
    </Container>
  );
}

export default App;
