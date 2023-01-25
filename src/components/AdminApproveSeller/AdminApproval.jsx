import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

import '../Services/DetailService.css';
import './AdminApproval.css';
import '../SellerIncomingOrder/SellerIncomingOrder.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { getSeller, sellerApprove, sellerReject } from "../../redux/actions/user";
import { getNewSellerDetail, hideNewSellerDetail } from "../../redux/actions/NewSellerDetail";
import NewSellerDetail from "./NewSellerDetail";

const AdminApproval = () => {
    const dispatch = useDispatch();

    const seller = useSelector(state => state.user);
    const { role, isLoggedIn } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(getSeller());
    }, [dispatch]);

    const showdetail = useCallback((item) => {
        dispatch(getNewSellerDetail(item))
    }, [dispatch]);

    const approveSeller = useCallback((userId) => {
        dispatch(sellerApprove(userId)).then(() => {
            dispatch(getSeller());
            dispatch(hideNewSellerDetail());
        })
    }, [dispatch]);

    const rejectSeller = useCallback((userId) => {
        dispatch(sellerReject(userId)).then(() => {
            dispatch(getSeller());
            dispatch(hideNewSellerDetail());
        })
    }, [dispatch])

    if(isLoggedIn) {
        if (role !== 3) { return <Navigate to='/' />}
    } else {return <Navigate to='/' />}

    return (
        <div>
            <div className="navbar-text1">
                <Link to='/' className="nav-link">Home</Link>
                <i className='bx bx-chevron-right'></i>
                <div>Approval Seller</div>
            </div>

            <div className='incomingorder-cntr'>
                <NewSellerDetail />
                <div className='newordersellerlist'>
                    <div className='newordrlist-hdr'>Manage Request</div>
                    <div className='newordrlist-cntr'>
                        <div className='newordrlist-inside'>
                            {seller.map((item) => (
                                <div key={`id-${item.sellerId}`} className='newordr-item-cntr'>
                                    <div className='newordr-item-left22'>
                                        <img src="https://ik.imagekit.io/createit/message-question.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674641940805" alt={1} loading="lazy"></img>
                                        <div className='second-left-item'>
                                            <div className='second-leftitem-title'>New Seller Account Submission</div>
                                            <div>Seller Name: {item.firstName} {item.lastName}</div>
                                            <div>{new Date(item.createdAt).toString().split('(')[0]}</div>
                                        </div>
                                    </div>
                                    <div className='newordr-item-right'>
                                        <div className="apprvdeny-btnrow">
                                            <div className='approve-btn-seller-order' onClick={() => {approveSeller(item.userId)}}>Approve</div>
                                            <div className="denyseller-btn" onClick={() => {rejectSeller(item.userId)}}>Deny</div>
                                        </div>
                                        <div className='showdetail-btn' onClick={() => {showdetail(item)}}><i className='bx bx-right-arrow-alt'></i></div>
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

export default AdminApproval;