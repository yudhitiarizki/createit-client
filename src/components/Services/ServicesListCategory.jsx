import { React, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import './ServicesListCategory.css';
import '../Home/HomeSearchResult.css';

const ServiceListCategory = ({ service }) => {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 12;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(service.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(service.length / itemsPerPage))
    }, [itemOffset, itemsPerPage, service]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % service.length;
        setItemOffset(newOffset);
    };

    return (
        <div className="servicelists11">
            <div className="servicelist11-cntr">
                {service.length ? (
                    <>
                        {currentItems.map(item => (
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
                    </>
                ) : (
                    <></>
                )}

            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<i className='bx bx-chevron-right'></i>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel={<i className='bx bx-chevron-left'></i>}
                renderOnZeroPageCount={null}
                containerClassName="pagination1"
                pageLinkClassName="page-num"
                previousLinkClassName="page-num1"
                nextLinkClassName="page-num1"
                activeClassName="page-active"
                activeLinkClassName='page-active-font'
            />
        </div >
    )
};

export default ServiceListCategory;