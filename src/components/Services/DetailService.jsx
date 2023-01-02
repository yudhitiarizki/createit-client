import { Link, useParams } from "react-router-dom";
import Navbar from "../General/Navbar";
import './DetailService.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// untuk data dummy
import Ellipse107 from '../../asset/ImgDummy/Ellipse107.png';
import Default from '../../asset/ImgDummy/Default.png';
import Packages from "./Packages";

const DetailService = () => {
    const { id } = useParams();

    // data dummy, nanti diganti dari redux
    const service = {
        "serviceId": 1,
        "sellerId": 1,
        "categoryId": 1,
        "firstName": "Ahmad",
        "lastName": "Na Jaemin",
        "photoProfile": Ellipse107,
        "title": "Educational Mobile Apps",
        "description": "Apps for education can make children more interactive, more engaged and perform better. Keeping teaching methods fresh is integral to getting students engaged in their studies and learning apps are a fantastic way of achieving this. Apps are designed with primary input from educators and curriculum developers, or shown in educational research to be an effective learning tool. The apps we cover in this guide are great learning apps not because they're designed to make kids smarter, to drill facts, or to replace in-school learning, but because they’re fun and interesting for kids and adults. We have also compiled a list of the best apps for schools, as well as the best iPad apps and best apps for kids for parents and teachers to enjoy. Check out the best educational apps for teachers, students and educators that are currently available for iOS and Android devices.",
        "slug": "yudhit-1672441379379",
        "Rating": 4.9,
        "noOfBuyer": 7,
        "image": [
            {
                "imageId": 1,
                "serviceId": 1,
                "image": Default,
                "createdAt": "2022-12-30T23:02:59.612Z",
                "updatedAt": "2022-12-30T23:02:59.612Z"
            },
            {
                "imageId": 2,
                "serviceId": 1,
                "image": Default,
                "createdAt": "2022-12-30T23:02:59.615Z",
                "updatedAt": "2022-12-30T23:02:59.615Z"
            },
            {
                "imageId": 3,
                "serviceId": 1,
                "image": Default,
                "createdAt": "2022-12-30T23:02:59.615Z",
                "updatedAt": "2022-12-30T23:02:59.615Z"
            }
        ]
    }

    return (
        <div>
            <div className="detailservice-navbar">
                <Navbar />
            </div>
            <div className="navbar-text1">
                <Link to='/' className="nav-link">Home</Link>
                <i className='bx bx-chevron-right'></i>
                <div>Service List</div>
                <i className='bx bx-chevron-right'></i>
                <div>Service Details</div>
            </div>
            <div className="detailsrvc-seller">
                <img src={service.photoProfile} alt=''></img>
                <Link to={`/seller/${service.sellerId}`} className="nav-link">{service.firstName + ' ' + service.lastName}</Link>
            </div>
            <div className="detailsrvc-carousel">
                <OwlCarousel
                    items={1}
                    nav
                    navText={[
                        "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALdJREFUSEvtlMENwjAQBGc7oBMoAUqgElogHdEBlEA6oYMgS0GyjJNbgvNLno41c7f2Waz8aWU+myBM2I5oGIYdcJHUhdRsgyUY4XfgAHSSrq4kFBTwHjhKejUR/AtPRUx20AI+KWgFrwoKuBs1kqppfC2Oggewt+kpa1eQoIXkCZx+uTl5YdEhfzpZLJmdgxaduIO2uJNQUDmTs6SbewEsQSZJz4QNn51kt8Jon91BBJr6vwnC5N7IPEoZlO97kgAAAABJRU5ErkJggg=='/>",
                        "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKpJREFUSEvt1MERgjAUhOH/dUAnWgJ0YEdSgp1YgpQAndjBOnE4MAyabJQbnDP7zdu8EOz8xc75HEC2YbsiST1wi4hnNh28O5jDr8AIdCWINYGkBhiAUyliAakSF7EBF6kCHOQjIEklW7I4s3nx/wQmoF1v1q8VPYAzsBmepqsC5k3KhlcBTrgNuOE1wAW4f+t8vXn2HUhKyFDyH7InMN/F+7g9gYscQLaxF0YRUhkf9XfKAAAAAElFTkSuQmCC'/>"
                    ]}
                    dots
                    autoplay autoplayHoverPause
                    autoplaySpeed={1}
                >
                    {service.image.map((img) => (
                        <img src={img.image} alt='' key={`id-${img.imageId}`} className='detailsrvc-carouselimg'></img>
                    ))}
                </OwlCarousel>
            </div>
            <div className="detailsrvc-info">
                <div className="detailsrvc-title">{service.title}</div>
                <div className="detailsrvc-desc">Description</div>
                <p>{service.description}</p>
            </div>
            <div className="packages-container">
                <Packages serviceId = {service.serviceId} />
            </div>
        </div>
    )
};

export default DetailService;