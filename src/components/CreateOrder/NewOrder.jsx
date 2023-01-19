import React, { useCallback, useState } from "react";
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

    const [method, setMethod] = useState('');
    const [paymentMethod, setpaymentMethod] = useState('');
    const [bankName, setbankName] = useState('');
    const [note, setNote] = useState('');
    const [message1, setMessage1] = useState('');
    const [message2, setMessage2] = useState('');
    const [message3, setMessage3] = useState('');

    const handleNote = useCallback((event) => {
        setNote(event.target.value);
        setMessage3('');
    }, []);

    const onChangePay = useCallback((event) => {
        setMethod(event.target.value);
        setbankName('');
        setpaymentMethod('');
        setMessage1('');
    }, []);

    const onChangeBank = useCallback((event) => {
        const bank = event.target.value;
        setbankName(bank);

        if (method === 'bank_transfer') {
            setpaymentMethod('bank_transfer')
        } else {
            setpaymentMethod(bank);
        }

        setMessage1('');
        setMessage2('');

    }, [method])

    const handleOrder = useCallback(() => {
        if (!note) {
            setMessage3('Please leave an order note');
        }

        if (paymentMethod && bankName && method) {
            dispatch(createOrder(packageId, note, paymentMethod, bankName)).then(() => {
                setMessage1('');
                setMessage2('');
                navigate('/verifypayment');
            });
        } else if (method) {
            setMessage2('Please select a valid bank name')
        } else {
            setMessage1('Please select a valid payment method')
        }

    }, [packageId, note, paymentMethod, bankName, method, dispatch, navigate])

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
                                    {message3 && <div className="payment-err-msg">{message3}</div>}
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
                                    <select value={method} onChange={onChangePay} className="form-select">
                                        <option value='' defaultValue>Select Options</option>
                                        <option value='bank_transfer'>Bank Transfer</option>
                                        <option value='e-bank'>M-Banking</option>
                                    </select>
                                    {message1 && <div className="payment-err-msg">{message1}</div>}
                                </div>
                                {method ?
                                    <div className="form-input">
                                        <label htmlFor="bank">Bank Name <span>*</span></label>
                                        <select className="form-select" value={bankName} onChange={onChangeBank}>
                                            {
                                                method === 'bank_transfer' ?
                                                    <>
                                                        <option value='' defaultValue>Select Options</option>
                                                        <option value='bri'>BRI</option>
                                                        <option value='bni'>BNI</option>
                                                        <option value='bca'>BCA</option>
                                                    </>
                                                    :
                                                    <>
                                                        <option value='' defaultValue>Select Options</option>
                                                        <option value='bca_klikpay'>BCA KLIKPAY</option>
                                                        <option value='cimb_clicks'>CIMB CLICKS</option>
                                                        <option value='danamon_online'>DANAMON ONLINE</option>
                                                        <option value='bri_epay'>BRI EPAY</option>
                                                    </>
                                            }
                                        </select>
                                        {message2 && <div className="payment-err-msg">{message2}</div>}
                                    </div>
                                    : null
                                }

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
                            <div type='button' className="button-order" onClick={() => handleOrder()}>Order Now</div>
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