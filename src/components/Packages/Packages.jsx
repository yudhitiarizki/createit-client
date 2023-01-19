import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import React, { useCallback, useState } from 'react';
import { Modal } from "react-bootstrap";

import AddPackage from './AddPackage';

import { deletePackage, editPackage } from "../../redux/actions/packages";
import { sendMessage } from "../../redux/actions/message";
import { getServiceBySlug } from "../../redux/actions/service";

import './Packages.css';
import '../General/Sign.css';
import "bootstrap/dist/css/bootstrap.css";
import loader from '../../asset/Login/loader.gif';

const Packages = ({ data, serviceId, slug, name }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isLoggedIn, user, isSeller } = useSelector(state => state.auth);

    const packages = data;

    const [isLoading, setIsLoading] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);
    const [idLoad, setIdLoad] = useState(0);
    const [packageId, setPackageId] = useState('');
    const [type, setType] = useState('');
    const [delivery, setDelivery] = useState('');
    const [revision, setRevision] = useState('');
    const [noOfConcepts, setnoOfConcepts] = useState('');
    const [noOfPage, setnoOfPage] = useState('');
    const [maxDuration, setmaxDuration] = useState('');
    const [price, setPrice] = useState('');
    const [prevNoConcepts, setPrevNoConcepts] = useState('');
    const [prevNoPage, setPrevNoPage] = useState('');
    const [prevMaxDuration, setPrevMaxDuration] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = useCallback(() => setShow(false), []);

    const EditPckg = useCallback((item) => {
        setPackageId(item.packageId);
        setType(item.type);
        setDelivery(item.delivery);
        setRevision(item.revision);
        setnoOfConcepts(item.noOfConcepts);
        setPrevNoConcepts(item.noOfConcepts);
        setnoOfPage(item.noOfPage);
        setPrevNoPage(item.noOfPage);
        setmaxDuration(item.maxDuration);
        setPrevMaxDuration(item.maxDuration);
        setPrice(item.price);
        setShow(true);
    }, [])

    const handleEditPckg = useCallback(() => {
        setIsLoading(true)
        dispatch(editPackage(packageId, serviceId, type, delivery, revision, noOfConcepts, noOfPage, maxDuration, price))
            .then(() => {
                setIsLoading(false);
                setShow(false);
                dispatch(getServiceBySlug(slug));
            })
            .catch(() => {
                setIsLoading(false)
            })
    }, [dispatch, packageId, serviceId, type, delivery, revision, noOfConcepts, noOfPage, maxDuration, price, slug])

    const handleDeletePckg = useCallback((packageId) => {
        setIsLoading2(true)
        dispatch(deletePackage(packageId))
            .then(() => {
                setIsLoading2(false);
                setIdLoad(0);
                dispatch(getServiceBySlug(slug));
            })
            .catch(() => {
                setIsLoading2(false)
            })
    }, [dispatch, slug])

    const orderNow = useCallback((packageData) => {
        if (isLoggedIn) {
            if (user.role === 3 || (user.role === 2 && isSeller)) {
                sendMessage('error', 'You must be an ordinary user')
            } else {
                navigate('/createorder', { state: { package: packageData, service: name } });
            }
            
        } else {
            sendMessage('error', "Login is required.");
        }
    }, [isLoggedIn, navigate, name, user.role, isSeller])

    return (
        <>
            <div className='package-header'>
                <div className='pckg-header'>Packages</div>
                {(isLoggedIn && user.role === 2 && isSeller) ? (
                    ((packages.length === 3) ? (
                        <></>
                    ) : (
                        <AddPackage serviceId={serviceId} slug={slug} packages={packages} />
                    ))
                ) : (
                    <></>
                )}
            </div>
            <div className={(packages.length === 3) ? 'package-list' : 'package-list1'}>
                {packages.map((item, index) => (
                    <div key={`id-${index}`} className='package-list-cntr'>
                        {(idLoad === item.packageId) ?
                            (isLoading2 ?
                                <img src={loader} alt='' className='Loading'></img>
                                :
                                <></>
                            ) :
                            <>
                                <div className='pckg-white-cntr'>
                                    <div className='pckg-detail-cntr'>
                                        <div className='pckgdetail-title'>DETAILS</div>
                                        <div className='pckgdetail-info'>
                                            <div>Delivery Time: {item.delivery} days</div>
                                            <div>Limit of Revisions: {item.revision}</div>
                                            {(item.noOfConcepts) ? (
                                                <div>Number of Concept: {item.noOfConcepts}</div>
                                            ) : (
                                                <></>
                                            )}
                                            {(item.noOfPage) ? (
                                                <div>Number of Pages: {item.noOfPage}</div>
                                            ) : (
                                                <></>
                                            )}
                                            {(item.maxDuration) ? (
                                                <div>Max Duration: {item.maxDuration} minutes</div>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {(index === 0) ? (
                                    <>
                                        <div className='orange-arrow top-pckg-cntr'>
                                            {item.price % 1000 === 0 ?
                                                <div className='pckgdetail-price'>Rp {item.price / 1000}.000,-</div>
                                                : <div className='pckgdetail-price'>Rp {item.price / 1000},-</div>
                                            }

                                            {(isLoggedIn && user.role === 2 && isSeller) ? (
                                                <div className='edit-delete'>
                                                    <div type="button" className='edit-btn-modal' data-bs-toggle="modal" data-bs-target="#editpckg-modal" onClick={() => { EditPckg(item) }}>
                                                        <i className='bx bx-edit'></i>
                                                    </div>
                                                    <i className='bx bx-trash' type='button' onClick={() => { handleDeletePckg(item.packageId) }}></i>
                                                </div>
                                            ) : (
                                                <></>
                                            )}
                                            <div className='pckgdetail-type'>{item.type}</div>
                                        </div>
                                        <div className='ordernow-btn orange-btn' type='button' onClick={() => orderNow(item)}>ORDER NOW</div>
                                    </>
                                ) : (
                                    (index === 1) ? (
                                        <>
                                            <div className='pink-arrow top-pckg-cntr'>
                                                {item.price % 1000 === 0 ?
                                                    <div className='pckgdetail-price'>Rp {item.price / 1000}.000,-</div>
                                                    : <div className='pckgdetail-price'>Rp {item.price / 1000},-</div>
                                                }

                                                {(isLoggedIn && user.role === 2 && isSeller) ? (
                                                    <div className='edit-delete'>
                                                        <div type="button" className='edit-btn-modal' data-bs-toggle="modal" data-bs-target="#editpckg-modal" onClick={() => { EditPckg(item) }}>
                                                            <i className='bx bx-edit'></i>
                                                        </div>
                                                        <i className='bx bx-trash' type='button' onClick={() => { handleDeletePckg(item.packageId) }}></i>
                                                    </div>
                                                ) : (
                                                    <></>
                                                )}
                                                <div className='pckgdetail-type'>{item.type}</div>
                                            </div>
                                            <div className='ordernow-btn pink-btn' type='button' onClick={() => orderNow(item)}>ORDER NOW</div>
                                        </>
                                    ) : (
                                        <>
                                            <div className='purple-arrow top-pckg-cntr'>
                                                {item.price % 1000 === 0 ?
                                                    <div className='pckgdetail-price'>Rp {item.price / 1000}.000,-</div>
                                                    : <div className='pckgdetail-price'>Rp {item.price / 1000},-</div>
                                                }

                                                {(isLoggedIn && user.role === 2 && isSeller) ? (
                                                    <div className='edit-delete'>
                                                        <div type="button" className='edit-btn-modal' onClick={() => { EditPckg(item) }}>
                                                            <i className='bx bx-edit'></i>
                                                        </div>
                                                        <i className='bx bx-trash' type='button' onClick={() => { handleDeletePckg(item.packageId) }}></i>
                                                    </div>
                                                ) : (
                                                    <></>
                                                )}
                                                <div className='pckgdetail-type'>{item.type}</div>
                                            </div>
                                            <div className='ordernow-btn purple-btn' type='button' onClick={() => orderNow(item)}>ORDER NOW</div>
                                        </>
                                    )
                                )}
                            </>
                        }
                    </div>
                ))}
            </div>

            {/* Modal */}
            <Modal show={show} onHide={handleClose}>
                <div className="modal-header1">
                    <div></div>
                    <span>Edit Package</span>
                    <button className="btn-close-modal" onClick={handleClose}><i className='bx bx-x'></i></button>
                </div>

                <div className="modal-body1">
                    <div className='modal1-inputcntr'>
                        <label>Type <span>*</span></label>
                        <input type='text' className='inputfield-2' value={type} onChange={(event) => { setType(event.target.value) }} required />
                    </div>
                    <div className='modal1-inputcntr'>
                        <label>Limit of Revision <span>*</span></label>
                        <input type='number' min='0' className='inputfield-2' value={revision} onChange={(event) => { setRevision(event.target.value) }} required />
                    </div>
                    <div className='modal1-inputcntr'>
                        <label>Delivery Time (in days) <span>*</span></label>
                        <input type='number' min='1' className='inputfield-2' value={delivery} onChange={(event) => { setDelivery(event.target.value) }} required />
                    </div>
                    {(prevNoConcepts) ? (
                        <div className='modal1-inputcntr'>
                            <label>No of noOfConcept <span>*</span></label>
                            <input type='number' min='1' className='inputfield-2' value={noOfConcepts} onChange={(event) => { setnoOfConcepts(event.target.value) }} required />
                        </div>
                    ) : (<></>)}
                    {(prevNoPage) ? (
                        <div className='modal1-inputcntr'>
                            <label>No of noOfPages <span>*</span></label>
                            <input type='number' min='1' className='inputfield-2' value={noOfPage} onChange={(event) => { setnoOfPage(event.target.value) }} required />
                        </div>
                    ) : (<></>)}
                    {(prevMaxDuration) ? (
                        <div className='modal1-inputcntr'>
                            <label>Max Duration (in minutes) <span>*</span></label>
                            <input type='number' min='1' className='inputfield-2' value={maxDuration} onChange={(event) => { setmaxDuration(event.target.value) }} required />
                        </div>
                    ) : (<></>)}
                    <div className='modal1-inputcntr'>
                        <label>Price (Rp) <span>*</span></label>
                        <input type='number' min='0' className='inputfield-2' value={price} onChange={(event) => { setPrice(event.target.value) }} required />
                    </div>
                </div>

                <div className="modal-footer1">
                    {isLoading ?
                        <img src={loader} alt={1} className='Loading'></img>
                        :
                        <button className="modal-save-btn" onClick={handleEditPckg}>Edit Package</button>
                    }
                </div>
            </Modal>
        </>
    )
};

export default Packages;