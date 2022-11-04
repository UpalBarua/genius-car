import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 1fr',
      }}>
      <div>
        <Navbar />
        <Outlet />
      </div>
      <div
        style={{
          gridRow: '2/-1',
        }}>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
