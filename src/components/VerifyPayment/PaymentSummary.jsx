import { Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';

import './PaymentSummary.css';
import tickCircle from '../../asset/Payment/tick-circle.svg';

const PaymentSummary = ({ data }) => {
    const { role, isLoggedIn, isSeller } = useSelector(state => state.auth);

    const onPay = useCallback(() => {
        window.open(data.redirect_url);
    }, [data.redirect_url]);

    if(isLoggedIn) {
        if (role === 3 || (role === 2 && isSeller === true)) { return <Navigate to='/' />}
    } else {return <Navigate to='/' />}

    return (
        <div className='paymentdata-cntr'>
            <div className='paymentdata-box'>
                <div className='pymntdata-header'>
                    <img src={tickCircle} alt=''></img>
                    <div className='order-cnfrmd'>ORDER CONFIRMED!</div>
                    <div className='paymentdata-msg'>Please make a payment immediately.</div>
                </div>
                <div className='pymntdata-row'>
                    <div className='pymntdata-col1'>Order ID</div>
                    <div className='pymntdata-col2'>#{data.order_id}</div>
                </div>
                
                <div className='pymntdata-row'>
                    <div className='pymntdata-col1'>Type Payment</div>
                    { data.payment_type === "bank_transfer" ? (
                            <div className='pymntdata-col2'>{'Bank Transfer'}</div>
                        ) : (
                            <div className='pymntdata-col2'>{data.payment_type.toUpperCase()}</div>
                        )}
                </div>
                { data.payment_type === "bank_transfer" ? (
                    <div className='pymntdata-row'>
                        <div className='pymntdata-col1'>Bank Name</div>
                        <div className='pymntdata-col2'>Bank {data.va_numbers[0].bank.toUpperCase()}</div>
                    </div>
                ) : (<></>)}
                
                { data.payment_type === "bank_transfer" ? (
                    <div className='pymntdata-row'>
                        <div className='pymntdata-col1'>Virtual Number</div>
                        <div className='pymntdata-col2'>{data.va_numbers[0].va_number}</div>
                    </div>
                ) : (
                    <></>
                ) }
                
                <div className='pymntdata-row'>
                    <div className='pymntdata-col1'>Price</div>
                    {(data.price % 1000 === 0) ? (
                        <div className='pymntdata-col2'>Rp {data.gross_amount},-</div>
                    ) : (
                        <div className='pymntdata-col2'>Rp {data.gross_amount},-</div>
                    )}
                </div>
                { data.expire_time ? ( 
                    <div className='pymntdata-row'>
                        <div className='pymntdata-col1'>Expired Date</div>
                        <div className='pymntdata-col2'>{new Date(data.expire_time).toString().split('(')[0]}</div>
                    </div>
                ) : (
                    <></>
                ) }
                { data.redirect_url ? ( 
                    <div className='pymntdata-row'>
                        <div className='pymntdata-col1'>Payment</div>
                        <Link className='pymntdata-col2' onClick={() => {onPay()}}>Klik disini</Link>
                    </div>
                ) : (
                    <></>
                ) }
                
            </div>
        </div>
    )
};

export default PaymentSummary;