import { React, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link, useParams } from "react-router-dom";
import './ServicesListCategory.css';
import { useSelector, useDispatch } from "react-redux";
import { getServiceByCategory } from "../../redux/actions/service";

const ServiceListCategory = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const { service } = useSelector(state => state.service);

    useEffect(() => {
        dispatch(getServiceByCategory(id));
    }, [id]);

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
                { service.length ? ( 
                <>
                    { currentItems.map(item => (
                        <div className="serviceslist11-box" key={`id-${item.serviceId}`}>
                            {/* item.id nanti diganti jadi item.serviceId */}
                            <Link className="service1imgcntr1" to={`/service/${item.slug}`}>
                                {/* nanti diganti pakai image dari item */}
                                <img src={item.image} alt='' className="servicelist11-img"></img>
                                <div className='toprated-ratebuy11'>
                                    {/* masih data dummy */}
                                    <div><i className='bx bx-star'></i>{item.rating ? item.rating : 0}</div>
                                    <div><i className='bx bx-group'></i>{item.noOfBuyer}</div>
                                </div>
                            </Link>
                            <div className="servicelist11-info">
                                <div className="service11-info1">
                                    <div className="service11-info2">
                                        {/* masih data dummy */}
                                        <img src={item.photoProfile} alt=''></img>
                                        {/* nanti ganti sellerId */}
                                        <Link to={`/seller/${item.sellerId}`} className='nav-link'>{item.firstName} {item.lastName}</Link>
                                    </div>
                                    {/* nanti ganti jadi serviceId */}
                                    <Link to={`/service/${item.slug}`} className="service11-info3 nav-link">{item.title}</Link>
                                </div>
                                <div className="service11-info4">
                                    <i className='bx bx-dollar-circle'></i>
                                    {/* masih data dummy */}
                                    <span>Start from Rp 20000</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
                ) : (
                    <></>
                ) }
                
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