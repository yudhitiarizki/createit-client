import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './HomePage.css';
import Pose10 from '../../asset/HomePage/Pose10.png';
import Navbar from '../General/Navbar';

const HomePage = () => {
    return (
        <div>
            <div className='top-container'>
                <div className='Banner1'>
                    <Navbar />
                    <div className='ellipse1'>
                        <img src={Pose10} alt='' className='pose1'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;