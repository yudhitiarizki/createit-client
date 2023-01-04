import React from 'react';
import Footer from '../components/General/Footer';
import HomePage from '../components/Home/HomePage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Home = () => {
    return (
        <>
          <HomePage />
          <Footer />
          <ToastContainer />
        </>
  );
};

export default Home;