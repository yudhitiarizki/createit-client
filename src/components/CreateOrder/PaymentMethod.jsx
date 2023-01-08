import React, { useState } from "react";
import './Order.css'

const PaymentMethod = ({func}) => {
    const [paymentMethod, setpaymentMethod] = useState('');

    const method = [
        { id:'bank_transfer', name: 'Bank Transfer' }, {id:'e-bank', name: 'M-Banking'}
    ]

    var bank = [
        {
            id: 1,
            forKey: 'bank_transfer',
            method: 'bank_transfer',
            bank: 'bri'
        },
        {
            id: 2,
            forKey: 'bank_transfer',
            method: 'bank_transfer',
            bank: 'bni'
        },
        {
            id: 3,
            forKey: 'bank_transfer',
            method: 'bank_transfer',
            bank: 'bca'
        },
        {
            id: 4,
            forKey: 'e-bank',
            method: 'bca_klikpay',
            bank: 'bca_klikpay'
        },
        {
            id: 5,
            forKey: 'e-bank',
            method: 'cimb_clicks',
            bank: 'cimb_clicks'
        },
        {
            id: 6,
            forKey: 'e-bank',
            method: 'danamon_online',
            bank: 'danamon_online'
        },
        {
            id: 7,
            forKey: 'e-bank',
            method: 'bri_epay',
            bank: 'bri_epay'
        },
    ]

    const onChangePay = (event) => {
        setpaymentMethod(event.target.value);
    };

    const onChangeBank = (event) => {
        bank.forEach(banks => {
            if (banks.id == event.target.value) {
                func(banks.method, banks.bank);
            }
        });
    }

    const filterData = bank.filter(bank => bank.forKey === paymentMethod)

    return (
        <div className="payment-method">
            <div className="personal-title">
                <h3>PAYMENT METHOD</h3>
            </div>
            <div className="personal-info">
                <div className="form-input">
                    <label htmlFor="Payment">Payment Method <span>*</span></label>
                    <select onChange={onChangePay} className="form-select" id="Payment" aria-label="Default select example" key={paymentMethod}>
                        <option defaultValue>Select Options</option>
                        { method.map(method => {
                            return <option value={method.id}>{method.name}</option>
                        }) }
                    </select>
                </div>
                <div className="form-input">
                    <label htmlFor="bank">Bank Name <span>*</span></label>
                    { paymentMethod ? (
                        <select onChange={onChangeBank} className="form-select" id="bank" aria-label="Default select example">
                            <option defaultValue>Select Options</option>
                            { filterData.map(bank => {
                                return <option value={bank.id}>{bank.bank}</option>
                            }) }
                        </select>
                    ) : (
                        <select disabled className="form-select" id="bank" aria-label="Default select example">
                            <option defaultValue>Select Options</option>
                        </select>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod;