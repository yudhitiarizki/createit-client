import React from 'react';
import Footer from '../components/General/Footer';
import UserOrders from '../components/UserOrder/UserOrders';
import { ToastContainer } from 'react-toastify';

const UserOrder = () => {
    return (
        <>
          <UserOrders />
          <Footer />
          <ToastContainer />
        </>
  );
};

export default UserOrder;