import './Footer.css';
import facebook from '../../asset/Footer/facebook.png';
import instagram from '../../asset/Footer/instagram.png';
import twitter from '../../asset/Footer/twitter.png';
import youtube from '../../asset/Footer/Vector.png';
import Frame210 from '../../asset/Footer/Frame210.png';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-flex'>
                <div className='footer-medsos'>
                    <img src={instagram} alt=''></img>
                    <img src={facebook} alt=''></img>
                    <img src={youtube} alt=''></img>
                    <img src={twitter} alt=''></img>
                </div>
                <img src={Frame210} alt=''></img>
            </div>
        </div>
    )
};

export default Footer;