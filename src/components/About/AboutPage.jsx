import './AboutPage.css';
import '../Services/DetailService.css';

const AboutPage = () => {
    return (
        <div>
            <div className='aboutpage-bg'>
                <img src="https://ik.imagekit.io/createit/Pose13.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674641348056" alt='' className='aboutpage-person'/>
                <div className='about-info'>
                    <div className='aboutinfo-title'>What is "<span>Create it.</span>"?</div>
                    <div className='aboutinfo-cntn'>"Create it" is a website to find trusted IT services from users to users. Users can register to become sellers and offer their services in the IT field.</div>
                </div>
            </div>
        </div>
    )
};


export default AboutPage;