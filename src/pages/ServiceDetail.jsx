import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';

import { setToLoad, setToNotLoad, setWentWrong } from '../redux/actions/loader';
import { getServiceBySlug } from '../redux/actions/service';

import Packages from "../components/Packages/Packages";
import ReviewsList from "../components/Services/ReviewsList";
import SomethingWrong from '../components/SomethingWrong/SomethingWrong';
import Footer from '../components/General/Footer';
import Loader from '../components/General/Loader';

import '../components/Services/DetailService.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const ServiceDetail = () => {
    const { slug } = useParams();

    const dispatch = useDispatch();

    const { isLoading, isError } = useSelector(state => state.Loading);
    const { detail } = useSelector(state => state.service);

    useEffect(() => {
        dispatch(setToLoad());
        dispatch(getServiceBySlug(slug))
            .then(() => {
                dispatch(setToNotLoad());
            })
            .catch(() => {
                dispatch(setWentWrong());
            });
    }, [dispatch, slug]);

    console.log(detail)

    return (
        <>
            {isLoading ?
                <Loader />
                :
                (isError ?
                    <SomethingWrong />
                    :
                    <>
                        <div>
                            <div className="navbar-text1">
                                <Link to='/' className="nav-link">Home</Link>
                                <i className='bx bx-chevron-right'></i>
                                <div>Service List</div>
                                <i className='bx bx-chevron-right'></i>
                                <div>Service Details</div>
                            </div>

                            <div className="detailsrvc-seller">
                                <img src={detail.photoProfile} alt={1}></img>
                                <Link to={`/seller/${detail.sellerId}`} className="nav-link">{detail.firstName + ' ' + detail.lastName}</Link>
                            </div>

                            {detail.image ?
                                <div className="detailsrvc-carousel">
                                    <OwlCarousel
                                        items={1}
                                        nav navText={["<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALdJREFUSEvtlMENwjAQBGc7oBMoAUqgElogHdEBlEA6oYMgS0GyjJNbgvNLno41c7f2Waz8aWU+myBM2I5oGIYdcJHUhdRsgyUY4XfgAHSSrq4kFBTwHjhKejUR/AtPRUx20AI+KWgFrwoKuBs1kqppfC2Oggewt+kpa1eQoIXkCZx+uTl5YdEhfzpZLJmdgxaduIO2uJNQUDmTs6SbewEsQSZJz4QNn51kt8Jon91BBJr6vwnC5N7IPEoZlO97kgAAAABJRU5ErkJggg=='/>", "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKpJREFUSEvt1MERgjAUhOH/dUAnWgJ0YEdSgp1YgpQAndjBOnE4MAyabJQbnDP7zdu8EOz8xc75HEC2YbsiST1wi4hnNh28O5jDr8AIdCWINYGkBhiAUyliAakSF7EBF6kCHOQjIEklW7I4s3nx/wQmoF1v1q8VPYAzsBmepqsC5k3KhlcBTrgNuOE1wAW4f+t8vXn2HUhKyFDyH7InMN/F+7g9gYscQLaxF0YRUhkf9XfKAAAAAElFTkSuQmCC'/>"]}
                                        dots
                                        autoplay
                                        autoplayHoverPause
                                        autoplaySpeed={1}
                                    >
                                        {detail.image.map(({ image, imageId }) => (
                                            <img src={image} alt={1} key={`id-${imageId}`} className='detailsrvc-carouselimg'></img>
                                        ))}
                                    </OwlCarousel>
                                </div>
                                : null
                            }

                            <div className="detailsrvc-info">
                                <div className="detailsrvc-title">{detail.title}</div>
                                <div className="detailsrvc-desc">Description</div>
                                <p>{detail.description}</p>
                            </div>
                            <div className="packages-container">
                                {detail.Packages ? (
                                    <Packages data={detail.Packages} slug={slug} serviceId={detail.serviceId} name={detail.title} />
                                ) : (
                                    <></>
                                )}

                            </div>
                            <div className="list-rvw-header">
                                <div className='list-rvw-title'>List of Reviews</div>
                                <div className="list-review-star">
                                    <i className='bx bxs-star'></i>
                                    <div>
                                        {detail.rating || 0}/5 <span>({detail.noOfBuyer} Reviews)</span>
                                    </div>
                                </div>
                            </div>
                            {detail.Reviews ? (
                                <ReviewsList data={detail.Reviews} />
                            ) : (
                                <></>
                            )}
                        </div>
                        <Footer />
                    </>
                )
            }
        </>
    );
};

export default ServiceDetail;