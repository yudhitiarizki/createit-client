import React from 'react';
import { useSelector } from 'react-redux';

import SellerNewOrderDetail from './SellerNewOrderDetail';

import MessageQuestion from '../../asset/Navbar/message-question.svg';
import loader from '../../asset/Login/loader.gif';

import './SellerIncomingOrder.css';
import '../Services/DetailService.css';

const getTime = (data) => {
    const date = new Date(data);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };

    return date.toLocaleDateString('id-ID', options);
}

const SellerIncomingOrder = ({ approveLoading, idLoad, handleDetail, handleApproved, hideDetail }) => {
    const { order } = useSelector(state => state.order);

    return (
        <div>
            <div className="navbar-text1">
                <div className="nav-link">Seller</div>
                <i className='bx bx-chevron-right'></i>
                <div>Incoming Order List</div>
            </div>
            <div className='incomingorder-cntr'>
                <SellerNewOrderDetail hideDetail={hideDetail} />
                <div className='newordersellerlist'>
                    <div className='newordrlist-hdr'>Manage Request</div>
                    <div className='newordrlist-cntr'>
                        <div className='newordrlist-inside'>
                            {order.map((order) => (
                                <div key={`id-${order.orderId}`} className='newordr-item-cntr'>
                                    {(idLoad === order.orderId) ?
                                        (approveLoading ?
                                            <img src={loader} alt={1} className='Loading approve-loading'></img>
                                            :
                                            null
                                        ) :
                                        <>
                                            <div className='newordr-item-left'>
                                                <img src={MessageQuestion} alt={1}></img>
                                                <div className='second-left-item'>
                                                    <div className='second-leftitem-title'>New Pending Order</div>
                                                    <div>Buyer's Name: {order.firstName} {order.lastName}</div>
                                                    <div>{getTime(order.createdAt)}</div>
                                                </div>
                                            </div>
                                            <div className='newordr-item-right'>
                                                <div className='approve-btn-seller-order' onClick={() => handleApproved(order.orderId, order.userId)}>Approve</div>
                                                <div className='showdetail-btn' onClick={() => { handleDetail(order) }}><i className='bx bx-right-arrow-alt'></i></div>
                                            </div>
                                        </>
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SellerIncomingOrder;