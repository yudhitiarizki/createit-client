import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Footer from '../components/General/Footer';
import OrderDetailUser from '../components/UserOrder/OrderDetailUser';

import '../components/SomethingWrong/SomethingWrong.css';

import { setWentWrong } from '../redux/actions/loader';

const UserOrderDetail = () => {
    const dispatch = useDispatch();

    const { detail } = useSelector(state => state.order);
    const { isError } = useSelector(state => state.Loading);

    const order = detail.order;
    const orderId = detail.orderId;

    useEffect(() => {
        if (!orderId) {
            dispatch(setWentWrong());
        }
    }, [orderId, dispatch]);

    return (
        <>
            {isError ?
                <div className='smtngwrong-cntr'>
                    <div className='smtngwrong-icon'><i className='bx bxs-error-circle' ></i></div>
                    <div className='smtngwrong-oops'>Oops!</div>
                    <div className='smtngwrong-msg'>Failed to load order detail</div>
                    <Link to='/user/order' className='nav-link back-button'>Back to Order List Page</Link>
                </div>
                :
                <>
                    <OrderDetailUser order={order} />
                    <Footer />
                </>
            }
        </>
    )
};

export default UserOrderDetail;