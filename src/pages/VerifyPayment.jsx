import React from 'react';
import PaymentSummary from '../components/VerifyPayment/PaymentSummary';
import '../components/Services/DetailService.css';
import Navbar from '../components/General/Navbar';
import Footer from '../components/General/Footer';

const VerifyPayment = () => {
    return (
        <div>
            <div className="detailservice-navbar">
                <Navbar />
            </div>
            <PaymentSummary />
            <Footer />
        </div>
    )
};

export default VerifyPayment;