import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { hideOnProgressDetail } from '../../redux/actions/DetailWorkingOrderSeller';
import { OrderUploadFile, getOrderProgress } from '../../redux/actions/order';

import loader from '../../asset/Login/loader.gif';
import '../SellerIncomingOrder/SellerIncomingOrder.css';
import './SellerOrderInProgress.css';

const SellerInProgressDetail = ({ thumbTxt, setThumbTxt, getTime }) => {
    const dispatch = useDispatch();

    const orderDetail = useSelector((state) => state.sllrOnPrgrssOrderDetail);

    const [deliveryTime, setDeliveryTime] = useState('');
    const [upldFile, setUpldFile] = useState();
    const [copyMsg, setCopyMsg] = useState('');
    const [upldFileType, setUpldFileType] = useState(1);
    const [urlinput, setUrlInput] = useState('');
    const [fileSizeMsg, setFileSizeMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [fileName, setFileName] = useState('');
    const [fileDisplay, setFileDisplay] = useState('block');
    const [urlDisplay, setUrlDisplay] = useState('none'); 

    const fileLength = orderDetail.OrderFiles.length;
    const lastFile = orderDetail.OrderFiles[fileLength - 1];
    const orderNotesLength = orderDetail.OrderNotes.length;
    const lastOrderNote = orderDetail.OrderNotes[orderNotesLength - 1];

    const addDays = useCallback((date, days) => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result
    }, []);

    useEffect(() => {
        if (orderDetail.status === 'Working') {
            const dueDate = addDays(orderDetail.createdAt, orderDetail.delivery);
            setDeliveryTime(getTime(dueDate));
        } else if (orderDetail.status === 'Revising') {
            const dueDate = addDays(orderDetail.updatedAt, orderDetail.delivery);
            setDeliveryTime(getTime(dueDate));
        } else {
            setDeliveryTime(getTime(orderDetail.updatedAt));
        }
    }, [orderDetail.status, orderDetail.createdAt, orderDetail.updatedAt, orderDetail.delivery, getTime, addDays])

    const handleDownload = useCallback((url) => {
        const file = new URL(url).pathname.split("/").pop();
        window.location.href = `https://magnificent-regular-transport.glitch.me/download/${file}`
    }, []);

    const handleCopyUrl = useCallback(() => {
        navigator.clipboard.writeText(orderDetail.file[0].file)
            .then(() => {
                setCopyMsg('url copied')
                const timer = setTimeout(() => {
                    setCopyMsg('')
                }, 2000)
                return () => clearTimeout(timer)
            })
            .catch(() => {
                setCopyMsg('error copying url')
                const timer = setTimeout(() => {
                    setCopyMsg('')
                }, 2000)
                return () => clearTimeout(timer)
            })
    }, [orderDetail]);

    const uploadFile = useCallback(() => {
        document.getElementById('real-inputfile2').click();
    }, []);

    const handleFileChange = useCallback((event) => {
        const selectedFile = event.target.files[0];
        setFileName(selectedFile.name);

        if (selectedFile) {
            setThumbTxt(selectedFile.name);

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
            setThumbTxt('');
            setFileSizeMsg('');
        }
    }, [setThumbTxt]);

    const handleChangeUrl = useCallback(() => {
        setFileDisplay('none');
        setUrlDisplay('block');
        setUpldFileType(2);
    }, []);

    const handleChangeUpload = useCallback(() => {
        setFileDisplay('block');
        setUrlDisplay('none');
        setUpldFileType(1);
    }, []);

    const hideDetail = useCallback(() => {
        dispatch(hideOnProgressDetail());
        setThumbTxt('');
    }, [dispatch, setThumbTxt]);

    const handleSubmitFile = useCallback((orderId) => {
        if (upldFileType === 1) {
            if (!fileSizeMsg) {
                const file = upldFile;
                setIsLoading(true)
                dispatch(OrderUploadFile(orderId, upldFileType, file, fileName))
                    .then(() => {
                        setIsLoading(false);
                        dispatch(getOrderProgress());
                        hideDetail();
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
                    setIsLoading(false)
                    dispatch(getOrderProgress());
                    hideDetail();
                })
                .catch(() => {
                    setIsLoading(false)
                })
        }
    }, [dispatch, upldFileType, upldFile, fileName, fileSizeMsg, hideDetail, urlinput])

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
                        <div className='ordersummary-row2'>{getTime(orderDetail.createdAt)}</div>
                    </div>
                    <div className='ordersummary-row orange'>
                        <div className='ordersummary-row1'>Updated At</div>
                        <div className='ordersummary-row2'>{getTime(orderDetail.updatedAt)}</div>
                    </div>
                    <div className='ordersummary-row'>
                        <div className='ordersummary-row1'>Delivery Time</div>
                        <div className='ordersummary-row2'>{deliveryTime}</div>
                    </div>

                    {orderNotesLength ?
                        <div className='ordersummary-row orange'>
                            <div className='ordersummary-row1'>Order Note</div>
                            <div className='ordersummary-row2'>{lastOrderNote.note}</div>
                        </div>
                        :
                        <div className='ordersummary-row orange'>
                            <div className='ordersummary-row1'>Order Note</div>
                            <div className='ordersummary-row2'>{orderDetail.note}</div>
                        </div>
                    }

                    {(orderDetail.noOfConcepts) ? (
                        <div className='ordersummary-row'>
                            <div className='ordersummary-row1'>Number of Concepts</div>
                            <div className='ordersummary-row2'>{orderDetail.noOfConcepts}</div>
                        </div>
                    ) : (null)}

                    {(orderDetail.noOfPage) ? (
                        <div className='ordersummary-row'>
                            <div className='ordersummary-row1'>Number of Pages</div>
                            <div className='ordersummary-row2'>{orderDetail.noOfPage}</div>
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
                        (fileLength) ? (
                            (lastFile.upldFileType === 1) ? (
                                <div className='download-file'>
                                    <div className='upload-file-2'>Download latest uploaded file</div>
                                    <div className='download-btn1'>
                                        <div onClick={() => handleDownload(lastFile.file)}>Download</div>
                                        <i className='bx bxs-download'></i>
                                    </div>
                                </div>
                            ) : (
                                <div className='download-file'>
                                    <div className='upload-file-2'>View latest uploaded file</div>
                                    <div className='file-link-cntr'>
                                        <div className='url-container'>{lastFile.file}</div>
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

                            <div style={{'display': `${fileDisplay}`}}>
                                <div className='text-99'>(maximum file size: 50MB)</div>
                                <div className='inputFile'>
                                    <input type='file' id='real-inputfile2' onChange={handleFileChange} />
                                    <div className='custom-fileinput2'>
                                        <div className='thumb1'>{thumbTxt}</div>
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

                            <div style={{ 'display': `${urlDisplay}` }}>
                                <input value={urlinput} onChange={(event) => { setUrlInput(event.target.value) }} className='urlfile-input' placeholder='Put the file url here...' />
                                <div className='external-link' onClick={handleChangeUpload}>Switch to file upload</div>
                            </div>

                            {isLoading ?
                                <img src={loader} alt='' className='Loading'></img>
                                :
                                <div className='send-btn'><div onClick={() => handleSubmitFile(orderDetail.orderId)}>SEND</div></div>
                            }
                        </>
                    ) : (null)}
                </div>
            </div>
        </div >
    )
};

export default SellerInProgressDetail;