import React from "react";
import './Order.css'

const OrderSummary = ({ data, funcOrder }) => {

    return (
        <div className="order-summary">
            <div className="personal-title order-title">
                <h3>ORDER SUMMARY</h3>
            </div>
            <div className="form-disable-1">
                <h6>Date</h6>
                <p>02/01/2023</p>
            </div>
            <div className="form-disable-2">
                <h6>Hour</h6>
                <p>8.30 AM</p>
            </div>
            <div className="form-disable-1">
                <h6>Service Name</h6>
                <p>{data.service}</p>
            </div>
            <div className="form-disable-2">
                <h6>Package Type</h6>
                <p>{data.package.type}</p>
            </div>
            <div className="form-disable-1">
                <h6>Limit of Revision</h6>
                <p>{data.package.revision}</p>
            </div>
            <div className="form-disable-2">
                <h6>Delivery Time</h6>
                <p>{data.package.delivery} Days</p>
            </div>
            <div className="form-disable-1 total">
                <h6>Total</h6>
                <p>Rp {data.package.price} ,-</p>
            </div>
            <div className="button-footer">
                <div className="button-order" onClick={() => funcOrder()}>Order Now</div>
            </div>
        </div>
    )
}

export default OrderSummary;