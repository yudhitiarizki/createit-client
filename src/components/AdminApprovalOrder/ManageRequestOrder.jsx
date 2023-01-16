import React from "react";
import './AdminApproveOrder.css';
import '../Services/DetailService.css';
import MessageQuestion from '../../asset/Navbar/message-question.svg';
import RequestDetail from './RequestDetails';
import { useSelector } from "react-redux";

const ManageRequestOrder = ({handleDetail, handleDone}) => {
    const { order } = useSelector(state => state.order);

    return (
        <div>
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
        </div>
    )
}

export default ManageRequestOrder;