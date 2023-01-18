import { Link } from 'react-router-dom';
import './HomeSearchResult.css';

const HomeSearchResult = ({ data, message }) => {
    return (
        <div>
            {message && <div className='searchhome-msg'>{message}</div>}

            {data.length !== 0 ?
                <div className='srchhomeresult-cntr'>
                    {data.map(({
                        serviceId,
                        slug,
                        ServiceImages,
                        rating,
                        noOfBuyer,
                        photoProfile,
                        sellerId,
                        firstName,
                        lastName,
                        title,
                        startingPrice
                    }) => (
                        <div className="serviceslist22-box" key={`id-${serviceId}`}>
                            <Link className="service1imgcntr22" to={`/service/${slug}`}>
                                <img src={ServiceImages[0].image} alt={1} className="servicelist22-img"></img>
                                <div className='toprated-ratebuy22'>
                                    <div><i className='bx bx-star'></i>{rating || 0}</div>
                                    <div><i className='bx bx-group'></i>{noOfBuyer || 0}</div>
                                </div>
                            </Link>
                            <div className="servicelist22-info">
                                <div className="service22-info1">
                                    <div className="service22-info2">
                                        <img src={photoProfile} alt={1}></img>
                                        <Link to={`/seller/${sellerId}`} className='nav-link'>{firstName} {lastName}</Link>
                                    </div>
                                    <Link to={`/service/${slug}`} className="service22-info3 nav-link">{title}</Link>
                                </div>
                                <div className="service22-info4">
                                    <i className='bx bx-dollar-circle'></i>
                                    {(startingPrice % 1000 === 0) ? (
                                        <span>Start from Rp {startingPrice / 1000}.000,-</span>
                                    ) : (
                                        <span>Start from Rp {startingPrice / 1000},-</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                : null}
        </div>
    )
}

export default HomeSearchResult;