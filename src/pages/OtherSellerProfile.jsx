import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/General/Footer';
import Profile from '../components/SellerProfile/Profile';
import ServiceList from '../components/SellerProfile/ServiceList';
import { getMySeller } from '../redux/actions/seller';

const OtherSellerProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const sellerId = +id;

    const seller = useSelector(state => state.seller);
    const { isLoggedIn } = useSelector(state => state.auth);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/')
        }
    }, [isLoggedIn]);

    useEffect(() => {
        dispatch(getMySeller(sellerId));
    }, [dispatch, sellerId]);

    return (
        <>
            <Profile seller={seller} />
            <ServiceList seller={seller} />
            <Footer />
            <ToastContainer />
        </>
    );
};

export default OtherSellerProfile;