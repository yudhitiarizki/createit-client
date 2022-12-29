import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './HomePage.css';
import Pose10 from '../../asset/HomePage/Pose10.png';
import Navbar from '../General/Navbar';
import Searchbox from '../General/Searchbox';

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
                <div className='text1-1'>Category List</div>
                <div className='text1-2'>Here Is The List Of Services Category We Have, Look It Up!</div>
            </div>
        </div>
    )
}

export default HomePage;