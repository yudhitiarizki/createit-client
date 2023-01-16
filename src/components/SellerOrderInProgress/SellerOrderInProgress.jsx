import React, { useState, useEffect } from 'react';
import MessageQuestion from '../../asset/Navbar/message-question.svg';
import '../SellerIncomingOrder/SellerIncomingOrder.css';
import '../Services/DetailService.css';
import './SellerOrderInProgress.css';
import { useDispatch, useSelector } from 'react-redux';
import { getOnProgressDetail, hideOnProgressDetail } from '../../redux/actions/DetailWorkingOrderSeller';
import SellerInProgressDetail from './SellerInProgressDetail';
import { getOrderProgress } from '../../redux/actions/order';
import { Navigate } from 'react-router-dom';

const SellerOrderInProgress = () => {
    const dispatch = useDispatch();

    const { order } = useSelector(state => state.order);
    const { role, isLoggedIn, isSeller, isVerified } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(getOrderProgress())
    }, [dispatch]);

    const workingOrder = order.filter(order => order.status === 'Working');
    const revisingOrder = order.filter(order => order.status === 'Revising');
    const reviewingOrder = order.filter(order => order.status === 'Reviewing');

    const [sellerOrder, setSellerOrder] = useState(workingOrder);
    const [activeTab, setActiveTab] = useState('workingtab');

    useEffect(() => {
        setSellerOrder(workingOrder)
    }, [order])

    if(isLoggedIn) {
        if (!(role === 2 && isVerified && isSeller)) { return <Navigate to='/' />}
    } else {return <Navigate to='/' />}

    const workingtab = () => {
        setActiveTab('workingtab');
        setSellerOrder(workingOrder);
        dispatch(hideOnProgressDetail());
        document.getElementById('custom-inputtext2').innerHTML = '';
    };

    const reviewingtab = () => {
        setActiveTab('reviewingtab');
        setSellerOrder(reviewingOrder);
        dispatch(hideOnProgressDetail());
        document.getElementById('custom-inputtext2').innerHTML = '';
    }

    const revisiontab = () => {
        setActiveTab('revisiontab');
        setSellerOrder(revisingOrder);
        dispatch(hideOnProgressDetail());
        document.getElementById('custom-inputtext2').innerHTML = '';
    };

    const handleShowDetail = (order) => {
        dispatch(getOnProgressDetail(order));
        document.getElementById('custom-inputtext2').innerHTML = '';
    };

    return (
        <div>
            <div className="navbar-text1">
                <div className="nav-link">Seller</div>
                <i className='bx bx-chevron-right'></i>
                <div>Order In Progress</div>
            </div>
            <div className='sllr-inprgrsorder-tab'>
                <div className={(activeTab === 'workingtab') ? 'sllrorder-actvtab' : ''} onClick={workingtab}>Working ({workingOrder.length})</div>
                <div className={(activeTab === 'reviewingtab') ? 'sllrorder-actvtab' : ''} onClick={reviewingtab}>Need Review ({reviewingOrder.length})</div>
                <div className={(activeTab === 'revisiontab') ? 'sllrorder-actvtab' : ''} onClick={revisiontab}>Revision ({revisingOrder.length})</div>
            </div>
            <div className='incomingorder-cntr'>
                <SellerInProgressDetail />
                <div className='newordersellerlist'>
                    <div className='newordrlist-hdr'>Manage Request</div>
                    <div className='newordrlist-cntr'>
                        <div className='newordrlist-inside'>
                            {sellerOrder.map((order) => (
                                <div key={`id-${order.orderId}`} className='newordr-item-cntr'>
                                    <div className='newordr-item-left'>
                                        <img src={MessageQuestion} alt=''></img>
                                        <div className='second-left-item'>
                                            <div className='second-leftitem-title'>
                                                <span>Order {order.orderId} </span>
                                                : {order.title}
                                            </div>
                                            <div>Buyer's Name: {order.firstName} {order.lastName}</div>
                                            {(order.status === 'Working') ? (
                                                <div>{order.createdAt}</div>
                                            ) : (
                                                <div>{order.updatedAt}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className='showdetail-arrow'>
                                        <div className='showdetail-btn' onClick={() => {handleShowDetail(order)}}><i className='bx bx-right-arrow-alt'></i></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SellerOrderInProgress;