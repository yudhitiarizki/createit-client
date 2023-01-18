import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import './TopRatedServices.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const TopRatedServices = () => {
    const { service } = useSelector(state => state.service);

    return (
        <div className='toprated-container'>
            {service.map(({
                serviceId,
                image,
                slug,
                rating,
                noOfBuyer,
                photoProfile,
                sellerId,
                firstName,
                lastName,
                title,
                startingPrice
            }) => (
                <div className='topratedservc-cntr' key={`id-${serviceId}`}>
                    <Link className='toprated-imgcntr' to={`/service/${slug}`}>
                        <img src={image} alt={1} className='toprated-img'></img>
                        <div className='toprated-ratebuy'>
                            <div><i className='bx bx-star'></i>{rating || 0}</div>
                            <div><i className='bx bx-group'></i>{noOfBuyer || 0}</div>
                        </div>
                    </Link>
                    <div className='toprated-info'>
                        <div className='toprated-infotop'>
                            <div className='topratedinfotop-profile'>
                                <img src={photoProfile} alt={1}></img>
                                <Link to={`/seller/${sellerId}`} className='nav-link link2'>{firstName} {lastName}</Link>
                            </div>
                            <Link to={`/service/${slug}`} className='nav-link link2 link3'>{title}</Link>
                        </div>
                        <div className='toprated-infobot'>
                            <div>
                                <i className='bx bx-dollar-circle'></i>
                                {(startingPrice % 1000 === 0) ? (
                                    <span>Start from Rp {startingPrice/1000}.000,-</span>
                                ) : (
                                    <span>Start from Rp {startingPrice/1000},-</span>
                                )}
                            </div>
                            <Link to={`/service/${slug}`}><i className='bx bx-right-arrow-alt toprated-rightarrow'></i></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TopRatedServices;