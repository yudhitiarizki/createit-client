import './PageNotFound.css';
import notfound from '../../asset/NotFound/notfound.svg';

const PageNotFound = () => {
    return (
        <div>
            <div className='notfound-bg'>
                <img src={notfound} className='not-found-icon' alt='' />
            </div>
        </div>
    )
};

export default PageNotFound;