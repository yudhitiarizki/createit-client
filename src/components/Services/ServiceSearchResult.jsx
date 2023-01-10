import { Link } from 'react-router-dom';
import '../Home/HomeSearchResult.css';

const ServiceSearchResult = ({ data, message }) => {
    return (
        <div>
            {message && <div className='searchhome-msg'>{message}</div>}

            <div className='srchhomeresult-cntr'>
                {data.map(item => (
                    <div className="serviceslist22-box" key={`id-${item.serviceId}`}>
                        <Link className="service1imgcntr22" to={`/service/${item.slug}`}>
                            <img src={item.image} alt='' className="servicelist22-img"></img>
                            <div className='toprated-ratebuy22'>
                                <div><i className='bx bx-star'></i>{item.rating}</div>
                                <div><i className='bx bx-group'></i>{item.noOfBuyer}</div>
                            </div>
                        </Link>
                        <div className="servicelist22-info">
                            <div className="service22-info1">
                                <div className="service22-info2">
                                    <img src={item.photoProfile} alt=''></img>
                                    <Link to={`/seller/${item.sellerId}`} className='nav-link'>{item.firstName} {item.lastName}</Link>
                                </div>
                                <Link to={`/service/${item.slug}`} className="service22-info3 nav-link">{item.title}</Link>
                            </div>
                            <div className="service22-info4">
                                <i className='bx bx-dollar-circle'></i>
                                {(item.startingPrice % 1000 === 0) ? (
                                    <span>Start from Rp {item.startingPrice / 1000}.000,-</span>
                                ) : (
                                    <span>Start from Rp {item.startingPrice / 1000},-</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ServiceSearchResult;