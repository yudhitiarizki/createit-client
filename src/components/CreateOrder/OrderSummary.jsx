import React from "react";
import './Order.css'

const OrderSummary = () => {
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
                <p>Educational Mobile Apps</p>
            </div>
            <div className="form-disable-2">
                <h6>Package Type</h6>
                <p>Regular</p>
            </div>
            <div className="form-disable-1">
                <h6>Limit of Revision 3</h6>
                <p>3</p>
            </div>
            <div className="form-disable-2">
                <h6>Delivery Time</h6>
                <p>7 Days</p>
            </div>
            <div className="form-disable-1 total">
                <h6>Total</h6>
                <p>Rp 50.999 ,-</p>
            </div>
            <div className="button-footer">
                <div className="button-order">Order Now</div>
            </div>
        </div>
    )
}

export default OrderSummary;