import { React, useEffect, useState } from 'react';
import './UserOrders.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendPayment } from '../../redux/actions/payment';
import { setDetailOrder } from '../../redux/actions/order';

const getTime = (data) => {
    const date = new Date(data);
    const options = {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'};

    return date.toLocaleDateString('id-ID', options);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

const AllOrdersTable = ({ Order }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // search button
    const [services, setServices] = useState([]);
    const [msg, setMsg] = useState('');
    const [searchkey, setSearchkey] = useState('');
    const regexSearch = new RegExp(`.*(${searchkey.toUpperCase()}).*`);

    useEffect(() => {
        if (!searchkey) {
            setServices(Order);
        } else {
            const filteredOrder1 = Order.filter(item => (
                regexSearch.exec(item.title.toUpperCase()) ||
                regexSearch.exec(item.type.toUpperCase())
            ))
            setServices(filteredOrder1);
        }
    }, [searchkey, Order]) 

    //sort
    const [dateSort, setDateSort] = useState(0);
    const [priceSort, setPriceSort] = useState(0);

    const handleSortPrice = () => {
        if (priceSort) {
            if (searchkey) {
                const ordered0 = [...services]
                ordered0.sort((a, b) => (a.price - b.price));
                setServices(ordered0);
            } else {
                const ordered1 = [...Order];
                ordered1.sort((a, b) => (a.price - b.price));
                setServices(ordered1);
            }
            setPriceSort(0)
        } else {
            if (searchkey) {
                const ordered10 = [...services]
                ordered10.sort((a, b) => (b.price - a.price));
                setServices(ordered10);
            } else {
                const ordered11 = [...Order]
                ordered11.sort((a, b) => (b.price - a.price));
                setServices(ordered11);
            }
            setPriceSort(1)
        }
    }

    const handleSortDate = () => {
        if (dateSort) {
            if (searchkey) {
                const ordered0 = [...services]
                ordered0.sort((a, b) => (new Date(a.createdAt) - new Date(b.createdAt)));
                setServices(ordered0);
            } else {
                const ordered1 = [...Order];
                ordered1.sort((a, b) => (new Date(a.createdAt) - new Date(b.createdAt)));
                setServices(ordered1);
            }
            setDateSort(0)
        } else {
            if (searchkey) {
                const ordered10 = [...services]
                ordered10.sort((a, b) => (new Date(b.createdAt) - new Date(a.createdAt)));
                setServices(ordered10);
            } else {
                const ordered11 = [...Order]
                ordered11.sort((a, b) => (new Date(b.createdAt) - new Date(a.createdAt)));
                setServices(ordered11);
            }
            setDateSort(1)
        }
    }

    // react paginate
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(services.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(services.length / itemsPerPage))
    }, [itemOffset, itemsPerPage, services]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % services.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        if (searchkey) {
            if (services.length === 0) {
                setMsg('Order not found');
            } else {
                setMsg('');
            }
        } else {
            setMsg('');
        }
    }, [searchkey, services])

    const handleShowDetail = (order) => {
        const data = JSON.parse(order.response)
        if (order.status === 'pending') {
            dispatch(sendPayment(data)).then(() => {
                navigate('/verifypayment');
            })
        } else {
            dispatch(setDetailOrder(order.orderId, order))
            navigate(`/user/order/${order.orderId}`)
        }
    }

    return (
        <>
            <div className="usr-all-order-cntr">
                <div className='searchbox-usrorder'>
                    <i className='bx bx-search'></i>
                    <input type='text' placeholder='Search by service or package name...' value={searchkey} onChange={(event) => { setSearchkey(event.target.value) }}></input>
                </div>
                {(msg) ? (
                    <div className='order-not-found'>{msg}</div>
                ) : (
                    <div>
                        <table className='table table-striped tbl-usr-order'>
                            <thead>
                                <tr>
                                    <td className='sort-col-td'>
                                        <span>Date</span>
                                        <i className='bx bx-sort' onClick={handleSortDate}></i>
                                    </td>
                                    <td>Service Name</td>
                                    <td>Package Name</td>
                                    <td className='sort-col-td'>
                                        <span>Amount</span>
                                        <i className='bx bx-sort' onClick={handleSortPrice}></i>
                                    </td>
                                    <td>Status</td>
                                    <td>Actions</td>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((item) => (
                                    <tr key={`id-${item.orderId}`} className='test'>
                                        <td>{getTime(item.createdAt)}</td>
                                        <td>{item.title}</td>
                                        <td>{item.type}</td>
                                        <td>{(item.price % 1000 === 0) ? (
                                            <>Rp {item.price / 1000}.000,-</>
                                        ) : (
                                            <>Rp {item.price / 1000},-</>
                                        )}
                                        </td>
                                        {(item.status === 'Approved' || item.status === 'Done') ? (
                                            <td><div className='completed-status'>Completed</div></td>
                                        ) : (
                                            ((item.status === 'Working' || item.status === 'Revising' || item.status === 'Reviewing') ? (
                                                <td><div className='ongoing-status'>{item.status}</div></td>
                                            ) : (
                                                <td><div className='pending-status'>{capitalizeFirstLetter(item.status)}</div></td>
                                            ))
                                        )}
                                        <td className='usr-order-show'><i className='bx bx-show' onClick={() => {handleShowDetail(item)}}></i></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel={<i className='bx bx-chevron-right'></i>}
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            pageCount={pageCount}
                            previousLabel={<i className='bx bx-chevron-left'></i>}
                            renderOnZeroPageCount={null}
                            containerClassName="pagination2"
                            pageLinkClassName="page-num"
                            previousLinkClassName="page-num1"
                            nextLinkClassName="page-num1"
                            activeClassName="page-active"
                            activeLinkClassName='page-active-font'
                        />
                    </div>
                )}
            </div>
        </>
    )
};

export default AllOrdersTable;