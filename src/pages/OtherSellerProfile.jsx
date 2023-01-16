import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/General/Footer';
import Profile from '../components/SellerProfile/Profile';
import ServiceList from '../components/SellerProfile/ServiceList';
import { getMySeller } from '../redux/actions/seller';
import { deleteService, getServiceByUser } from '../redux/actions/service';


const OtherSellerProfile = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const sellerId = +id;

    const seller = useSelector(state => state.seller);

    useEffect(() => {
        dispatch(getMySeller(sellerId));
        dispatch(getServiceByUser(sellerId))
    }, [dispatch, sellerId]);

    const onDelete = (serviceId) => {
        dispatch(deleteService(serviceId)).then(() => {
            dispatch(getServiceByUser(sellerId))
        })
    }
    
    const getServiceButton = () => {
        dispatch(getServiceByUser(sellerId))
    }

    return (
        <>
            <Profile seller={seller} />
            <ServiceList seller={seller} onDelete={onDelete} getServiceButton={getServiceButton}/>
            <Footer />
        </>
    );
};

export default OtherSellerProfile;