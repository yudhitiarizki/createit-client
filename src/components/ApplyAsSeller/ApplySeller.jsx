import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from '../General/Navbar';
import './ApplySeller.css';
import Group12 from '../../asset/Seller/Group12.svg';
import MoneyReceive from '../../asset/Seller/money-recive.png';
import BagTimer from '../../asset/Seller/bag-timer.png';
import Frame from '../../asset/Seller/frame.png';
import Building3 from '../../asset/Seller/building-3.png';
import FolderFavorite from '../../asset/Seller/folder-favorite.png';
import book from '../../asset/Seller/book.png';
import codecircle from '../../asset/Seller/code-circle.png';
import calendar from '../../asset/Seller/calendar.png';
import { Link } from 'react-router-dom';
import RegSellerForm from './RegSellerForm';
import { Navigate } from 'react-router-dom';

const ApplySeller = () => {
    // ini nanti dari redux
    const isLoggedIn = true;
    const user = {
        "username": "Ahmad Na Jaemin",
        "email": "User1@gmail.com",
        "role": 2,
        "phoneNumber": "081972197028",
        "token": "xsh38hjddnwkdj82"
    };

    if(isLoggedIn) {
        if (user.role !== 1) {
            return <Navigate to='/' />
        }
    } else {
        return <Navigate to='/' />
    }

    return (
        <div>
            <div className='top-container1'>
                <div className='Banner1-1'>
                    <Navbar />
                    <div className='ellipse1-1'>
                        <img src={Group12} alt='' className='group12'></img>
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
                            <img src={MoneyReceive} alt=''></img>
                            <div>Multiple Sources of Income</div>
                        </div>
                        <div className='midbenefit-box'>
                            <img src={BagTimer} alt=''></img>
                            <div>Flexible Hours</div>
                        </div>
                        <div className='midbenefit-box'>
                            <img src={Frame} alt=''></img>
                            <div>Self-Management</div>
                        </div>
                    </div>
                    <div className='midbenefit-row1'>
                        <div className='midbenefit-box'>
                            <img src={Building3} alt=''></img>
                            <div>Location Flexibility</div>
                        </div>
                        <div className='midbenefit-box'>
                            <img src={FolderFavorite} alt=''></img>
                            <div>Choose the Work You Want</div>
                        </div>
                        <div className='midbenefit-box'>
                            <img src={book} alt=''></img>
                            <div>Build Up Interpersonal Skills</div>
                        </div>
                    </div>
                    <div className='midbenefit-row2'>
                        <div className='midbenefit-box'>
                            <img src={codecircle} alt=''></img>
                            <div>Improved Skill Set</div>
                        </div>
                        <div className='midbenefit-box'>
                            <img src={calendar} alt=''></img>
                            <div>Variety in Daily Activities</div>
                        </div>
                    </div>
                </div>
            </div>

            <RegSellerForm />
        </div>
    )
};

export default ApplySeller;