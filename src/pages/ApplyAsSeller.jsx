import React from 'react';
import Footer from '../components/General/Footer';
import ApplySeller from '../components/ApplyAsSeller/ApplySeller';
import { ToastContainer } from 'react-toastify';

const ApplyAsSeller = () => {
    return (
        <>
            <ApplySeller />
            <Footer />
            <ToastContainer />
        </>
    );
};

export default ApplyAsSeller;