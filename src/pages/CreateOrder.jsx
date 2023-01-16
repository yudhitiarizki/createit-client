import React, { useState } from 'react';
import '../components/CreateOrder/Order.css';
import OrderData from '../components/CreateOrder/OrderData';
import OrderSummary from '../components/CreateOrder/OrderSummary';
import { Link } from 'react-router-dom';
import Footer from '../components/General/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { createOrder } from '../redux/actions/order';

const CreateOrder = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { state } = location;
    const { isLoggedIn, user } = useSelector(state => state.auth);
    const { packageId } = state.package;

    const [paymentMethod, setpaymentMethod] = useState('');
    const [bankName, setbankName] = useState('');
    const [note, setNote] = useState('');

    if ( !isLoggedIn ) {
        navigate('/login');
    };

    const handlePay = (pay, bank) => {
        setpaymentMethod(pay);
        setbankName(bank);
    };

    const handleNote = (note) => {
        setNote(note)
    }

    const handleOrder = () => {
        dispatch(createOrder(packageId, note, paymentMethod, bankName)).then(() => {
            navigate('/verifypayment')
        });
    }

    return (
        <div className='order-create-container'>
            <div className="order-create-path">
                <div className="path">
                    <Link to='/' className="nav-link">Home</Link>
                    <i className='bx bx-chevron-right'></i>
                    <div>Service List</div>
                    <i className='bx bx-chevron-right'></i>
                    <div>Service Details</div>
                    <i className='bx bx-chevron-right'></i>
                    <div>Order</div>
                </div>
            </div>
            { state ? (
                <div className="order-create-list">
                    <OrderData func={handlePay} user={user} funcNote={handleNote} />
                    <OrderSummary data={state} funcOrder={handleOrder}/>
                </div>
            ) : (
                <div className="order-notfound">
                    <div className="order-notfound-data">
                        <h5>Please select package first!</h5>
                    </div>
                </div>
            ) }
            
            <Footer />
        </div>
    );
};
export default CreateOrder;