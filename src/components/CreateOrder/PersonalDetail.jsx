import React from "react";
import './Order.css'

const PersonalDetail = () => {
    return (
        <div className="personal-detail">
            <div className="personal-title">
                <h3>PERSONAL DETAIL</h3>
            </div>
            <div className="personal-info">
                <div className="form-input">
                    <label htmlFor="name">First and Last Name <span>*</span></label>
                    <input type="text" id='name' value={'Yudhitia Rizki Mulyono'} disabled/>
                </div>
                <div className="form-input">
                    <label htmlFor="email">Email Address <span>*</span></label>
                    <input type="text" id='email' value={'Yudhitia Rizki Mulyono'} disabled/>
                </div>
                <div className="form-input">
                    <label htmlFor="Phone">Phone Number <span>*</span></label>
                    <input type="text" id='Phone' value={'Yudhitia Rizki Mulyono'} disabled/>
                </div>
                <div className="form-input">
                    <label htmlFor="description">Notes <span>*</span></label>
                    <textarea name="description" id="" cols="20" rows="3"></textarea>
                </div>
            </div>
        </div>
    )
}

export default PersonalDetail;