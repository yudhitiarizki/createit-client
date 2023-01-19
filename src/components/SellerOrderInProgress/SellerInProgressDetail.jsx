import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideOnProgressDetail } from '../../redux/actions/DetailWorkingOrderSeller';
import '../SellerIncomingOrder/SellerIncomingOrder.css';
import './SellerOrderInProgress.css';
import { OrderUploadFile, getOrderProgress } from '../../redux/actions/order';
import loader from '../../asset/Login/loader.gif';
import { SocketContext } from '../../context/socket-context';

const SellerInProgressDetail = () => {
    const dispatch = useDispatch();
    const socket = useContext(SocketContext);

    const orderDetail = useSelector((state) => state.sllrOnPrgrssOrderDetail);
    const { user } = useSelector(state => state.auth);
    const [deliveryTime, setDeliveryTime] = useState('');
    const [upldFile, setUpldFile] = useState();
    const [copyMsg, setCopyMsg] = useState('');
    const [upldFileType, setUpldFileType] = useState(1);
    const [urlinput, setUrlInput] = useState('');
    const [fileSizeMsg, setFileSizeMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [fileName, setFileName] = useState('');

    const addDays = (date, days) => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result
    }

    useEffect(() => {
        if (orderDetail.status === 'Working') {
            const dueDate = addDays(orderDetail.createdAt, orderDetail.delivery);
            setDeliveryTime(dueDate.toString().split('(')[0]);
        } else if (orderDetail.status === 'Revising') {
            const dueDate = addDays(orderDetail.updatedAt, orderDetail.delivery);
            setDeliveryTime(dueDate.toString().split('(')[0]);
        } else {
            setDeliveryTime(new Date(orderDetail.updatedAt).toString().split('(')[0]);
        }
    }, [orderDetail.status, orderDetail.createdAt, orderDetail.updatedAt, orderDetail.delivery])

    const handleDownload = (url) => {
        const file = new URL(url).pathname.split("/").pop();
        window.location.href = `https://magnificent-regular-transport.glitch.me/download/${file}`
    }

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

    const uploadFile = () => {
        document.getElementById('real-inputfile2').click();
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFileName(selectedFile.name);

        if (selectedFile) {
            document.getElementById('custom-inputtext2').innerHTML = selectedFile.name;

            const fileSize = selectedFile.size;
            const fileMB = fileSize / 1024 ** 2;
            if (fileMB > 50) {
                setFileSizeMsg('Please upload a file less than 50MB');
                const timer = setTimeout(() => {
                    setFileSizeMsg('')
                }, 5000)
                return () => clearTimeout(timer)
            } else {
                const reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onload = () => {
                    const filedata = reader.result;
                    setUpldFile(filedata);
                }
                setFileSizeMsg('');
            }
        } else {
            document.getElementById('custom-inputtext2').innerHTML = '';
            setFileSizeMsg('');
        }
    };

    const handleChangeUrl = () => {
        document.getElementById('upload-file-field').style.display = 'none';
        document.getElementById('urlfile-input').style.display = 'block';
        setUpldFileType(2);
    }

    const handleChangeUpload = () => {
        document.getElementById('upload-file-field').style.display = 'block';
        document.getElementById('urlfile-input').style.display = 'none';
        setUpldFileType(1);
    }

    const hideDetail = () => {
        dispatch(hideOnProgressDetail());
        document.getElementById('custom-inputtext2').innerHTML = '';
    };

    const handleSubmitFile = (orderId, userId) => {
        
        if (upldFileType === 1) {
            if (!fileSizeMsg) {
                const file = upldFile;
                setIsLoading(true)
                dispatch(OrderUploadFile(orderId, upldFileType, file, fileName))
                    .then(() => {
                        socket.emit('sendMessage', {
                            senderId: user.userId, 
                            reseiverId: userId, 
                            text: `Order #${orderId} completed, Please Review!`,
                            date: Date.now()
                        })
                        setIsLoading(false);
                        dispatch(getOrderProgress());
                        hideDetail()
                    })
                    .catch(() => {
                        setIsLoading(false);
                    })
            }
        } else {
            const file = urlinput;
            setIsLoading(true)
            dispatch(OrderUploadFile(orderId, upldFileType, file))
                .then(() => {
                    socket.emit('sendMessage', {
                        senderId: user.userId, 
                        reseiverId: userId, 
                        text: `Order #${orderId} completed, Please Review!`,
                        date: Date.now()
                    })
                    setIsLoading(false)
                    dispatch(getOrderProgress());
                    hideDetail();
                })
                .catch(() => {
                    setIsLoading(false)
                })
        }
    }

    return (
        <div className={orderDetail.orderId ? "newordersellerlist1 ordrdetail-trnstn" : "newordersellerlist1"}>
            <div className="newordrlist-hdr">
                <div className="back-arrow" onClick={hideDetail}><i className='bx bx-chevron-left'></i></div>
                <div>Request Details</div>
            </div>
            <div className="newordrlist-cntr1">
                <div className="newordrlist-inside2">
                    <div className='order-summary11'>ORDER SUMMARY</div>
                    <div className='ordersummary-row orange'>
                        <div className='ordersummary-row1'>Buyer's Name</div>
                        <div className='ordersummary-row2'>{orderDetail.firstName} {orderDetail.lastName}</div>
                    </div>
                    <div className='ordersummary-row'>
                        <div className='ordersummary-row1'>Service Name</div>
                        <div className='ordersummary-row2'>{orderDetail.title}</div>
                    </div>
                    <div className='ordersummary-row orange'>
                        <div className='ordersummary-row1'>Package Chosen</div>
                        <div className='ordersummary-row2'>{orderDetail.type}</div>
                    </div>
                    <div className='ordersummary-row'>
                        <div className='ordersummary-row1'>Created At</div>
                        <div className='ordersummary-row2'>{new Date(orderDetail.createdAt).toString().split('(')[0]}</div>
                    </div>
                    <div className='ordersummary-row orange'>
                        <div className='ordersummary-row1'>Updated At</div>
                        <div className='ordersummary-row2'>{new Date(orderDetail.updatedAt).toString().split('(')[0]}</div>
                    </div>
                    <div className='ordersummary-row'>
                        <div className='ordersummary-row1'>Delivery Time</div>
                        <div className='ordersummary-row2'>{deliveryTime}</div>
                    </div>

                    {orderDetail.note && (
                        orderDetail.note.length && (
                            <div className='ordersummary-row orange'>
                                <div className='ordersummary-row1'>Order Note</div>
                                <div className='ordersummary-row2'>{orderDetail.note[0].note}</div>
                            </div>
                        )
                    )}
                    {(orderDetail.noOfConcept) ? (
                        <div className='ordersummary-row'>
                            <div className='ordersummary-row1'>Number of Concepts</div>
                            <div className='ordersummary-row2'>{orderDetail.noOfConcept}</div>
                        </div>
                    ) : (null)}
                    {(orderDetail.noOfPages) ? (
                        <div className='ordersummary-row'>
                            <div className='ordersummary-row1'>Number of Pages</div>
                            <div className='ordersummary-row2'>{orderDetail.noOfPages}</div>
                        </div>
                    ) : (null)}
                    {(orderDetail.maxDuration) ? (
                        <div className='ordersummary-row'>
                            <div className='ordersummary-row1'>Maximum Duration</div>
                            <div className='ordersummary-row2'>{orderDetail.maxDuration} minutes</div>
                        </div>
                    ) : (null)}

                    <div className='order-summary11 order-file1'>ORDER FILE</div>
                    {(orderDetail.status !== 'Revising') ? (null) : (
                        (orderDetail.OrderFiles.length) ? (
                            (orderDetail.OrderFiles[0].upldFileType === 1) ? (
                                <div className='download-file'>
                                    <div className='upload-file-2'>Download latest uploaded file</div>
                                    <div className='download-btn1'>
                                        <div onClick={() => handleDownload(orderDetail.file[0].file)}>Download</div>
                                        <i className='bx bxs-download'></i>
                                    </div>
                                </div>
                            ) : (
                                <div className='download-file'>
                                    <div className='upload-file-2'>View latest uploaded file</div>
                                    <div className='file-link-cntr'>
                                        <div className='url-container' id='url-file'>{orderDetail.file[0].file}</div>
                                        <div className='copy-cntr' onClick={handleCopyUrl}><i className='bx bxs-copy'></i></div>
                                    </div>
                                    {(copyMsg) ? ((copyMsg === 'url copied') ? (
                                        <div className='copy-msg green-msg'>{copyMsg}</div>
                                    ) : (
                                        <div className='copy-msg red-msg'>{copyMsg}</div>
                                    )) : (null)}
                                </div>
                            )
                        ) : (
                            <></>
                        )
                    )}

                    {(orderDetail.status !== 'Reviewing') ? (
                        <>
                            <div className='upload-file-2'>Upload Order File <span>*</span></div>
                            {(fileSizeMsg) ? (
                                <div className='filesize-msg'>{fileSizeMsg}</div>
                            ) : (null)}
                            <div id='upload-file-field'>
                                <div className='text-99'>(maximum file size: 50MB)</div>
                                <div className='inputFile'>
                                    <input type='file' id='real-inputfile2' onChange={handleFileChange} />
                                    <div className='custom-fileinput2'>
                                        <div id='custom-inputtext2' className='thumb1'></div>
                                        <div id='custom-inputfile2' className='custominputfile2-btn' onClick={uploadFile}>
                                            <div className='link-img'></div>
                                            <div>Upload File</div>
                                        </div>
                                    </div>
                                </div>
                                <p className='upload-message'>(If you want to upload more than 1 file, please upload an archive file with zip/rar/7z format)</p>
                                <div className='upload-file-2'>Need to upload file more than 50MB?</div>
                                <div className='external-link' onClick={handleChangeUrl}>Use external link instead...</div>
                            </div>

                            <div id='urlfile-input' style={{ 'display': 'none' }}>
                                <input value={urlinput} onChange={(event) => { setUrlInput(event.target.value) }} className='urlfile-input' placeholder='Put the file url here...' />
                                <div className='external-link' onClick={handleChangeUpload}>Switch to file upload</div>
                            </div>

                            {isLoading ?
                                <img src={loader} alt='' className='Loading'></img>
                                :
                                <div className='send-btn'><div onClick={() => handleSubmitFile(orderDetail.orderId, orderDetail.userId)}>SEND</div></div>
                            }
                        </>
                    ) : (null)}
                </div>
            </div>
        </div >
    )
};

export default SellerInProgressDetail;