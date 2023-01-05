import React from "react";
import './Order.css'

const PaymentMethod = () => {
    return (
        <div className="payment-method">
            <div className="personal-title">
                <h3>PAYMENT METHOD</h3>
            </div>
            <div className="personal-info">
                <div className="form-input">
                    <label htmlFor="Payment">Payment Method <span>*</span></label>
                    <select class="form-select" id="Payment" aria-label="Default select example">
                        <option selected>Select Options</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="form-input">
                    <label htmlFor="bank">Bank Name <span>*</span></label>
                    <select class="form-select" id="bank" aria-label="Default select example">
                        <option selected>Select Options</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod;