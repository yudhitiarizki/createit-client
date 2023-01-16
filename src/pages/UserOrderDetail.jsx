import React from 'react';
import Footer from '../components/General/Footer';
import OrderDetailUser from '../components/UserOrder/OrderDetailUser';

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