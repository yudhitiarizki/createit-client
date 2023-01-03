import React from 'react';
import Footer from '../components/General/Footer';
import Profile from '../components/SellerProfile/Profile';
import ServiceList from '../components/SellerProfile/ServiceList';


const SellerProfile = () => {
    return (
        <>
          <Profile />
          <ServiceList />
          <Footer />
        </>
  );
};

export default SellerProfile;