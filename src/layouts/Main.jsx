import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: 'max-content 1fr',
      }}>
      <div
        style={{
          gridRow: '1/2',
        }}>
        <Navbar />
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
