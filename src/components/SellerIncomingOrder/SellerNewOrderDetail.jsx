import React from "react";
import { useSelector } from "react-redux";
import './SellerIncomingOrder.css';

const SellerNewOrderDetail = ({hideDetail}) => {
    const orderDetail = useSelector((state) => state.neworderdetailseller);
    const orderId = orderDetail.orderId;

    return (
        <div className={orderId ? "newordersellerlist1 ordrdetail-trnstn" : "newordersellerlist1"}>
            <div className="newordrlist-hdr">
                <div className="back-arrow" onClick={hideDetail}><i className='bx bx-chevron-left'></i></div>
                <div>Request Details</div>
            </div>
            <div className="newordrlist-cntr1">
                <div className="newordrlist-inside1">
                    <img src={orderDetail.image} alt={1} loading="lazy"></img>
                    <div className="ordrdetail-row">
                        <div className="ordrdetail-rowleft">Buyer's Name</div>
                        <div className="ordrdetail-rowright">: {orderDetail.firstName} {orderDetail.lastName}</div>
                    </div>
                    <div className="ordrdetail-row">
                        <div className="ordrdetail-rowleft">Service Name</div>
                        <div className="ordrdetail-rowright">: {orderDetail.title}</div>
                    </div>
                    <div className="ordrdetail-row">
                        <div className="ordrdetail-rowleft">Package Type</div>
                        <div className="ordrdetail-rowright">: {orderDetail.type}</div>
                    </div>
                    <div className="ordrdetail-row">
                        <div className="ordrdetail-rowleft">Delivery Time</div>
                        <div className="ordrdetail-rowright">: {orderDetail.delivery} days</div>
                    </div>
                    <div className="ordrdetail-row">
                        <div className="ordrdetail-rowleft">Limit of Revisions</div>
                        <div className="ordrdetail-rowright">: {orderDetail.revision}</div>
                    </div>
                    <div className="ordrdetail-row">
                        <div className="ordrdetail-rowleft">Price</div>
                        {(orderDetail.price % 1000 === 0) ? (
                            <div className="ordrdetail-rowright">: Rp {orderDetail.price / 1000}.000,-</div>
                        ) : (
                            <div className="ordrdetail-rowright">: Rp {orderDetail.price / 1000},-</div>
                        )}
                    </div>
                    {(orderDetail.noOfConcepts) ? (
                        <div className="ordrdetail-row">
                            <div className="ordrdetail-rowleft">No of concepts</div>
                            <div className="ordrdetail-rowright">: {orderDetail.noOfConcepts}</div>
                        </div>
                    ) : (null)}
                    {(orderDetail.noOfPage) ? (
                        <div className="ordrdetail-row">
                            <div className="ordrdetail-rowleft">No of Pages</div>
                            <div className="ordrdetail-rowright">: {orderDetail.noOfPage}</div>
                        </div>
                    ) : (null)}
                    {(orderDetail.maxDuration) ? (
                        <div className="ordrdetail-row">
                            <div className="ordrdetail-rowleft">Maximum Duration</div>
                            <div className="ordrdetail-rowright">: {orderDetail.maxDuration} minutes</div>
                        </div>
                    ) : (null)}
                    <div className="ordrdetail-row">
                        <div className="ordrdetail-rowleft">Order's Note</div>
                        <div className="ordrdetail-rowright">: {orderDetail.note}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SellerNewOrderDetail;