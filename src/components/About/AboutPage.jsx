import './AboutPage.css';
import '../Services/DetailService.css';
import Pose13 from '../../asset/About/Pose13.svg';

const AboutPage = () => {
    return (
        <div>
            <div className='aboutpage-bg'>
                <img src={Pose13} alt='' className='aboutpage-person'/>
                <div className='about-info'>
                    <div className='aboutinfo-title'>What is "<span>Create it.</span>"?</div>
                    <div className='aboutinfo-cntn'>"Create it" is a website to find trusted IT services from users to users. Users can register to become sellers and offer their services in the IT field.</div>
                </div>
            </div>
        </div>
    )
};


export default AboutPage;