import { useCallback, useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ApproveOrder from "./ApproveOrder";
import AskRevision from "./AskRevision";

import '../Services/DetailService.css';
import './OrderDetailUser.css';
import './UserOrders.css';

const getTime = (data) => {
    const date = new Date(data);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };

    return date.toLocaleDateString('id-ID', options);
}

const OrderDetailUser = ({ order }) => {
    const [deliveryTime, setDeliveryTime] = useState('');
    const [copyMsg, setCopyMsg] = useState('');
    const { id } = useParams();

    const { role, isLoggedIn, isSeller } = useSelector(state => state.auth);

    const admin = role === 3;
    const seller = role === 2 && isSeller === true;
    const approved = order.status === 'Approved';
    const done = order.status === 'Done';
    const reviewing = order.status === 'Reviewing';
    const fileLength = order.OrderFiles.length;
    const lastFile = order.OrderFiles[fileLength - 1];
    const orderNotesLength = order.OrderNotes.length;
    const lastOrderNote = order.OrderNotes[orderNotesLength - 1];

    const addDays = useCallback((date, days) => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }, []);

    useEffect(() => {
        if (order.status === 'Working') {
            const dueDate = addDays(order.createdAt, order.delivery);
            setDeliveryTime(getTime(dueDate));
        } else if (order.status === 'Revising') {
            const dueDate = addDays(order.updatedAt, order.delivery);
            setDeliveryTime(getTime(dueDate));
        } else {
            setDeliveryTime(getTime(order.updatedAt));
        }
    }, [order.status, order.createdAt, order.updatedAt, order.delivery, addDays]);

    const handleDownload = useCallback((url) => {
        const fileName = new URL(url).pathname.split("/").pop();
        window.location.href = `https://magnificent-regular-transport.glitch.me/download/${fileName}`
    }, []);

    const handleCopyUrl = useCallback(() => {
        navigator.clipboard.writeText(lastFile.file)
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
    }, [lastFile]);

    if (isLoggedIn) {
        if (admin || seller) { return <Navigate to='/' /> }
    } else { return <Navigate to='/' /> }

    return (
        <div>
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
                        {(approved || done) ? (
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
                        <div className='ordersummary22-row2'>{getTime(order.createdAt)}</div>
                    </div>
                    <div className='ordersummary22-row orange'>
                        <div className='ordersummary22-row1'>Updated At</div>
                        <div className='ordersummary22-row2'>{getTime(order.updatedAt)}</div>
                    </div>
                    <div className='ordersummary22-row'>
                        <div className='ordersummary22-row1'>Delivery Time</div>
                        <div className='ordersummary22-row2'>{deliveryTime}</div>
                    </div>

                    {orderNotesLength ?
                        <div className='ordersummary22-row orange'>
                            <div className='ordersummary22-row1'>Order Note</div>
                            <div className='ordersummary22-row2'>{lastOrderNote.note}</div>
                        </div>
                        :
                        <div className='ordersummary22-row orange'>
                            <div className='ordersummary22-row1'>Order Note</div>
                            <div className='ordersummary22-row2'>{order.note}</div>
                        </div>
                    }

                    {(order.noOfConcepts) ? (
                        <div className='ordersummary22-row'>
                            <div className='ordersummary22-row1'>Number of Concepts</div>
                            <div className='ordersummary22-row2'>{order.noOfConcepts}</div>
                        </div>
                    ) : (null)}
                    {(order.noOfPage) ? (
                        <div className='ordersummary22-row'>
                            <div className='ordersummary22-row1'>Number of Pages</div>
                            <div className='ordersummary22-row2'>{order.noOfPage}</div>
                        </div>
                    ) : (null)}
                    {(order.maxDuration) ? (
                        <div className='ordersummary22-row'>
                            <div className='ordersummary22-row1'>Maximum Duration</div>
                            <div className='ordersummary22-row2'>{order.maxDuration} minutes</div>
                        </div>
                    ) : (null)}

                    {(reviewing || approved || done) ? (
                        order.OrderFiles && (
                            fileLength && (
                                <div>
                                    <div className='order-summary22 order-file22'>ORDER FILE</div>
                                    {(lastFile.upldFileType === 1) ? (
                                        <div className='download-file22'>
                                            <div className='upload-file-22'>Download latest uploaded file</div>
                                            <div className='download-btn22'>
                                                <div onClick={() => handleDownload(lastFile.file)}>Download</div>
                                                <i className='bx bxs-download'></i>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='download-file22'>
                                            <div className='upload-file-22'>View latest uploaded file</div>
                                            <div className='file-link-cntr22'>
                                                <div className='url-container22'>{lastFile.file}</div>
                                                <div className='copy-cntr22' onClick={handleCopyUrl}><i className='bx bxs-copy'></i></div>
                                            </div>
                                            {(copyMsg) ? ((copyMsg === 'url copied') ? (
                                                <div className='copy-msg22 green-msg'>{copyMsg}</div>
                                            ) : (
                                                <div className='copy-msg22 red-msg'>{copyMsg}</div>
                                            )) : (null)}
                                        </div>
                                    )}
                                    {reviewing ?
                                        <div className="revapprv-btn">
                                            {(order.revisionLeft !== 0) ? (
                                                <AskRevision orderId={+id} />
                                            ) : (null)}
                                            <ApproveOrder orderId={+id} />
                                        </div>
                                        : null
                                    }
                                </div>
                            )
                        )
                    ) : (null)}
                </div>
            </div>
        </div>
    )
};

export default OrderDetailUser;