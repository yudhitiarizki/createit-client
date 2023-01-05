import { React, useEffect, useState } from 'react';
import './UserOrders.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import ReactPaginate from 'react-paginate';

const AllOrdersTable = ({ allOrder, onGoing, completed }) => {
    // Data dummy
    const Order = [
        {
            orderId: 1,
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            title: 'IOT',
            type: 'Regular',
            price: 50999,
            note: 'logo name: CreateIT',
            status: 'Checking Payment',
            revisionLeft: 1,
            response: '',
            createdAt: '2022-12-11'
        },
        {
            orderId: 2,
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            title: 'IOT',
            type: 'Regular',
            note: 'logo name: CreateIT',
            price: 50999,
            status: 'Pending',
            revisionLeft: '1',
            response: '',
            createdAt: '2022-06-11'
        },
        {
            orderId: 3,
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            title: 'IOT',
            type: 'Advanced',
            price: 70999,
            note: 'logo name: CreateIT',
            status: 'Working',
            revisionLeft: '2',
            response: '',
            createdAt: '2022-04-11'
        },
        {
            orderId: 4,
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            title: 'IOT',
            type: 'Advanced',
            price: 70999,
            note: 'logo name: CreateIT',
            status: 'Approved',
            revisionLeft: '2',
            response: '',
            createdAt: '2022-05-11'
        },
        {
            orderId: 5,
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            title: 'IOT',
            type: 'Business',
            price: 199999,
            note: 'logo name: CreateIT',
            status: 'Revising',
            revisionLeft: '2',
            response: '',
            createdAt: '2022-07-11'
        },
        {
            orderId: 6,
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            title: 'IOT',
            type: 'Business',
            price: 199999,
            note: 'logo name: CreateIT',
            status: 'Done',
            revisionLeft: '1',
            response: '',
            createdAt: '2022-01-12'
        },
        {
            orderId: 7,
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            title: 'bus',
            type: 'cek',
            price: 20000,
            note: 'logo name: CreateIT',
            status: 'Done',
            revisionLeft: '1',
            response: '',
            createdAt: '2022-01-01'
        }
    ];

    const orderOngoing = Order.filter(item => (item.status === 'Revising' || item.status === 'Working'));
    const orderCompleted = Order.filter(item => (item.status === 'Approved' || item.status === 'Done'));

    // search button
    const [services, setServices] = useState([]);
    const [msg, setMsg] = useState('');
    const [searchkey, setSearchkey] = useState('');
    const regexSearch = new RegExp(`.*(${searchkey.toUpperCase()}).*`);

    useEffect(() => {
        if (!searchkey) {
            if (allOrder) {
                setServices(Order);
            } else if (onGoing) {
                setServices(orderOngoing);
            } else {
                setServices(orderCompleted);
            }
        } else {
            if (allOrder) {
                const filteredOrder1 = Order.filter(item => (
                    regexSearch.exec(item.title.toUpperCase()) ||
                    regexSearch.exec(item.type.toUpperCase())
                ))
                setServices(filteredOrder1);
            } else if (onGoing) {
                const filteredOrder2 = orderOngoing.filter(item => (
                    regexSearch.exec(item.title.toUpperCase()) ||
                    regexSearch.exec(item.type.toUpperCase())
                ))
                setServices(filteredOrder2);
            } else {
                const filteredOrder3 = orderCompleted.filter(item => (
                    regexSearch.exec(item.title.toUpperCase()) ||
                    regexSearch.exec(item.type.toUpperCase())
                ))
                setServices(filteredOrder3);
            }
        }
    }, [searchkey])

    //sort
    const [dateSort, setDateSort] = useState(0);
    const [priceSort, setPriceSort] = useState(0);

    const handleSortPrice = () => {
        if (priceSort) {
            if (allOrder) {
                const ordered1 = Order.sort((a,b) => (a.price - b.price));
                setServices(ordered1);
            } else if (onGoing) {
                const ordered2 = orderOngoing.sort((a,b) => (a.price - b.price));
                setServices(ordered2);
            } else {
                const ordered3 = orderCompleted.sort((a,b) => (a.price - b.price));
                setServices(ordered3);
            }
            setPriceSort(0)
        } else {
            if (allOrder) {
                const ordered1 = Order.sort((a,b) => (b.price - a.price));
                setServices(ordered1);
            } else if (onGoing) {
                const ordered2 = orderOngoing.sort((a,b) => (b.price - a.price));
                setServices(ordered2);
            } else {
                const ordered3 = orderCompleted.sort((a,b) => (b.price - a.price));
                setServices(ordered3);
            }
            setPriceSort(1)
        }
    }

    const handleSortDate = () => {
        if (dateSort) {
            if (allOrder) {
                const ordered1 = Order.sort((a,b) => (new Date(a.createdAt) - new Date(b.createdAt)));
                setServices(ordered1);
            } else if (onGoing) {
                const ordered2 = orderOngoing.sort((a,b) => (new Date(a.createdAt) - new Date(b.createdAt)));
                setServices(ordered2);
            } else {
                const ordered3 = orderCompleted.sort((a,b) => (new Date(a.createdAt) - new Date(b.createdAt)));
                setServices(ordered3);
            }
            setDateSort(0)
        } else {
            if (allOrder) {
                const ordered1 = Order.sort((a,b) => (new Date(b.createdAt) - new Date(a.createdAt)));
                setServices(ordered1);
            } else if (onGoing) {
                const ordered2 = orderOngoing.sort((a,b) => (new Date(b.createdAt) - new Date(a.createdAt)));
                setServices(ordered2);
            } else {
                const ordered3 = orderCompleted.sort((a,b) => (new Date(b.createdAt) - new Date(a.createdAt)));
                setServices(ordered3);
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
                                    <td scope="col" className='sort-col-td'>
                                        <span>Date</span>
                                        <i className='bx bx-sort' onClick={handleSortDate}></i>
                                    </td>
                                    <td scope="col">Service Name</td>
                                    <td scope="col">Package Name</td>
                                    <td scope="col" className='sort-col-td'>
                                        <span>Amount</span>
                                        <i className='bx bx-sort' onClick={handleSortPrice}></i>
                                    </td>
                                    <td scope="col">Status</td>
                                    <td scope="col">Actions</td>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((item) => (
                                    <tr key={`id-${item.orderId}`} className='test'>
                                        <td>{item.createdAt}</td>
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
                                            ((item.status === 'Working' || item.status === 'Revising') ? (
                                                <td><div className='ongoing-status'>Ongoing</div></td>
                                            ) : (
                                                <td><div className='pending-status'>{item.status}</div></td>
                                            ))
                                        )}
                                        <td className='usr-order-show'><i className='bx bx-show'></i></td>
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