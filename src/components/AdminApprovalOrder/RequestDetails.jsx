import React from "react";
import IconDetail from '../../asset/Order/arrow-circle-right.svg'
import Dummy from '../../asset/ImgDummy/Rectangle21.png'

const RequestDetails = () => {

    return (
        <div className="order-detail">
            <div className="order-header">
                <img src={IconDetail} className="header-icon"></img>
                <h5>Request Details</h5>
            </div>
            <div className="order-request-detail">
                <div className="order-image">
                    <img src={Dummy} alt="" />
                </div>
                <div className="order-data-request">
                    <div className="data-title">Buyers Name</div>
                    <div className="data-detail">: Ahmad Na Jaemin</div>
                </div>
                <div className="order-data-request">
                    <div className="data-title">Seller/Shop Name</div>
                    <div className="data-detail">: Nana’s Shop</div>
                </div>
                <div className="order-data-request">
                    <div className="data-title">Service Name</div>
                    <div className="data-detail">: Educational Mobile Apps</div>
                </div>
                <div className="order-data-request">
                    <div className="data-title">Package Type</div>
                    <div className="data-detail">: Regular</div>
                </div>
                <div className="order-data-request">
                    <div className="data-title">Amount</div>
                    <div className="data-detail">: Rp 50.999,-</div>
                </div>
                <div className="order-data-request">
                    <div className="data-title">Card Number</div>
                    <div className="data-detail">: 645723547235475</div>
                </div>
                <div className="order-data-request">
                    <div className="data-title">Bank Name</div>
                    <div className="data-detail">: Bank Rakyat Indonesia (BRI)</div>
                </div>
                <div className="order-data-request">
                    <div className="data-title">Card Holder</div>
                    <div className="data-detail">: Ahmad Na jaemin</div>
                </div>
            </div>
        </div>
    )
}

export default RequestDetails;