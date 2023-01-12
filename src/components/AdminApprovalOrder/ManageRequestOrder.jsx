import React, { useEffect } from "react";
import './AdminApproveOrder.css';
import '../Services/DetailService.css';
import Navbar from '../General/Navbar';
import MessageQuestion from '../../asset/Navbar/message-question.svg';
import { useDispatch, useSelector } from 'react-redux';
import RequestDetail from './RequestDetails';
import { getOrderApprove, patchOrderDone, setDetailOrder } from '../../redux/actions/order';
import { ToastContainer } from 'react-toastify';
import { Navigate } from "react-router-dom";

const ManageRequestOrder = () => {
    const dispatch = useDispatch();

    const { order } = useSelector(state => state.order);
    const { role, isLoggedIn } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(getOrderApprove())
    }, [dispatch]);

    if(isLoggedIn) {
        if (role !== 3) { return <Navigate to='/' />}
    } else {return <Navigate to='/' />}

    const handleDetail = (orderId, order) => {
        dispatch(setDetailOrder(orderId, order))
    };

    const handleDone = (orderId) => {
        dispatch(patchOrderDone(orderId)).then( () => {
            dispatch(getOrderApprove())
        })
    };

    return (
        <div>
            <div className="detailservice-navbar">
                <Navbar />
            </div>
            <div className="navbar-text1">
                <div className="nav-link">Home</div>
                <i className='bx bx-chevron-right'></i>
                <div>Approved Order List</div>
            </div>
            <div className='incomingorder-cntr'>
                <RequestDetail />
                <div className='newordersellerlist'>
                    <div className='newordrlist-hdr'>Manage Request</div>
                    <div className='newordrlist-cntr'>
                        <div className='newordrlist-inside'>
                            {order.map((order) => (
                                <div key={`id-${order.orderId}`} className='newordr-item-cntr'>
                                    <div className='newordr-item-left'>
                                        <img src={MessageQuestion} alt=''></img>
                                        <div className='second-left-item'>
                                            <div className='second-leftitem-title'>New Approved Order</div>
                                            <div>Username: {order.firstName} {order.lastName}</div>
                                            <div>{order.createdAt}</div>
                                        </div>
                                    </div>
                                    <div className='newordr-item-right'>
                                        <div className='approve-btn-seller-order' onClick={() => handleDone(order.orderId)}>Done</div>
                                        <div className='showdetail-btn' onClick={() => { handleDetail(order.orderId, order) }}><i className='bx bx-right-arrow-alt'></i></div>
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
}

export default ManageRequestOrder;