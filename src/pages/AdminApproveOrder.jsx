import React , { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../components/AdminApprovalOrder/AdminApproveOrder.css';
import ManageRequestOrder from "../components/AdminApprovalOrder/ManageRequestOrder";
import Footer from "../components/General/Footer";
import { getOrderApprove, patchOrderDone, setDetailOrder } from '../redux/actions/order';
import { Navigate } from "react-router-dom";
import Gif from '../asset/Login/loader.gif';
import '../components/General/loading.css';
import { ToastContainer } from 'react-toastify';

const AdminApproveOrder = () => {
    const dispatch = useDispatch();

    const { order } = useSelector(state => state.order);
    const { role, isLoggedIn } = useSelector(state => state.auth);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        dispatch(getOrderApprove()).then(() => setLoading(false)).catch(() => setLoading(false))
    }, [dispatch]);

    if(isLoggedIn) {
        if (role !== 3) { return <Navigate to='/' />}
    } else {return <Navigate to='/' />}

    const handleDetail = (orderId, order) => {
        dispatch(setDetailOrder(orderId, order))
    };

    const handleDone = (orderId) => {
        dispatch(patchOrderDone(orderId)).then( () => {
            dispatch(getOrderApprove())
        })
    };

    return (
        <>
            { loading ? (<div className="container-loading"><img src={Gif} className='loading'></img></div>) : (<ManageRequestOrder order={order} handleDetail={handleDetail} handleDone={handleDone} />)}
            <Footer />
            
            <ToastContainer />
        </>
    )
}

export default AdminApproveOrder;