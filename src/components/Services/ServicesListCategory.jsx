import axios from "axios";
import { React, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link, useParams } from "react-router-dom";
import './ServicesListCategory.css';
import Rectangle21 from '../../asset/ImgDummy/Rectangle21.png';
import Ellipse107 from '../../asset/ImgDummy/Ellipse107.png';

const ServiceListCategory = () => {
    const { id } = useParams();
    const categoryId = +id;
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get(
            // `https://hot-wheat-salesman.glitch.me/category/${categoryId}` //data asli
            'https://jsonplaceholder.typicode.com/todos' // data dummy
        ).then((response) => {
            const data = response.data;
            setServices(data);
        }).catch((error) => {
            console.log(error)
        })
    }, []);

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 12;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(services.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(services.length / itemsPerPage))
    }, [itemOffset, itemsPerPage, services]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % services.length;
        setItemOffset(newOffset);
    };

    return (
        <div className="servicelists11">
            <div className="servicelist11-cntr">
                {currentItems.map(item => (
                    <div className="serviceslist11-box" key={`id-${item.id}`}>
                        {/* item.id nanti diganti jadi item.serviceId */}
                        <Link className="service1imgcntr1" to={`/service/${item.id}`}>
                            {/* nanti diganti pakai image dari item */}
                            <img src={Rectangle21} alt='' className="servicelist11-img"></img>
                            <div className='toprated-ratebuy11'>
                                {/* masih data dummy */}
                                <div><i className='bx bx-star'></i>{4.9}</div>
                                <div><i className='bx bx-group'></i>{item.id}</div>
                            </div>
                        </Link>
                        <div className="servicelist11-info">
                            <div className="service11-info1">
                                <div className="service11-info2">
                                    {/* masih data dummy */}
                                    <img src={Ellipse107} alt=''></img>
                                    {/* nanti ganti sellerId */}
                                    <Link to={`/seller/${item.id}`} className='nav-link'>Ahmad Na Jaemin</Link>
                                </div>
                                {/* nanti ganti jadi serviceId */}
                                <Link to={`/service/${item.id}`} className="service11-info3 nav-link">{item.title}</Link>
                            </div>
                            <div className="service11-info4">
                                <i className='bx bx-dollar-circle'></i>
                                {/* masih data dummy */}
                                <span>Start from Rp 20000</span>
                            </div>
                        </div>
                    </div>
                ))}
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