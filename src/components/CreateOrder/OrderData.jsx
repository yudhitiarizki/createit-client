import React from "react";
import './Order.css';
import PersonalDetail from './PersonalDetail';
import PaymentMethod from "./PaymentMethod";

const OrderData = ({ user, func, funcNote }) => {
    return (
        <div className="order-data">
            <PersonalDetail user={user} funcNote={funcNote} />
            <PaymentMethod func={func} />
        </div>
    )
}

export default OrderData;
