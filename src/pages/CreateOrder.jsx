import React from 'react';
import Navbar from '../components/General/Navbar';
import '../components/CreateOrder/Order.css';
import OrderData from '../components/CreateOrder/OrderData';
import OrderSummary from '../components/CreateOrder/OrderSummary';
import { Link } from 'react-router-dom';
import Footer from '../components/General/Footer';

const CreateOrder = () => {

    return (
        <div className='order-container'>
            <div className="order-header">
                <Navbar />
            </div>
            <div className="order-path">
                <div className="link">
                    <Link to='/' className="nav-link">Home</Link>
                    <i className='bx bx-chevron-right'></i>
                    <div>Service List</div>
                    <i className='bx bx-chevron-right'></i>
                    <div>Service Details</div>
                    <i className='bx bx-chevron-right'></i>
                    <div>Order</div>
                </div>
            </div>
            <div className="order-list">
                <OrderData />
                <OrderSummary />
            </div>
            <Footer />
        </div>
    );
};
export default CreateOrder;