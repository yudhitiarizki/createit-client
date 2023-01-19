import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Profile.css';
import { Link } from 'react-router-dom';
import Star from './Star';
import EditProfile from './EditProfile';
import { useSelector } from 'react-redux';

const Profile = () => {
    const { user, isLoggedIn } = useSelector(state => state.auth);
    const seller = useSelector(state => state.seller);

    return (
        <div>
            <div className="profile">
                <img src={seller.photoProfile} alt='' className="photo-profile">
                </img>
                <div className="detail-profile">
                    <div className="name-profile">
                        <div className="name">{seller.firstName} {seller.lastName}</div>

                        {isLoggedIn ? (seller.userId === user.userId) ?
                            <Link className='edit-name nav-link' type="button" data-bs-toggle="modal" data-bs-target="#EditProfile">
                                <i className='bx bxs-edit'></i>
                            </Link>
                            : null
                            : null
                        }

                    </div>
                    <div className="profile-rating row">
                        <Star star={seller.rating || 0} className={'icon-style'} />
                    </div>
                    <div className="profile-description">
                        <p>{seller.description}</p>
                    </div>
                </div>
            </div>
            <div className='banner'></div>

            <EditProfile data={seller} />
        </div>
    )
}

export default Profile