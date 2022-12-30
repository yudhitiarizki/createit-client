import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './HomePage.css';
import Pose10 from '../../asset/HomePage/Pose10.png';
import Navbar from '../General/Navbar';
import Searchbox from '../General/Searchbox';
import CategoryListHome from './CategoryListHome';
import TopRatedServices from './TopRatedServices';
import Feature from '../../asset/HomePage/Feature.png';
import { Link } from 'react-router-dom';
import Footer from '../General/Footer';

const HomePage = () => {
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
                        <Searchbox />
                    </div>
                </div>
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
                            <spann>Here's How To Do It!</spann>
                        </div>
                        <div className='gettingstartedasseller'>Choosing what you work on and the clients you work with, and earning potential!</div>
                    </div>
                    <Link to='/applyseller' className='nav-link applyseller-btn'>Start Now!</Link>
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
            <Footer />
        </div>
    )
}

export default HomePage;