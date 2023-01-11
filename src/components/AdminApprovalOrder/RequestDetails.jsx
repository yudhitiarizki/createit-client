import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDetailOrder } from "../../redux/actions/order";
import './AdminApproveOrder.css';

const RequestDetails = () => {

    const dispatch = useDispatch();
    const { detail } = useSelector((state) => state.order);
    const orderId = detail.orderId;

    const hideDetail = () => {
        dispatch(deleteDetailOrder());
    }

    return (
        <div className={orderId ? "newordersellerlist1 ordrdetail-trnstn" : "newordersellerlist1"}>
            <div className="newordrlist-hdr">
                <div className="back-arrow" onClick={hideDetail}><i className='bx bx-chevron-left'></i></div>
                <div>Request Details</div>
            </div>
            <div className="newordrlist-cntr1">
                <div className="newordrlist-inside1">
                    <img src={detail.order.image} alt=''></img>
                    { detail.order.User && (
                        <div className="ordrdetail-row">
                            <div className="ordrdetail-rowleft">Buyer's Name</div>
                            <div className="ordrdetail-rowright">: {detail.order.User.firstName} {detail.order.User.lastName}</div>
                        </div>
                    )}
                    <div className="ordrdetail-row">
                        <div className="ordrdetail-rowleft">Seller's Name</div>
                        <div className="ordrdetail-rowright">: {detail.order.firstName} {detail.order.lastName}</div>
                    </div>
                    <div className="ordrdetail-row">
                        <div className="ordrdetail-rowleft">Service Name</div>
                        <div className="ordrdetail-rowright">: {detail.order.title}</div>
                    </div>
                    <div className="ordrdetail-row">
                        <div className="ordrdetail-rowleft">Package Type</div>
                        <div className="ordrdetail-rowright">: {detail.order.type}</div>
                    </div>
                    <div className="ordrdetail-row">
                        <div className="ordrdetail-rowleft">Price</div>
                        {(detail.order.price % 1000 === 0) ? (
                            <div className="ordrdetail-rowright">: Rp {detail.order.price / 1000}.000,-</div>
                        ) : (
                            <div className="ordrdetail-rowright">: Rp {detail.order.price / 1000},-</div>
                        )}
                    </div>
                    <div className="ordrdetail-row">
                        <div className="ordrdetail-rowleft">Card Number</div>
                        <div className="ordrdetail-rowright">: {detail.order.noRekening}</div>
                    </div>
                    <div className="ordrdetail-row">
                        <div className="ordrdetail-rowleft">Bank Name</div>
                        <div className="ordrdetail-rowright">: {detail.order.bankName}</div>
                    </div>
                    <div className="ordrdetail-row">
                        <div className="ordrdetail-rowleft">Card Holder</div>
                        <div className="ordrdetail-rowright">: {detail.order.cardHolder}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestDetails;