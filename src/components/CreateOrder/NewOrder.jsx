import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { createOrder } from "../../redux/actions/order";
import './Order.css';

const NewOrder = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { state } = location;
    const { user } = useSelector(state => state.auth);
    const { packageId } = state.package;

    const [paymentMethod, setpaymentMethod] = useState('');
    const [bankName, setbankName] = useState('');
    const [note, setNote] = useState('');

    const method = [
        { id: 'bank_transfer', name: 'Bank Transfer' }, { id: 'e-bank', name: 'M-Banking' }
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

    const filterData = bank.filter(bank => bank.forKey === paymentMethod)

    const handleNote = (event) => {
        setNote(event.target.value)
    }

    const onChangePay = (event) => {
        setpaymentMethod(event.target.value);
    };

    const onChangeBank = (event) => {
        bank.forEach(banks => {
            if (banks.id == event.target.value) {
                setpaymentMethod(banks.method);
                setbankName(banks.bank);
            }
        });
    }

    const handleOrder = () => {
        dispatch(createOrder(packageId, note, paymentMethod, bankName)).then(() => {
            navigate('/verifypayment')
        });
    }

    return (
        <>
            <div className="order-create-path">
                <div className="path">
                    <Link to='/' className="nav-link">Home</Link>
                    <i className='bx bx-chevron-right'></i>
                    <div>Service List</div>
                    <i className='bx bx-chevron-right'></i>
                    <div>Service Details</div>
                    <i className='bx bx-chevron-right'></i>
                    <div>Order</div>
                </div>
            </div>
            {state ? (
                <div className="order-create-list">
                    <div className="order-data">
                        <div className="personal-detail">
                            <div className="personal-title">
                                <h3>PERSONAL DETAIL</h3>
                            </div>
                            <div className="personal-info">
                                <div className="form-input">
                                    <label htmlFor="name">First and Last Name <span>*</span></label>
                                    <input type="text" id='name' value={`${user.firstName} ${user.lastName}`} disabled />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="email">Email Address <span>*</span></label>
                                    <input type="text" id='email' value={user.email} disabled />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="Phone">Phone Number <span>*</span></label>
                                    <input type="text" id='Phone' value={user.phoneNumber} disabled />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="description">Notes <span>*</span></label>
                                    <textarea name="description" value={note} onChange={handleNote} id="" cols="20" rows="3"></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="payment-method">
                            <div className="personal-title">
                                <h3>PAYMENT METHOD</h3>
                            </div>
                            <div className="personal-info">
                                <div className="form-input">
                                    <label htmlFor="Payment">Payment Method <span>*</span></label>
                                    <select onChange={onChangePay} className="form-select" id="Payment" aria-label="Default select example" key={paymentMethod}>
                                        <option defaultValue>Select Options</option>
                                        {method.map(method =>
                                            <option value={method.id} key={`id-${method.id}`}>{method.name}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="bank">Bank Name <span>*</span></label>
                                    {paymentMethod ? (
                                        <select onChange={onChangeBank} className="form-select" id="bank" aria-label="Default select example">
                                            <option defaultValue>Select Options</option>
                                            {filterData.map(bank => (
                                                <option value={bank.id} key={`id-${bank.id}`}>{bank.bank.toUpperCase()}</option>
                                            ))}
                                        </select>
                                    ) : (
                                        <select disabled className="form-select" id="bank" aria-label="Default select example">
                                            <option defaultValue>Select Options</option>
                                        </select>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

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
                            <p>{state.service}</p>
                        </div>
                        <div className="form-disable-2">
                            <h6>Package Type</h6>
                            <p>{state.package.type}</p>
                        </div>
                        <div className="form-disable-1">
                            <h6>Limit of Revision</h6>
                            <p>{state.package.revision}</p>
                        </div>
                        <div className="form-disable-2">
                            <h6>Delivery Time</h6>
                            <p>{state.package.delivery} Days</p>
                        </div>
                        <div className="form-disable-1 total">
                            <h6>Total</h6>
                            <p>Rp {state.package.price} ,-</p>
                        </div>
                        <div className="button-footer">
                            <div className="button-order" onClick={() => handleOrder()}>Order Now</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="order-notfound">
                    <div className="order-notfound-data">
                        <h5>Please select package first!</h5>
                    </div>
                </div>
            )}
        </>
    )
}

export default NewOrder;