import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Profile.css';
import Navbar from '../General/Navbar';
import { Link } from 'react-router-dom';
import Edit from '../../asset/Seller/edit.png'
import Avatar from '../../asset/Seller/Hero-section.png'
import Star from './Star';
import EditProfile from './EditProfile';
import { useSelector } from 'react-redux';

const Profile = ({ seller }) => {
    const { user } = useSelector(state => state.auth);

    return (
            <div className='section-container'>
                <div className='banner'>
                    <Navbar />
                    <div className="profile">
                        <img src={seller.photoProfile} className="photo-profile">
                        </img>
                        <div className="detail-profile">
                            <div className="name-profile">
                                <div className="name">
                                    <h1>{seller.firstName} {seller.lastName}</h1>
                                </div>

                                {(seller.userId === user.userId) ? 
                                <div className='edit-name col-1'>
                                    <Link type="button" data-bs-toggle="modal" data-bs-target="#EditService">
                                        <img className="edit-icon" src={Edit} alt="" />
                                    </Link>
                                </div>
                                : null }
                            </div>
                            <div className="profile-rating row">
                                <Star star={seller.rating}/>
                            </div>
                            <div className="profile-description">
                                <p>{seller.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <EditProfile seller={seller}/>
            </div>
    )
}

export default Profile