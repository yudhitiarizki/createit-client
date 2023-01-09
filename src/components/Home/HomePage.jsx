import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './HomePage.css';
import Pose10 from '../../asset/HomePage/Pose10.svg';
import Navbar from '../General/Navbar';
import CategoryListHome from './CategoryListHome';
import TopRatedServices from './TopRatedServices';
import Feature from '../../asset/HomePage/Feature.svg';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeSearchResult from './HomeSearchResult';

const HomePage = () => {
    const navigate = useNavigate();
    const { isLoggedIn, user } = useSelector(state => state.auth);
    const [srchResult, setSrchResult] = useState([]);
    const [searchkey, setSearchkey] = useState('');
    const [srchMsg, setSrchMsg] = useState('');

    const toApplySellerPage = () => {
        if (isLoggedIn) {
            if (user.role === 1) {
                navigate('/applyseller');
            } else if (user.role === 3) {
                toast.error("Admin can't access this page.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                toast.error('You already become a seller.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } else {
            toast.error('Login is needed.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const service = [
        {
            "serviceId": 2,
            "sellerId": 2,
            "categoryId": 2,
            "title": "Web Application",
            "description": "Desain mantap harga Top",
            "slug": "desain-art-1672662557514",
            "createdAt": "2023-01-02T12:29:17.514Z",
            "updatedAt": "2023-01-02T12:29:17.514Z",
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            rating: 4.9,
            noOfBuyer: 79,
            startingPrice: 59999,
            "ServiceImages": [
                {
                    "image": "http://coal-jolly-single.glitch.me/public/uploads/images/images-1672662557528.png"
                }
            ],
            "Seller": {
                "sellerId": 2,
                "userId": 2,
                "photoProfile": "http://coal-jolly-single.glitch.me/public/uploads/images/images-1672662543893.png",
                "description": "Penyedia desain Website untuk para UMKM",
                "noRekening": "0123123123",
                "bankName": "BCA",
                "cardHolder": "Yudhitia",
                "isVerified": 1,
                "createdAt": "2023-01-02T12:29:03.916Z",
                "updatedAt": "2023-01-08T17:48:25.506Z"
            }
        },
        {
            "serviceId": 1,
            "sellerId": 2,
            "categoryId": 2,
            "title": "Mobile application",
            "description": "Desain mantap harga Top",
            "slug": "desain-art-1672662557514",
            "createdAt": "2023-01-02T12:29:17.514Z",
            "updatedAt": "2023-01-02T12:29:17.514Z",
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            rating: 4.9,
            noOfBuyer: 79,
            startingPrice: 60000,
            "ServiceImages": [
                {
                    "image": "http://coal-jolly-single.glitch.me/public/uploads/images/images-1672662557528.png"
                }
            ],
            "Seller": {
                "sellerId": 2,
                "userId": 2,
                "photoProfile": "http://coal-jolly-single.glitch.me/public/uploads/images/images-1672662543893.png",
                "description": "Penyedia desain Website untuk para UMKM",
                "noRekening": "0123123123",
                "bankName": "BCA",
                "cardHolder": "Yudhitia",
                "isVerified": 1,
                "createdAt": "2023-01-02T12:29:03.916Z",
                "updatedAt": "2023-01-08T17:48:25.506Z"
            }
        },
        {
            "serviceId": 5,
            "sellerId": 2,
            "categoryId": 2,
            "title": "Book Cover Design",
            "description": "Desain mantap harga Top",
            "slug": "desain-art-1672662557514",
            "createdAt": "2023-01-02T12:29:17.514Z",
            "updatedAt": "2023-01-02T12:29:17.514Z",
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            rating: 4.9,
            noOfBuyer: 79,
            startingPrice: 79999,
            "ServiceImages": [
                {
                    "image": "http://coal-jolly-single.glitch.me/public/uploads/images/images-1672662557528.png"
                }
            ],
            "Seller": {
                "sellerId": 2,
                "userId": 2,
                "photoProfile": "http://coal-jolly-single.glitch.me/public/uploads/images/images-1672662543893.png",
                "description": "Penyedia desain Website untuk para UMKM",
                "noRekening": "0123123123",
                "bankName": "BCA",
                "cardHolder": "Yudhitia",
                "isVerified": 1,
                "createdAt": "2023-01-02T12:29:03.916Z",
                "updatedAt": "2023-01-08T17:48:25.506Z"
            }
        },
        {
            "serviceId": 3,
            "sellerId": 2,
            "categoryId": 2,
            "title": "Logo Design",
            "description": "Desain mantap harga Top",
            "slug": "desain-art-1672662557514",
            "createdAt": "2023-01-02T12:29:17.514Z",
            "updatedAt": "2023-01-02T12:29:17.514Z",
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            rating: 5,
            noOfBuyer: 93,
            startingPrice: 80000,
            "ServiceImages": [
                {
                    "image": "http://coal-jolly-single.glitch.me/public/uploads/images/images-1672662557528.png"
                }
            ],
            "Seller": {
                "sellerId": 2,
                "userId": 2,
                "photoProfile": "http://coal-jolly-single.glitch.me/public/uploads/images/images-1672662543893.png",
                "description": "Penyedia desain Website untuk para UMKM",
                "noRekening": "0123123123",
                "bankName": "BCA",
                "cardHolder": "Yudhitia",
                "isVerified": 1,
                "createdAt": "2023-01-02T12:29:03.916Z",
                "updatedAt": "2023-01-08T17:48:25.506Z"
            }
        },
        {
            "serviceId": 9,
            "sellerId": 2,
            "categoryId": 2,
            "title": "Brocure Design",
            "description": "Desain mantap harga Top",
            "slug": "desain-art-1672662557514",
            "createdAt": "2023-01-02T12:29:17.514Z",
            "updatedAt": "2023-01-02T12:29:17.514Z",
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            rating: 4.9,
            noOfBuyer: 38,
            startingPrice: 80000,
            "ServiceImages": [
                {
                    "image": "http://coal-jolly-single.glitch.me/public/uploads/images/images-1672662557528.png"
                }
            ],
            "Seller": {
                "sellerId": 2,
                "userId": 2,
                "photoProfile": "http://coal-jolly-single.glitch.me/public/uploads/images/images-1672662543893.png",
                "description": "Penyedia desain Website untuk para UMKM",
                "noRekening": "0123123123",
                "bankName": "BCA",
                "cardHolder": "Yudhitia",
                "isVerified": 1,
                "createdAt": "2023-01-02T12:29:03.916Z",
                "updatedAt": "2023-01-08T17:48:25.506Z"
            }
        },
        {
            "serviceId": 8,
            "sellerId": 2,
            "categoryId": 2,
            "title": "UI/UX Design",
            "description": "Desain mantap harga Top",
            "slug": "desain-art-1672662557514",
            "createdAt": "2023-01-02T12:29:17.514Z",
            "updatedAt": "2023-01-02T12:29:17.514Z",
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            rating: 4.8,
            noOfBuyer: 37,
            startingPrice: 80000,
            "ServiceImages": [
                {
                    "image": "http://coal-jolly-single.glitch.me/public/uploads/images/images-1672662557528.png"
                }
            ],
            "Seller": {
                "sellerId": 2,
                "userId": 2,
                "photoProfile": "http://coal-jolly-single.glitch.me/public/uploads/images/images-1672662543893.png",
                "description": "Penyedia desain Website untuk para UMKM",
                "noRekening": "0123123123",
                "bankName": "BCA",
                "cardHolder": "Yudhitia",
                "isVerified": 1,
                "createdAt": "2023-01-02T12:29:03.916Z",
                "updatedAt": "2023-01-08T17:48:25.506Z"
            }
        }
    ]

    useEffect(() => {
        if(!searchkey) {
            setSrchResult([]);
            setSrchMsg('');
            document.getElementById('srchresult').style.display = 'none';
        }
    }, [searchkey]);

    const regexSearch = new RegExp(`.*(${searchkey.toUpperCase()}).*`);
    
    const handleSearch = () => {
        if(searchkey) {
            const filtered = service.filter(item => regexSearch.exec(item.title.toUpperCase()));
            setSrchResult(filtered);
            
            if (filtered.length === 0) {
                setSrchMsg('Data not found.')
            } else {
                setSrchMsg('');
            }

            document.getElementById('srchresult').style.display = 'flex';
        } else {
            setSrchResult([]);
            setSrchMsg('');
            document.getElementById('srchresult').style.display = 'none';
        }
    };

    return (
        <div>
            <div className='top-container'>
                <div className='Banner1'>
                    <Navbar />
                    <div className='ellipse1'>
                        <img src={Pose10} alt='' className='pose1'></img>
                    </div>
                    <div className='text1-container'>
                        <div className='text1-1'>It's Nothing But Service</div>
                        <div className='text1-2'>Get The Best IT Service Only In Create IT!</div>
                    </div>
                    <div className='searchbox-cntr'>
                        <div className="search-container1">
                            <input type="text" placeholder="Search..." value={searchkey} onChange={(event) => { setSearchkey(event.target.value) }} className="search-input1" />
                            <div type="button" className="search-button1" onClick={handleSearch}>Search</div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='srchresult' style={{'display': 'none'}} className='srchresult-cntr'>
                <HomeSearchResult data={srchResult} message={srchMsg}/>
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
                <img src={Feature} alt=''></img>
                <div className='text5-container'>
                    <div className='text5-1-cntr'>
                        <div className='text5-1'>Our Awesome Create IT Features!</div>
                        <div className='text5-2'>We have many categories of services that you can get easily, find professional frelancers, and order services trustworthy</div>
                    </div>
                    <Link to='/' className='nav-link getservice-btn'>Get Service</Link>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default HomePage;