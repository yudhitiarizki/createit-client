import './TopRatedServices.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from 'react-router-dom';
import Ellipse107 from '../../asset/ImgDummy/Ellipse107.png';
import Rectangle14 from '../../asset/ImgDummy/Rectangle14.png';

const TopRatedServices = () => {
    // pakai axios get /toprated
    const topRatedServices = [
        {
            "serviceId": 3,
            "sellerId": 5,
            "sellerName": "Ahmad Na Jaemin",
            "photoProfile": Ellipse107,
            "title": "I will design a modern minimalist logo",
            "image": [Rectangle14, Rectangle14],
            "rating": 5,
            "noOfBuyers": 80,
            "startingPrice": 40000
        },
        {
            "serviceId": 2,
            "sellerId": 5,
            "sellerName": "Ahmad Na Jaemin",
            "photoProfile": Ellipse107,
            "title": "I will design a modern minimalist logo",
            "image": [Rectangle14, Rectangle14],
            "rating": 4.9,
            "noOfBuyers": 78,
            "startingPrice": 50000
        },
        {
            "serviceId": 1,
            "sellerId": 2,
            "sellerName": "Ahmad Na Jaemin",
            "photoProfile": Ellipse107,
            "title": "I will design a modern minimalist logo",
            "image": [Rectangle14, Rectangle14],
            "rating": 4.9,
            "noOfBuyers": 50,
            "startingPrice": 40000
        },
        {
            "serviceId": 4,
            "sellerId": 2,
            "sellerName": "Ahmad Na Jaemin",
            "photoProfile": Ellipse107,
            "title": "I will design a modern minimalist logo",
            "image": [Rectangle14, Rectangle14],
            "rating": 4.9,
            "noOfBuyers": 35,
            "startingPrice": 40000
        },
        {
            "serviceId": 5,
            "sellerId": 9,
            "sellerName": "Ahmad Na Jaemin",
            "photoProfile": Ellipse107,
            "title": "I will design a modern minimalist logo",
            "image": [Rectangle14, Rectangle14],
            "rating": 4.8,
            "noOfBuyers": 35,
            "startingPrice": 40000
        },
        {
            "serviceId": 6,
            "sellerId": 6,
            "sellerName": "Ahmad Na Jaemin",
            "photoProfile": Ellipse107,
            "title": "I will design a modern minimalist logo",
            "image": [Rectangle14, Rectangle14],
            "rating": 4.8,
            "noOfBuyers": 35,
            "startingPrice": 40000
        },
        {
            "serviceId": 7,
            "sellerId": 9,
            "sellerName": "Ahmad Na Jaemin",
            "photoProfile": Ellipse107,
            "title": "I will design a modern minimalist logo",
            "image": [Rectangle14, Rectangle14],
            "rating": 4.7,
            "noOfBuyers": 25,
            "startingPrice": 40000
        }
    ];

    return (
        <div className='toprated-container'>
            {topRatedServices.slice(0,6).map((service) => (
                <div className='topratedservc-cntr'>
                    <Link className='toprated-imgcntr' to={`/service/${service.serviceId}`}>
                        <img src={service.image[0]} alt='' className='toprated-img'></img>
                        <div className='toprated-ratebuy'>
                            <div><i className='bx bx-star'></i>{service.rating}</div>
                            <div><i className='bx bx-group'></i>{service.noOfBuyers}</div>
                        </div>
                    </Link>
                    <div className='toprated-info'>
                        <div className='toprated-infotop'>
                            <div className='topratedinfotop-profile'>
                                <img src={service.photoProfile} alt=''></img>
                                <Link to={`/seller/${service.sellerId}`} className='nav-link link2'>{service.sellerName}</Link>
                            </div>
                            <Link to={`/service/${service.serviceId}`} className='nav-link link2 link3'>{service.title}</Link>
                        </div>
                        <div className='toprated-infobot'>
                            <div>
                                <i className='bx bx-dollar-circle'></i>
                                <span>Start from Rp {service.startingPrice}</span>
                            </div>
                            <Link to={`/service/${service.serviceId}`}><i className='bx bx-right-arrow-alt toprated-rightarrow'></i></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TopRatedServices;