import React from "react";
import './Order.css';
import PersonalDetail from './PersonalDetail';
import PaymentMethod from "./PaymentMethod";

const OrderData = () => {
    return (
        <div className="order-data">
            <PersonalDetail />
            <PaymentMethod />
        </div>
    )
}

export default OrderData;
