import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CategoryListHome from './CategoryListHome';
import TopRatedServices from './TopRatedServices';
import HomeSearchResult from './HomeSearchResult';

import { sendMessage } from '../../redux/actions/message';

import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();

    const { isLoggedIn, user } = useSelector(state => state.auth);
    const { allservice } = useSelector(state => state.service);
    const [srchResult, setSrchResult] = useState([]);
    const [searchkey, setSearchkey] = useState('');
    const [srchMsg, setSrchMsg] = useState('');
    const [searchDisplay, setSearchDisplay] = useState('none');

    const toApplySellerPage = useCallback(() => {
        if (isLoggedIn) {
            if (user.role === 1) {
                navigate('/applyseller');
            } else if (user.role === 3) {
                sendMessage('error', "Admin can't access this page.");
            } else {
                sendMessage('error', 'You already become a seller.');
            }
        } else {
            navigate('/login');
        }
    }, [isLoggedIn, user, navigate])

    useEffect(() => {
        if (!searchkey) {
            setSrchResult([]);
            setSrchMsg('');
            setSearchDisplay('none');
        }
    }, [searchkey]);

    const regexSearch = useMemo(() => new RegExp(`.*(${searchkey.toUpperCase()}).*`), [searchkey]);

    const handleSearch = useCallback(() => {
        if (searchkey) {
            const filtered = allservice.filter(item => regexSearch.exec(item.title.toUpperCase()));
            setSrchResult(filtered);

            if (filtered.length === 0) {
                setSrchMsg('Data not found.')
            } else {
                setSrchMsg('');
            }

            setSearchDisplay('flex');
        } else {
            setSrchResult([]);
            setSrchMsg('');
            setSearchDisplay('none');
        }
    }, [searchkey, allservice, regexSearch]);

    const handleScrollToTop = useCallback(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <div>
            <div className='top-container'>
                <div className='Banner1'>
                    <div className='ellipse1'>
                        <img src="https://ik.imagekit.io/createit/Pose10.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674640770720" alt={1} loading="lazy" className='pose1'></img>
                    </div>
                    <div className='text1-container'>
                        <div className='text1-1'>It's Nothing But Service</div>
                        <div className='text1-2'>Get The Best IT Service Only In Create IT!</div>
                    </div>
                    <div className='searchbox-cntr'>
                        <div className="search-container1">
                            <input type="text" placeholder="Search..." value={searchkey} onChange={(event) => setSearchkey(event.target.value)} className="search-input1" />
                            <div type="button" className="search-button1" onClick={handleSearch}>Search</div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='srchresult' style={{ 'display': `${searchDisplay}` }} className='srchresult-cntr'>
                <HomeSearchResult data={srchResult} message={srchMsg} />
            </div>

            <div className='textcategory-container'>
                <div className='text2-1'>Category List</div>
                <div className='text2-2'>Here Is The List Of Services Category We Have, Look It Up!</div>
            </div>
            <CategoryListHome />
            <div className='homepage-center'>
                <div className='textcontainer-2'>
                    <div className='text2-1'>Top Rated Services</div>
                    <div className='text2-2'>Here Are The Top-Rate Services From The Previous Month</div>
                </div>
                <TopRatedServices />
                <div className='applyasseller-homepage'>
                    <div className='gettingstartedasseller'>Getting Started as Seller!</div>
                    <div className='text-applyseller'>
                        <div className='text-applyseller2'>
                            <span>Freelance Work While Studying?</span>
                            <span>Here's How To Do It!</span>
                        </div>
                        <div className='gettingstartedasseller'>Choosing what you work on and the clients you work with, and earning potential!</div>
                    </div>
                    <div type='button' className='applyseller-btn' onClick={toApplySellerPage}>Start Now!</div>
                </div>
            </div>
            <div className='text4container'>
                <img src="https://ik.imagekit.io/createit/Feature.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674640894247" alt={1} loading="lazy"></img>
                <div className='text5-container'>
                    <div className='text5-1-cntr'>
                        <div className='text5-1'>Our Awesome Create IT Features!</div>
                        <div className='text5-2'>We have many categories of services that you can get easily, find professional frelancers, and order services trustworthy</div>
                    </div>
                    <div type='button' onClick={handleScrollToTop} className='nav-link getservice-btn'>Get Service</div>
                </div>
            </div>
            <div className="tutorials">

                <div className='text5-1'>Confused? Let's see the Video Tutorial <span>Create it!</span></div>
                <div className='center-text-5'>Visit Create it and watch our video tutorials if you are confused. We will guide you step by step to create something interesting</div>
                <iframe src="https://www.youtube.com/embed/foGZ3SqQntY" title="YouTube video player" frameborder="0" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default HomePage;