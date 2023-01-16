import React from 'react';
import '../components/CreateOrder/Order.css';
import Footer from '../components/General/Footer';
import { useSelector } from 'react-redux';
import NewOrder from '../components/CreateOrder/NewOrder';
import { useNavigate } from 'react-router';

const CreateOrder = () => {
    const navigate = useNavigate();
    const { isLoggedIn } = useSelector(state => state.auth);

    if ( !isLoggedIn ) {
        navigate('/login');
    };

    return (
        <div className='order-create-container'>
            <NewOrder />
            <Footer />
        </div>
    );
};
export default CreateOrder;