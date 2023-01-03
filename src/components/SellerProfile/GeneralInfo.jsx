import React from "react";
import './GeneralInfo.css'

const GeneralInfo = (props) => {
    return (
        <div className="general-information">
            <h5>General Information</h5>
            <div className="list-info">
                <h6>Seller Since</h6>
                <p>{props.since}</p>
            </div>
            <div className="list-info">
                <h6>Total Services</h6>
                <p>{props.total}</p>
            </div>
            <div className="list-info">
                <h6>Service Sold</h6>
                <p>{props.sold} times</p>
            </div>
            <div className="list-info">
                <h6>Rating</h6>
                <p>{props.rating}/5</p>
            </div>
        </div>
    )
};

export default GeneralInfo;