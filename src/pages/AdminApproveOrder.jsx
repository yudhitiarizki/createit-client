import React , { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../components/AdminApprovalOrder/AdminApproveOrder.css';
import ManageRequestOrder from "../components/AdminApprovalOrder/ManageRequestOrder";
import Footer from "../components/General/Footer";
import { getOrderApprove, patchOrderDone, setDetailOrder } from '../redux/actions/order';
import { Navigate } from "react-router-dom";
import Gif from '../asset/Login/loader.gif';
import '../components/General/loading.css';

const AdminApproveOrder = () => {
    const dispatch = useDispatch();

    const { order } = useSelector(state => state.order);
    const { role, isLoggedIn } = useSelector(state => state.auth);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        dispatch(getOrderApprove()).then(() => setLoading(false)).catch(() => setLoading(false))
    }, [dispatch]);

    const handleDetail = useCallback((orderId, order) => {
        dispatch(setDetailOrder(orderId, order))
    }, [dispatch]);

    const handleDone = useCallback((orderId) => {
        dispatch(patchOrderDone(orderId)).then(() => {
            dispatch(getOrderApprove())
        })
    }, [dispatch]);

    if(isLoggedIn) {
        if (role !== 3) { return <Navigate to='/' />}
    } else {return <Navigate to='/' />}

    return (
        <>
            { loading ? (<div className="container-loading"><img src={Gif} className='loading' alt={1}></img></div>) : (<ManageRequestOrder order={order} handleDetail={handleDetail} handleDone={handleDone} />)}
            <Footer />
        </>
    )
}

export default AdminApproveOrder;