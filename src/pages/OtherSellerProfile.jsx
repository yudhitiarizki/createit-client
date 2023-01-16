import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Footer from '../components/General/Footer';
import Loader from '../components/General/Loader';
import Profile from '../components/SellerProfile/Profile';
import ServiceList from '../components/SellerProfile/ServiceList';
import SomethingWrong from '../components/SomethingWrong/SomethingWrong';
import { setToLoad, setToNotLoad, setWentWrong } from '../redux/actions/loader';
import { getMySeller } from '../redux/actions/seller';
import { getServiceByUser } from '../redux/actions/service';

const OtherSellerProfile = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const sellerId = +id;

    const { isLoading, isError } = useSelector(state => state.Loading);

    useEffect(() => {
        dispatch(setToLoad())
        dispatch(getMySeller(sellerId));
        dispatch(getServiceByUser(sellerId))
            .then(() => {
                dispatch(setToNotLoad());
            })
            .catch(error => {
                dispatch(setWentWrong());
            })
    }, [dispatch, sellerId]);

    return (
        <>
            { isLoading ?
                <Loader /> :
                (isError ?
                    <SomethingWrong /> :
                    <>
                        <Profile />
                        <ServiceList />
                        <Footer />
                    </>
                )
            }
        </>
    );
};

export default OtherSellerProfile;