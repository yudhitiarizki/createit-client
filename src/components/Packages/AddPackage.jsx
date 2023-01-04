import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useState } from 'react';
import './Packages.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import axios from 'axios';

const AddPackage = ({ serviceId, packages }) => {
    // const { user } = useSelector(state => state.auth);
    // const token = user.token;

    const [type, setType] = useState('');
    const [delivery, setDelivery] = useState('');
    const [revision, setRevision] = useState('');
    const [concepts, setConcepts] = useState('');
    const [pages, setPages] = useState('');
    const [maxduration, setMaxduration] = useState('');
    const [price, setPrice] = useState('');

    const handleAddPckg = () => {
        // axios.post(
        //     "https://coal-jolly-single.glitch.me/packages",
        //     { 
        //         serviceId: serviceId,
        //         type: type,
        //         delivery: delivery,
        //         revision: revision,
        //         noOfConcept: concepts,
        //         noOfPages: pages,
        //         maxDuration: maxduration,
        //         price: price
        //     },
        //     { headers: { Authorization: `Bearer ${token}` } }
        // ).then((response) => {
        //     toast.success(response.data.message, {
        //         position: "top-right",
        //         autoClose: 3000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "light",
        //     });
        //     setType('');
        //     setDelivery('');
        //     setRevision('');
        //     setConcepts(null);
        //     setPages(null);
        //     setMaxduration(null);
        //     setPrice('');
        // }).catch((error) => {
        //     toast.error(error.response.data.message, {
        //         position: "top-right",
        //         autoClose: 3000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "light",
        //     });
        // })
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
                                        <label>No of Concepts</label>
                                        <span className='keterangan-modal'>(Fill this if you provide a service related to design)</span>
                                        <input type='number' min='0' className='inputfield-2' value={concepts} onChange={(event) => { setConcepts(event.target.value) }}/>
                                    </div>
                                    <div className='modal1-inputcntr'>
                                        <label>No of Pages</label>
                                        <span className='keterangan-modal'>(Fill this if you provide a service related to web/mobile design etc.)</span>
                                        <input type='number' min='0' className='inputfield-2' value={pages} onChange={(event) => { setPages(event.target.value) }}/>
                                    </div>
                                    <div className='modal1-inputcntr'>
                                        <label>Max Duration (in minutes)</label>
                                        <span className='keterangan-modal'>(Fill this if you provide a service related to video editing etc.)</span>
                                        <input type='number' min='0' className='inputfield-2' value={maxduration} onChange={(event) => { setMaxduration(event.target.value) }}/>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {(packages[0].noOfConcept) ? (
                                        <div className='modal1-inputcntr'>
                                            <label>No of Concepts <span>*</span></label>
                                            <input type='number' min='1' className='inputfield-2' value={concepts} onChange={(event) => { setConcepts(event.target.value) }} required />
                                        </div>
                                    ) : (<></>)}
                                    {(packages[0].noOfPages) ? (
                                        <div className='modal1-inputcntr'>
                                            <label>No of Pages <span>*</span></label>
                                            <input type='number' min='1' className='inputfield-2' value={pages} onChange={(event) => { setPages(event.target.value) }} required />
                                        </div>
                                    ) : (<></>)}
                                    {(packages[0].maxDuration) ? (
                                        <div className='modal1-inputcntr'>
                                            <label>Max Duration (in minutes) <span>*</span></label>
                                            <input type='number' min='1' className='inputfield-2' value={maxduration} onChange={(event) => { setMaxduration(event.target.value) }} required />
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
                            <button className="modal-save-btn" onClick={handleAddPckg}>Add Package</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
};

export default AddPackage;