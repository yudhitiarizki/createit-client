import React from "react";
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './ApplySeller.css';

import RegSellerForm from './RegSellerForm';

const ApplySeller = ({ handleSubmit }) => {
    return (
        <div>
            <div className='top-container1'>
                <div className='Banner1-1'>
                    <div className='ellipse1-1'>
                        <img src="https://ik.imagekit.io/createit/Group12.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674641856868" alt={1} loading="lazy" className='group12'></img>
                    </div>
                    <div className='nav-seller1'>
                        <Link to='/' className='nav-link'>Home</Link>
                        <i className='bx bx-chevron-right'></i>
                        <span>Seller</span>
                    </div>
                    <div className='text6'>
                        <div className='text6-1'>Freelance Work While Studying? Here's How To Do It!</div>
                        <div className='text6-2'>Getting Start as Seller!</div>
                    </div>
                </div>
            </div>

            <div className='applyseller-cntrmid'>
                <div className='cntrmid-moto'>
                    <div className='text6-3'>Seller Benefits</div>
                    <div className='text6-4'>Join with us to be a seller, and claim your benefits</div>
                </div>
                <div className='cntrmid-benefit'>
                    <div className='midbenefit-row1'>
                        <div className='midbenefit-box'>
                            <img src="https://ik.imagekit.io/createit/money-recive.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674641853083" alt={1} loading="lazy"></img>
                            <div>Multiple Sources of Income</div>
                        </div>
                        <div className='midbenefit-box'>
                            <img src="https://ik.imagekit.io/createit/bag-timer.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674641808044" alt={1} loading="lazy"></img>
                            <div>Flexible Hours</div>
                        </div>
                        <div className='midbenefit-box'>
                            <img src="https://ik.imagekit.io/createit/frame.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674641854484" alt={1} loading="lazy"></img>
                            <div>Self-Management</div>
                        </div>
                    </div>
                    <div className='midbenefit-row1'>
                        <div className='midbenefit-box'>
                            <img src="https://ik.imagekit.io/createit/building-3.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674641852270" alt={1} loading="lazy"></img>
                            <div>Location Flexibility</div>
                        </div>
                        <div className='midbenefit-box'>
                            <img src="https://ik.imagekit.io/createit/folder-favorite.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674641853209" alt={1} loading="lazy"></img>
                            <div>Choose the Work You Want</div>
                        </div>
                        <div className='midbenefit-box'>
                            <img src="https://ik.imagekit.io/createit/book.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674641853999" alt={1} loading="lazy"></img>
                            <div>Build Up Interpersonal Skills</div>
                        </div>
                    </div>
                    <div className='midbenefit-row2'>
                        <div className='midbenefit-box'>
                            <img src="https://ik.imagekit.io/createit/code-circle.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674641853139" alt={1} loading="lazy"></img>
                            <div>Improved Skill Set</div>
                        </div>
                        <div className='midbenefit-box'>
                            <img src="https://ik.imagekit.io/createit/calendar.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674641854210" alt={1} loading="lazy"></img>
                            <div>Variety in Daily Activities</div>
                        </div>
                    </div>
                </div>
            </div>
            <RegSellerForm handleSubmit={handleSubmit} />
        </div>
    )
};

export default ApplySeller;