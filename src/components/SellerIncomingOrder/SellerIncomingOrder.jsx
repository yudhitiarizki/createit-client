import './SellerIncomingOrder.css';
import '../Services/DetailService.css';
import React, { useEffect } from 'react';
import Navbar from '../General/Navbar';
import MessageQuestion from '../../asset/Navbar/message-question.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getNewOrderDetail } from '../../redux/actions/NewOrderDetailSeller';
import SellerNewOrderDetail from './SellerNewOrderDetail';
import { getOrderNew, patchOrderWorking } from '../../redux/actions/order';
import { ToastContainer } from 'react-toastify';
import { Navigate } from 'react-router-dom';

const SellerIncomingOrder = () => {
    const dispatch = useDispatch();

    const { order } = useSelector(state => state.order);
    const { role, isLoggedIn, isSeller, isVerified } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(getOrderNew())
    }, [dispatch]);

    if(isLoggedIn) {
        if (!(role === 2 && isVerified && isSeller)) { return <Navigate to='/' />}
    } else {return <Navigate to='/' />}

    const handleDetail = (order) => {
        dispatch(getNewOrderDetail(order))
    };

    const handleApproved = (orderId) => {
        dispatch(patchOrderWorking(orderId)).then( () => {
            dispatch(getOrderNew())
        })
    };

    return (
        <div>
            <div className="detailservice-navbar">
                <Navbar />
            </div>
            <div className="navbar-text1">
                <div className="nav-link">Seller</div>
                <i className='bx bx-chevron-right'></i>
                <div>Incoming Order List</div>
            </div>
            <div className='incomingorder-cntr'>
                <SellerNewOrderDetail />
                <div className='newordersellerlist'>
                    <div className='newordrlist-hdr'>Manage Request</div>
                    <div className='newordrlist-cntr'>
                        <div className='newordrlist-inside'>
                            {order.map((order) => (
                                <div key={`id-${order.orderId}`} className='newordr-item-cntr'>
                                    <div className='newordr-item-left'>
                                        <img src={MessageQuestion} alt=''></img>
                                        <div className='second-left-item'>
                                            <div className='second-leftitem-title'>New Pending Order</div>
                                            <div>Buyer's Name: {order.firstName} {order.lastName}</div>
                                            <div>{order.createdAt}</div>
                                        </div>
                                    </div>
                                    <div className='newordr-item-right'>
                                        <div className='approve-btn-seller-order' onClick={() => handleApproved(order.orderId)}>Approve</div>
                                        <div className='showdetail-btn' onClick={() => { handleDetail(order) }}><i className='bx bx-right-arrow-alt'></i></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
};

export default SellerIncomingOrder;