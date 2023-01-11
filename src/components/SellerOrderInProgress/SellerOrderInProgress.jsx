import React, { useState, useEffect } from 'react';
import Navbar from '../General/Navbar';
import MessageQuestion from '../../asset/Navbar/message-question.svg';
import '../SellerIncomingOrder/SellerIncomingOrder.css';
import '../Services/DetailService.css';
import './SellerOrderInProgress.css';
import { useDispatch, useSelector } from 'react-redux';
import { getOnProgressDetail, hideOnProgressDetail } from '../../redux/actions/DetailWorkingOrderSeller';
import SellerInProgressDetail from './SellerInProgressDetail';
import { getOrderProgress } from '../../redux/actions/order';
import { ToastContainer } from 'react-toastify';

const SellerOrderInProgress = () => {
    const dispatch = useDispatch();

    const { order } = useSelector(state => state.order);

    useEffect(() => {
        dispatch(getOrderProgress())
    }, [dispatch]);


    const workingOrder = order.filter(order => order.status === 'Working');
    const revisingOrder = order.filter(order => order.status === 'Revising');

    const [sellerOrder, setSellerOrder] = useState(workingOrder);

    useEffect(() => {
        setSellerOrder(workingOrder)
    }, [order])

    const workingtab = () => {
        const workingTab = document.getElementById('working-tab').classList;
        const revisionTab = document.getElementById('revision-tab').classList;

        if (!workingTab.contains('sllrorder-actvtab')) {
            workingTab.add('sllrorder-actvtab');
            revisionTab.remove('sllrorder-actvtab');
        }

        setSellerOrder(workingOrder);
        dispatch(hideOnProgressDetail());
    };

    const revisiontab = () => {
        const workingTab = document.getElementById('working-tab').classList;
        const revisionTab = document.getElementById('revision-tab').classList;

        if (!revisionTab.contains('sllrorder-actvtab')) {
            revisionTab.add('sllrorder-actvtab');
            workingTab.remove('sllrorder-actvtab');
        }

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
            <div className="detailservice-navbar">
                <Navbar />
            </div>
            <div className="navbar-text1">
                <div className="nav-link">Seller</div>
                <i className='bx bx-chevron-right'></i>
                <div>Order In Progress</div>
            </div>
            <div className='sllr-inprgrsorder-tab'>
                <div id='working-tab' className='sllrorder-actvtab' onClick={workingtab}>Working ({workingOrder.length})</div>
                <div id='revision-tab' onClick={revisiontab}>Revision ({revisingOrder.length})</div>
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
            <ToastContainer />
        </div>
    )
};

export default SellerOrderInProgress;