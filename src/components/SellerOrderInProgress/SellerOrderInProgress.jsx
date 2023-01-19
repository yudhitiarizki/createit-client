import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getOnProgressDetail, hideOnProgressDetail } from '../../redux/actions/DetailWorkingOrderSeller';

import SellerInProgressDetail from './SellerInProgressDetail';

import MessageQuestion from '../../asset/Navbar/message-question.svg';
import '../SellerIncomingOrder/SellerIncomingOrder.css';
import '../Services/DetailService.css';
import './SellerOrderInProgress.css';

const SellerOrderInProgress = () => {
    const dispatch = useDispatch();

    const order = useSelector(state => state.order.order);

    console.log('order', order)

    const workingOrder = order.filter(order => order.status === 'Working');
    const revisingOrder = order.filter(order => order.status === 'Revising');
    const reviewingOrder = order.filter(order => order.status === 'Reviewing');

    const [activeTab, setActiveTab] = useState('workingtab');
    const [sellerOrder, setSellerOrder] = useState([]);
    const [thumbTxt, setThumbTxt] = useState('');

    useEffect(() => {
        if (activeTab === 'workingtab') {
            setSellerOrder(order.filter(order => order.status === 'Working'))
        }
    }, [activeTab, order])

    const workingtab = useCallback(() => {
        setActiveTab('workingtab');
        dispatch(hideOnProgressDetail());
        setThumbTxt('');
    }, [dispatch]);

    const reviewingtab = useCallback(() => {
        setActiveTab('reviewingtab');
        setSellerOrder(reviewingOrder);
        dispatch(hideOnProgressDetail());
        setThumbTxt('');
    }, [dispatch, reviewingOrder])

    const revisiontab = useCallback(() => {
        setActiveTab('revisiontab');
        setSellerOrder(revisingOrder);
        dispatch(hideOnProgressDetail());
        setThumbTxt('');
    }, [dispatch, revisingOrder]);

    const handleShowDetail = useCallback((order) => {
        dispatch(getOnProgressDetail(order));
       setThumbTxt('');
    }, [dispatch]);

    const getTime = useCallback((data) => {
        const date = new Date(data);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    
        return date.toLocaleDateString('id-ID', options);
    }, []);

    return (
        <div>
            <div className="navbar-text1">
                <div className="nav-link">Seller</div>
                <i className='bx bx-chevron-right'></i>
                <div>Order In Progress</div>
            </div>
            <div className='sllr-inprgrsorder-tab'>
                <div className={(activeTab === 'workingtab') ? 'sllrorder-actvtab' : ''} onClick={workingtab}>Working ({workingOrder.length})</div>
                <div className={(activeTab === 'reviewingtab') ? 'sllrorder-actvtab' : ''} onClick={reviewingtab}>In Review ({reviewingOrder.length})</div>
                <div className={(activeTab === 'revisiontab') ? 'sllrorder-actvtab' : ''} onClick={revisiontab}>Revision ({revisingOrder.length})</div>
            </div>
            <div className='incomingorder-cntr'>
                <SellerInProgressDetail thumbTxt={thumbTxt} getTime={getTime} setThumbTxt={setThumbTxt} />
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
                                                <div>{getTime(order.createdAt)}</div>
                                            ) : (
                                                <div>{getTime(order.updatedAt)}</div>
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