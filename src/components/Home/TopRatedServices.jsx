import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopService } from "../../redux/actions/service";

import './TopRatedServices.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from 'react-router-dom';

const TopRatedServices = () => {

    const dispatch = useDispatch();

    const { service } = useSelector(state => state.service);

    useEffect(() => {
        dispatch(getTopService());
    }, [dispatch]);

    return (
        <div className='toprated-container'>
            {service.map((service) => (
                <div className='topratedservc-cntr' key={`id-${service.serviceId}`}>
                    <Link className='toprated-imgcntr' to={`/service/${service.slug}`}>
                        <img src={service.image} alt='' className='toprated-img'></img>
                        <div className='toprated-ratebuy'>
                            <div><i className='bx bx-star'></i>{service.rating ? service.rating : 0}</div>
                            <div><i className='bx bx-group'></i>{service.noOfBuyer}</div>
                        </div>
                    </Link>
                    <div className='toprated-info'>
                        <div className='toprated-infotop'>
                            <div className='topratedinfotop-profile'>
                                <img src={service.photoProfile} alt=''></img>
                                <Link to={`/seller/${service.sellerId}`} className='nav-link link2'>{service.firstName} {service.lastName}</Link>
                            </div>
                            <Link to={`/service/${service.slug}`} className='nav-link link2 link3'>{service.title}</Link>
                        </div>
                        <div className='toprated-infobot'>
                            <div>
                                <i className='bx bx-dollar-circle'></i>
                                <span>Start from Rp {service.startingPrice}</span>
                            </div>
                            <Link to={`/service/${service.slug}`}><i className='bx bx-right-arrow-alt toprated-rightarrow'></i></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TopRatedServices;