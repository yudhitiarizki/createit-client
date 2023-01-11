import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../General/Navbar";
import '../Services/DetailService.css';
import ApproveOrder from "./ApproveOrder";
import AskRevision from "./AskRevision";
import './OrderDetailUser.css';
import './UserOrders.css';

const OrderDetailUser = () => {
    const [deliveryTime, setDeliveryTime] = useState('');
    const [copyMsg, setCopyMsg] = useState('');
    const { id } = useParams();

    const order = {
        firstName: 'Ahmad',
        lastName: 'Na Jaemin',
        title: 'Logo Design',
        type: 'Standard',
        note: 'Tulisan pada logo: CreateIT. Logo Berwarna Merah Putih.',
        status: 'Reviewing',
        revisionLeft: 2,
        price: 49999,
        delivery: 2,
        orderFiles: 'work.zip',
        fileType: 1,
        createdAt: '02-01-2022',
        updatedAt: '02-01-2022',
        noOfConcept: 2,
        noOfPages: null,
        maxDuration: null
    }

    const addDays = (date, days) => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result
    }

    useEffect(() => {
        if (order.status === 'Working') {
            const dueDate = addDays(order.createdAt, order.delivery);
            setDeliveryTime(dueDate.toString().split('(')[0]);
        } else if (order.status === 'Revising') {
            const dueDate = addDays(order.updatedAt, order.delivery);
            setDeliveryTime(dueDate.toString().split('(')[0]);
        } else {
            setDeliveryTime(new Date(order.updatedAt).toString().split('(')[0]);
        }
    }, [order.status, order.createdAt, order.updatedAt, order.delivery])

    const handleDownload = () => {
        // axios get downloadS
    };

    const handleCopyUrl = () => {
        navigator.clipboard.writeText(document.getElementById('url-file').innerText)
            .then(success => {
                setCopyMsg('url copied')
                const timer = setTimeout(() => {
                    setCopyMsg('')
                }, 2000)
                return () => clearTimeout(timer)
            })
            .catch(err => {
                setCopyMsg('error copying url')
                const timer = setTimeout(() => {
                    setCopyMsg('')
                }, 2000)
                return () => clearTimeout(timer)
            })
    }

    return (
        <div>
            <div className="detailservice-navbar">
                <Navbar />
            </div>
            <div className="navbar-text1">
                <div>User</div>
                <i className='bx bx-chevron-right'></i>
                <div>Order List</div>
                <i className='bx bx-chevron-right'></i>
                <div>Order Details</div>
            </div>

            <div className="orderdetuser-cntr">
                <div className="usrordrdet-hdr">
                    <Link to='/user/order' className="backtolist nav-link"><i className='bx bx-chevron-left'></i></Link>
                    <div>Order Details</div>
                </div>

                <div className="usrordrdet-cntn">
                    <div className='order-summary22'>ORDER SUMMARY</div>
                    <div className='ordersummary22-row orange'>
                        <div className='ordersummary-row1'>Seller Name</div>
                        <div className='ordersummary-row2'>{order.firstName} {order.lastName}</div>
                    </div>
                    <div className='ordersummary22-row'>
                        <div className='ordersummary-row1'>Service Name</div>
                        <div className='ordersummary-row2'>{order.title}</div>
                    </div>
                    <div className='ordersummary22-row orange'>
                        <div className='ordersummary-row1'>Package Chosen</div>
                        <div className='ordersummary-row2'>{order.type}</div>
                    </div>
                    <div className='ordersummary22-row'>
                        <div className='ordersummary-row1'>Order Status</div>
                        {(order.status === 'Approved' || order.status === 'Done') ? (
                            <div className='ordersummary-row2'>Completed</div>
                        ) : (
                            <div className='ordersummary-row2'>{order.status}</div>
                        )}
                    </div>
                    <div className='ordersummary22-row orange'>
                        <div className='ordersummary22-row1'>Revision Left</div>
                        <div className='ordersummary22-row2'>{order.revisionLeft}</div>
                    </div>
                    <div className='ordersummary22-row'>
                        <div className='ordersummary22-row1'>Created At</div>
                        <div className='ordersummary22-row2'>{new Date(order.createdAt).toString().split('(')[0]}</div>
                    </div>
                    <div className='ordersummary22-row orange'>
                        <div className='ordersummary22-row1'>Updated At</div>
                        <div className='ordersummary22-row2'>{new Date(order.updatedAt).toString().split('(')[0]}</div>
                    </div>
                    <div className='ordersummary22-row'>
                        <div className='ordersummary22-row1'>Delivery Time</div>
                        <div className='ordersummary22-row2'>{deliveryTime}</div>
                    </div>
                    <div className='ordersummary22-row orange'>
                        <div className='ordersummary22-row1'>Order Note</div>
                        <div className='ordersummary22-row2'>{order.note}</div>
                    </div>
                    {(order.noOfConcept) ? (
                        <div className='ordersummary22-row'>
                            <div className='ordersummary22-row1'>Number of Concepts</div>
                            <div className='ordersummary22-row2'>{order.noOfConcept}</div>
                        </div>
                    ) : (null)}
                    {(order.noOfPages) ? (
                        <div className='ordersummary22-row'>
                            <div className='ordersummary22-row1'>Number of Pages</div>
                            <div className='ordersummary22-row2'>{order.noOfPages}</div>
                        </div>
                    ) : (null)}
                    {(order.maxDuration) ? (
                        <div className='ordersummary22-row'>
                            <div className='ordersummary22-row1'>Maximum Duration</div>
                            <div className='ordersummary22-row2'>{order.maxDuration} minutes</div>
                        </div>
                    ) : (null)}

                    {(order.status === 'Reviewing' || order.status === 'Approved' || order.status === 'Done') ? (
                        <div>
                            <div className='order-summary22 order-file22'>ORDER FILE</div>
                            {(order.fileType === 1) ? (
                                <div className='download-file22'>
                                    <div className='upload-file-22'>Download latest uploaded file</div>
                                    <div className='download-btn22'>
                                        <div onClick={handleDownload}>Download</div>
                                        <i className='bx bxs-download'></i>
                                    </div>
                                </div>
                            ) : (
                                <div className='download-file22'>
                                    <div className='upload-file-22'>View latest uploaded file</div>
                                    <div className='file-link-cntr22'>
                                        <div className='url-container22' id='url-file'>{order.orderFiles}</div>
                                        <div className='copy-cntr22' onClick={handleCopyUrl}><i className='bx bxs-copy'></i></div>
                                    </div>
                                    {(copyMsg) ? ((copyMsg === 'url copied') ? (
                                        <div className='copy-msg22 green-msg'>{copyMsg}</div>
                                    ) : (
                                        <div className='copy-msg22 red-msg'>{copyMsg}</div>
                                    )) : (null)}
                                </div>
                            )}
                            <div className="revapprv-btn">
                                {(order.revisionLeft !== 0) ? (
                                    <AskRevision orderId={+id} />
                                ) : (null)}
                                <ApproveOrder orderId={+id} />
                            </div>
                        </div>
                    ) : (null)}
                </div>
            </div>
        </div>
    )
};

export default OrderDetailUser;