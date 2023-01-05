import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Profile.css';
import Navbar from '../General/Navbar';
import { Link } from 'react-router-dom';
import Edit from '../../asset/Seller/edit.png'
import Avatar from '../../asset/Seller/Hero-section.png'
import Star from './Star';
import EditProfile from './EditProfile';

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
                                    <Link type="button" data-bs-toggle="modal" data-bs-target="#EditService">
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
                <EditProfile />
            </div>
    )
}

export default Profile