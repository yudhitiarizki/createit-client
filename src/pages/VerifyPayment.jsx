import React from 'react';
import PaymentSummary from '../components/VerifyPayment/PaymentSummary';
import '../components/Services/DetailService.css';
import Navbar from '../components/General/Navbar';
import Footer from '../components/General/Footer';
import { useSelector } from 'react-redux';
import '../components/VerifyPayment/PaymentSummary.css';

const VerifyPayment = () => {

    const payment = useSelector(state => state.payment);

    return (
        <div>
            <div className="detailservice-navbar">
                <Navbar />
            </div>
            { payment.order_id ? (
                <PaymentSummary data={payment} />
            ) : (
                <div className='payment-notfound'>
                    <h4>Please Select your order first!</h4>
                </div>
            ) }
            <Footer />
        </div>
    )
};

export default VerifyPayment;