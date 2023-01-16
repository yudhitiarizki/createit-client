
import { useDispatch, useSelector } from "react-redux";
import './Packages.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import AddPackage from './AddPackage';
import { deletePackage, editPackage, getPackageBySlug } from "../../redux/actions/packages";
import { sendMessage } from "../../redux/actions/message";
import loader from '../../asset/Login/loader.gif';

const Packages = ({ data, serviceId, slug, name, userId }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const packages = data;

    const { isLoggedIn, user, isSeller } = useSelector(state => state.auth);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);
    const [idLoad, setIdLoad] = useState(0);

    const [packageId, setPackageId] = useState('');
    const [type, setType] = useState('');
    const [delivery, setDelivery] = useState('');
    const [revision, setRevision] = useState('');
    const [noOfConcept, setnoOfConcept] = useState('');
    const [noOfPages, setnoOfPages] = useState('');
    const [maxDuration, setmaxDuration] = useState('');
    const [price, setPrice] = useState('');

    const EditPckg = (item) => {
        setPackageId(item.packageId);
        setType(item.type);
        setDelivery(item.delivery);
        setRevision(item.revision);
        setnoOfConcept(item.noOfConcept);
        setnoOfPages(item.noOfnoOfPages);
        setmaxDuration(item.maxDuration);
        setPrice(item.price);
    }

    const handleEditPckg = () => {
        setIsLoading(true)
        dispatch(editPackage(packageId, serviceId, type, delivery, revision, noOfConcept, noOfPages, maxDuration, price))
            .then(() => {
                setIsLoading(false)
                dispatch(getPackageBySlug(slug));
                window.location.reload();
            })
            .catch(() => {
                setIsLoading(false)
            })
    }

    const handleDeletePckg = (packageId) => {
        setIsLoading2(true)
        dispatch(deletePackage(packageId))
            .then(() => {
                setIsLoading2(false)
                dispatch(getPackageBySlug(slug));
            })
            .catch(() => {
                setIsLoading2(false)
            })
    }

    const orderNow = (packageData) => {
        if (isLoggedIn) {
            navigate('/createorder', { state: { package: packageData, service: name } });
        } else {
            sendMessage('error', "Login is required.");
        }
    }

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
                                            {(item.noOfConcept) ? (
                                                <div>Number of noOfConcept: {item.noOfConcept}</div>
                                            ) : (
                                                <></>
                                            )}
                                            {(item.noOfnoOfPages) ? (
                                                <div>Number of noOfPages: {item.noOfnoOfPages}</div>
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
                                            <div className='pckgdetail-price'>Rp {item.price},-</div>
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
                                                <div className='pckgdetail-price'>Rp {item.price},-</div>
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
                                                <div className='pckgdetail-price'>Rp {item.price},-</div>
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
            <div className="modal fade" id="editpckg-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header1">
                            <div></div>
                            <span id="exampleModalLabel">Edit Package</span>
                            <button className="btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i className='bx bx-x'></i></button>
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
                            {(noOfConcept) ? (
                                <div className='modal1-inputcntr'>
                                    <label>No of noOfConcept <span>*</span></label>
                                    <input type='number' min='1' className='inputfield-2' value={noOfConcept} onChange={(event) => { setnoOfConcept(event.target.value) }} required />
                                </div>
                            ) : (<></>)}
                            {(noOfPages) ? (
                                <div className='modal1-inputcntr'>
                                    <label>No of noOfPages <span>*</span></label>
                                    <input type='number' min='1' className='inputfield-2' value={noOfPages} onChange={(event) => { setnoOfPages(event.target.value) }} required />
                                </div>
                            ) : (<></>)}
                            {(maxDuration) ? (
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
                                <img src={loader} alt='' className='Loading'></img>
                                :
                                <button className="modal-save-btn" onClick={handleEditPckg}>Edit Package</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Packages;