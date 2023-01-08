import React from "react";
import './Order.css'

const PersonalDetail = ({user, funcNote}) => {
    return (
        <div className="personal-detail">
            <div className="personal-title">
                <h3>PERSONAL DETAIL</h3>
            </div>
            <div className="personal-info">
                <div className="form-input">
                    <label htmlFor="name">First and Last Name <span>*</span></label>
                    <input type="text" id='name' value={`${user.firstName} ${user.lastName}`} disabled/>
                </div>
                <div className="form-input">
                    <label htmlFor="email">Email Address <span>*</span></label>
                    <input type="text" id='email' value={user.email} disabled/>
                </div>
                <div className="form-input">
                    <label htmlFor="Phone">Phone Number <span>*</span></label>
                    <input type="text" id='Phone' value={user.phoneNumber} disabled/>
                </div>
                <div className="form-input">
                    <label htmlFor="description">Notes <span>*</span></label>
                    <textarea name="description" onChange={(event) => {funcNote(event.target.value)}} id="" cols="20" rows="3"></textarea>
                </div>
            </div>
        </div>
    )
}

export default PersonalDetail;