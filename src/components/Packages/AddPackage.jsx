import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from "react-bootstrap";

import { createPackage } from '../../redux/actions/packages';
import { getServiceBySlug } from '../../redux/actions/service';

import "bootstrap/dist/css/bootstrap.css";
import '../General/Sign.css';
import './Packages.css';
import Gif from '../../asset/Login/loader.gif';

const AddPackage = ({ serviceId, packages, slug }) => {
    const dispatch = useDispatch();

    const [type, setType] = useState('');
    const [delivery, setDelivery] = useState('');
    const [revision, setRevision] = useState('');
    const [noOfConcepts, setnoOfConcepts] = useState('');
    const [noOfPage, setnoOfPage] = useState('');
    const [maxDuration, setmaxDuration] = useState('');
    const [price, setPrice] = useState('');
    const [Loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = useCallback(() => setShow(false), []);
    const handleShow = useCallback(() => setShow(true), []);

    const handleAddPckg = useCallback(() => {
        setLoading(true);
        dispatch(createPackage(serviceId, type, delivery, revision, noOfConcepts, noOfPage, maxDuration, price)).then(() => {
            dispatch(getServiceBySlug(slug));
            setType('');
            setDelivery('');
            setRevision('');
            setnoOfConcepts(null);
            setnoOfPage(null);
            setmaxDuration(null);
            setPrice('');
            setLoading(false);
            setShow(false);
        }).catch(() => {
            setLoading(false);
        })
    }, [dispatch, serviceId, type, delivery, revision, noOfConcepts, noOfPage, maxDuration, price, slug])

    return (
        <div>
            {/* Button trigger modal */}
            <button type="button" className='pckg-new-btn' onClick={handleShow}>
                Create New
            </button>

            {/* Modal */}
            <Modal show={show} onHide={handleClose}>
                <div className="modal-header1">
                    <div></div>
                    <span>Add Package</span>
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
                    {(packages.length === 0) ? (
                        <>
                            <div className='modal1-inputcntr'>
                                <label>No of Concept</label>
                                <span className='keterangan-modal'>(Fill this if you provide a service related to design)</span>
                                <input type='number' min='0' className='inputfield-2' value={noOfConcepts} onChange={(event) => { setnoOfConcepts(event.target.value) }} />
                            </div>
                            <div className='modal1-inputcntr'>
                                <label>No of Pages</label>
                                <span className='keterangan-modal'>(Fill this if you provide a service related to web/mobile design etc.)</span>
                                <input type='number' min='0' className='inputfield-2' value={noOfPage} onChange={(event) => { setnoOfPage(event.target.value) }} />
                            </div>
                            <div className='modal1-inputcntr'>
                                <label>Max Duration (in minutes)</label>
                                <span className='keterangan-modal'>(Fill this if you provide a service related to video editing etc.)</span>
                                <input type='number' min='0' className='inputfield-2' value={maxDuration} onChange={(event) => { setmaxDuration(event.target.value) }} />
                            </div>
                        </>
                    ) : (
                        <>
                            {(packages[0].noOfConcepts) ? (
                                <div className='modal1-inputcntr'>
                                    <label>No of Concept <span>*</span></label>
                                    <input type='number' min='1' className='inputfield-2' value={noOfConcepts} onChange={(event) => { setnoOfConcepts(event.target.value) }} required />
                                </div>
                            ) : (<></>)}
                            {(packages[0].noOfPage) ? (
                                <div className='modal1-inputcntr'>
                                    <label>No of Pages <span>*</span></label>
                                    <input type='number' min='1' className='inputfield-2' value={noOfPage} onChange={(event) => { setnoOfPage(event.target.value) }} required />
                                </div>
                            ) : (<></>)}
                            {(packages[0].maxDuration) ? (
                                <div className='modal1-inputcntr'>
                                    <label>Max Duration (in minutes) <span>*</span></label>
                                    <input type='number' min='1' className='inputfield-2' value={maxDuration} onChange={(event) => { setmaxDuration(event.target.value) }} required />
                                </div>
                            ) : (<></>)}
                        </>
                    )}
                    <div className='modal1-inputcntr'>
                        <label>Price (Rp) <span>*</span></label>
                        <input type='number' min='0' className='inputfield-2' value={price} onChange={(event) => { setPrice(event.target.value) }} required />
                    </div>
                </div>

                <div className="modal-footer1">
                    {!Loading ? (
                        <button className="modal-save-btn" onClick={handleAddPckg}>Add Package</button>
                    ) : (
                        <img src={Gif} alt={1} className='Loading' loading="lazy"/>
                    )}
                </div>
            </Modal>
        </div>
    )
};

export default AddPackage;