import React from 'react';
import Footer from '../components/General/Footer';
import OrderDetailUser from '../components/UserOrder/OrderDetailUser';
import { ToastContainer } from 'react-toastify';

const UserOrderDetail = () => {
    return (
        <>
            <OrderDetailUser />
            <Footer />
            <ToastContainer />
        </>
    )
};

export default UserOrderDetail;