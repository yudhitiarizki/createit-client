import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Footer from '../components/General/Footer';
import Loader from '../components/General/Loader';
import DetailService from '../components/Services/DetailService';
import SomethingWrong from '../components/SomethingWrong/SomethingWrong';
import { setToLoad, setToNotLoad, setWentWrong } from '../redux/actions/loader';
import { getServiceBySlug } from '../redux/actions/service';

const ServiceDetail = () => {
    const { slug } = useParams();

    const dispatch = useDispatch();

    const { isLoading, isError } = useSelector(state => state.Loading);

    useEffect(() => {
        dispatch(setToLoad());
        dispatch(getServiceBySlug(slug))
            .then(() => {
                dispatch(setToNotLoad());
            })
            .catch(() => {
                dispatch(setWentWrong());
            });
    }, [dispatch, slug]);

    return (
        <>
            {isLoading ?
                <Loader />
                :
                (isError ?
                    <SomethingWrong />
                    :
                    <>
                        <DetailService slug={slug} />
                        <Footer />
                    </>
                )
            }
        </>
    );
};

export default ServiceDetail;