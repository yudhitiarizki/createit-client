import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useState } from 'react';
import './Packages.css';
import { useDispatch } from 'react-redux';
import { createPackage, getPackageBySlug } from '../../redux/actions/packages';
import Gif from '../../asset/Login/loader.gif';

const AddPackage = ({ serviceId, packages, slug }) => {

    const dispatch = useDispatch();

    const [type, setType] = useState('');
    const [delivery, setDelivery] = useState('');
    const [revision, setRevision] = useState('');
    const [noOfConcept, setnoOfConcept] = useState('');
    const [noOfPages, setnoOfPages] = useState('');
    const [maxDuration, setmaxDuration] = useState('');
    const [price, setPrice] = useState('');

    const [Loading, setLoading] = useState(false);

    const handleAddPckg = () => {
        setLoading(true);
        dispatch(createPackage(serviceId, type, delivery, revision, noOfConcept, noOfPages, maxDuration, price)).then(() => {
            dispatch(getPackageBySlug(slug));
            setType('');
            setDelivery('');
            setRevision('');
            setnoOfConcept(null);
            setnoOfPages(null);
            setmaxDuration(null);
            setPrice('');
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        })
    }

    return (
        <div>
            {/* Button trigger modal */}
            <button type="button" className='pckg-new-btn' data-bs-toggle="modal" data-bs-target="#exampleModal">
                Create New
            </button>

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header1">
                            <div></div>
                            <span id="exampleModalLabel">Add Package</span>
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
                            {(packages.length === 0) ? (
                                <>
                                    <div className='modal1-inputcntr'>
                                        <label>No of noOfConcept</label>
                                        <span className='keterangan-modal'>(Fill this if you provide a service related to design)</span>
                                        <input type='number' min='0' className='inputfield-2' value={noOfConcept} onChange={(event) => { setnoOfConcept(event.target.value) }}/>
                                    </div>
                                    <div className='modal1-inputcntr'>
                                        <label>No of noOfPages</label>
                                        <span className='keterangan-modal'>(Fill this if you provide a service related to web/mobile design etc.)</span>
                                        <input type='number' min='0' className='inputfield-2' value={noOfPages} onChange={(event) => { setnoOfPages(event.target.value) }}/>
                                    </div>
                                    <div className='modal1-inputcntr'>
                                        <label>Max Duration (in minutes)</label>
                                        <span className='keterangan-modal'>(Fill this if you provide a service related to video editing etc.)</span>
                                        <input type='number' min='0' className='inputfield-2' value={maxDuration} onChange={(event) => { setmaxDuration(event.target.value) }}/>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {(packages[0].noOfConcept) ? (
                                        <div className='modal1-inputcntr'>
                                            <label>No of noOfConcept <span>*</span></label>
                                            <input type='number' min='1' className='inputfield-2' value={noOfConcept} onChange={(event) => { setnoOfConcept(event.target.value) }} required />
                                        </div>
                                    ) : (<></>)}
                                    {(packages[0].noOfnoOfPages) ? (
                                        <div className='modal1-inputcntr'>
                                            <label>No of noOfPages <span>*</span></label>
                                            <input type='number' min='1' className='inputfield-2' value={noOfPages} onChange={(event) => { setnoOfPages(event.target.value) }} required />
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
                            { !Loading ? (
                                <button className="modal-save-btn" onClick={handleAddPckg}>Add Package</button>
                            ) : (
                                <img  src={Gif} alt="" className='Loading' />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AddPackage;