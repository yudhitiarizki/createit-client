import React, { useState } from 'react';
import './Profile.css';
import Navbar from '../General/Navbar';
import { Link } from 'react-router-dom';
import Edit from '../../asset/Seller/edit.png'
import Avatar from '../../asset/Seller/Hero-section.png'
import Star from './Star';

const Profile = () => {

    return (
            <div className='section-container'>
                <div className='banner'>
                    <Navbar />
                    <div className="profile">
                        <img src={Avatar} className="photo-profile">
                        </img>
                        <div className="detail-profile">
                            <div className="name-profile">
                                <div className="name">
                                    <h1>Ahmad Nan Jamin</h1>
                                </div>
                                <div className='edit-name col-1'>
                                    <Link>
                                        <img className="edit-icon" src={Edit} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="profile-rating row">
                                <Star star={4}/>
                            </div>
                            <div className="profile-description">
                                <p>I have more than 5 years working as a website developer (Mostly CMS Wordpress). I have created more than 50 websites. I have helped many people and companies to create websites that not only look good but work well too.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Profile