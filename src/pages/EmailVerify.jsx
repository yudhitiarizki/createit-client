import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../components/VerifyPayment/PaymentSummary.css';
import tickCircle from '../asset/Payment/tick-circle.svg';
import Navbar from "../components/General/Navbar";
import Footer from "../components/General/Footer";
import Gif from '../asset/Login/loader.gif';
import { useDispatch } from "react-redux";
import { VerifEmail } from "../redux/actions/auth";
import { ToastContainer } from "react-toastify";

const EmailVerif = () => {
    const dispatch = useDispatch();
    const { token } = useParams();
    const [success, setSuccess] = useState(1)

    useEffect(() => {
        dispatch(VerifEmail(token)).then(() => {
            setSuccess(2);
        }).catch(() => {
            setSuccess(3);
        });
    }, [dispatch])

    return (
        <div>
            <div className='paymentdata-cntr'>
                <div className='paymentdata-box'>
                    <div className='pymntdata-header'>
                        { success === 2 && (
                            <>
                                <img src={tickCircle} alt=''></img>
                                <div className='order-cnfrmd'>ACCOUNT IS VERIFY</div>
                                <div className='paymentdata-msg'>Please login to try all features</div>
                            </>
                        )}
                        { success === 3 && (
                            <>
                                <div className='order-cnfrmd'>ACCOUNT NOT VERIFY</div>
                                <div className='paymentdata-msg'>Please try again later!</div>
                            </>
                        )}
                        { success === 1 && (
                            <img src={Gif} alt=''></img>    
                        )}
                    </div>
                </div>
            </div>
            <ToastContainer />
            <Footer />
        </div>
        
    )
}

export default EmailVerif;