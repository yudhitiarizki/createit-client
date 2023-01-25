import React, { useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { hideNewSellerDetail } from '../../redux/actions/NewSellerDetail';

import './AdminApproval.css';
import '../SellerIncomingOrder/SellerIncomingOrder.css';

const NewSellerDetail = () => {
    const dispatch = useDispatch();

    const {
        sellerId,
        username,
        firstName,
        lastName,
        photoProfile,
        description
    } = useSelector(state => state.newSellerDetail);

    const hideDetail = useCallback(() => {
        dispatch(hideNewSellerDetail());
    }, [dispatch])

    return (
        <div className={sellerId ? "newordersellerlist1 ordrdetail-trnstn" : "newordersellerlist1"}>
            <div className="newordrlist-hdr">
                <div className="back-arrow" onClick={hideDetail}><i className='bx bx-chevron-left'></i></div>
                <div>Request Details</div>
            </div>
            <div className="newordrlist-cntr33">
                <div className="newordrlist-inside1">
                    <div className='photoprofile'>
                        <img src={photoProfile} alt={1} loading="lazy"></img>
                    </div>
                    <div className="ordrdetail-row">
                        <div className="ordrdetail-rowleft newseller-rowleft">Username</div>
                        <div className="ordrdetail-rowright">: {username}</div>
                    </div>
                    <div className="ordrdetail-row">
                        <div className="ordrdetail-rowleft newseller-rowleft">Seller Name</div>
                        <div className="ordrdetail-rowright">: {firstName} {lastName}</div>
                    </div>
                    <div className="ordrdetail-row">
                        <div className="ordrdetail-rowleft newseller-rowleft">Description</div>
                        <div className="ordrdetail-rowright">: {description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NewSellerDetail;