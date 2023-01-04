import './Packages.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AddPackage from './AddPackage';
import axios from 'axios';

const Packages = ({ slug, serviceId }) => {
    const navigate = useNavigate();

    // data dummy
    const packages = [
        {
            packageId: 1,
            serviceId: 1,
            slug: slug,
            type: "REGULAR",
            delivery: 3,
            revision: 1,
            noOfConcept: 1,
            noOfPages: null,
            maxDuration: null,
            price: 50999
        },
        {
            packageId: 2,
            serviceId: 1,
            slug: slug,
            type: "ADVANCED",
            delivery: 3,
            revision: 2,
            noOfConcept: 2,
            noOfPages: null,
            maxDuration: null,
            price: 79999
        }
        // {
        //     packageId: 3,
        //     serviceId: 1,
        //     slug: slug,
        //     type: "BUSINESS",
        //     delivery: 2,
        //     revision: 3,
        //     noOfConcept: 2,
        //     noOfPages: null,
        //     maxDuration: null,
        //     price: 199999
        // }
    ]

    // ini nanti dari redux
    const isLoggedIn = true;
    const user = {
        "username": "Ahmad Na Jaemin",
        "email": "User1@gmail.com",
        "role": 2,
        "phoneNumber": "081972197028",
        "token": "xsh38hjddnwkdj82"
    };
    const isSeller = true;

    const [packageId, setPackageId] = useState('');
    const [type, setType] = useState('');
    const [delivery, setDelivery] = useState('');
    const [revision, setRevision] = useState('');
    const [concepts, setConcepts] = useState(null);
    const [pages, setPages] = useState(null);
    const [maxduration, setMaxduration] = useState(null);
    const [price, setPrice] = useState('');

    useEffect(() => {
        if (packages.length !== 3) {
            document.getElementById('pckg-list').classList.remove('package-list');
            document.getElementById('pckg-list').classList.add('package-list1');
        } else {
            document.getElementById('pckg-list').classList.add('package-list');
            document.getElementById('pckg-list').classList.remove('package-list1');
        }
    }, [packages.length]);

    const EditPckg = (item) => {
        setPackageId(item.packageId);
        setType(item.type);
        setDelivery(item.delivery);
        setRevision(item.revision);
        setConcepts(item.concepts);
        setPages(item.noOfPages);
        setMaxduration(item.maxDuration);
        setPrice(item.price);
    }

    const handleEditPckg = () => {
        axios.put(
            `https://coal-jolly-single.glitch.me/packages/${packageId}`,
            {
                type: type,
                delivery: delivery,
                revision: revision,
                noOfConcept: concepts,
                noOfPages: pages,
                maxDuration: maxduration,
                price: price
            },
            { headers: { Authorization: `Bearer ${user.token}` } }
        ).then((response) => {
            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setPackageId('');
            setType('');
            setDelivery('');
            setRevision('');
            setConcepts(null);
            setPages(null);
            setMaxduration(null);
            setPrice('');
        }).catch((error) => {
            toast.error(error.response.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        })
    }

    const handleDeletePckg = (packageId) => {
        axios.delete(
            "https://coal-jolly-single.glitch.me/packages",
            {
                data: { packageId: packageId },
                headers: { Authorization: `Bearer ${user.token}` }
            }
        ).then((response) => {
            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }).catch((error) => {
            toast.error(error.response.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        })
    }

    const orderNow = () => {
        if (isLoggedIn) {
            if (user.role === 3) {
                toast.error("Admin can't make an order.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else if (user.role === 2 && isSeller) {
                toast.error("Seller can't make an order.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                navigate('/createorder');
            }
        } else {
            toast.error("Login is required.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
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
                        <AddPackage serviceId={serviceId} packages={packages}/>
                    ))
                ) : (
                    <></>
                )}
            </div>
            <div className='package-list' id='pckg-list'>
                {packages.map((item, index) => (
                    <div key={`id-${index}`} className='package-list-cntr'>
                        <div className='pckg-white-cntr'>
                            <div className='pckg-detail-cntr'>
                                <div className='pckgdetail-title'>DETAILS</div>
                                <div className='pckgdetail-info'>
                                    <div>Delivery Time: {item.delivery} days</div>
                                    <div>Limit of Revisions: {item.revision}</div>
                                    {(item.noOfConcept) ? (
                                        <div>Number of Concepts: {item.noOfConcept}</div>
                                    ) : (
                                        <></>
                                    )}
                                    {(item.noOfPages) ? (
                                        <div>Number of Pages: {item.noOfPages}</div>
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
                                    <div className='pckgdetail-price'>Rp {item.price / 1000},-</div>
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
                                <div className='ordernow-btn orange-btn' type='button' onClick={orderNow}>ORDER NOW</div>
                            </>
                        ) : (
                            (index === 1) ? (
                                <>
                                    <div className='pink-arrow top-pckg-cntr'>
                                        <div className='pckgdetail-price'>Rp {item.price / 1000},-</div>
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
                                    <div className='ordernow-btn pink-btn' type='button' onClick={orderNow}>ORDER NOW</div>
                                </>
                            ) : (
                                <>
                                    <div className='purple-arrow top-pckg-cntr'>
                                        <div className='pckgdetail-price'>Rp {item.price / 1000},-</div>
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
                                    <div className='ordernow-btn purple-btn' type='button' onClick={orderNow}>ORDER NOW</div>
                                </>
                            )
                        )}
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
                            {(concepts) ? (
                                <div className='modal1-inputcntr'>
                                    <label>No of Concepts <span>*</span></label>
                                    <input type='number' min='1' className='inputfield-2' value={concepts} onChange={(event) => { setConcepts(event.target.value) }} required />
                                </div>
                            ) : (<></>)}
                            {(pages) ? (
                                <div className='modal1-inputcntr'>
                                    <label>No of Pages <span>*</span></label>
                                    <input type='number' min='1' className='inputfield-2' value={pages} onChange={(event) => { setPages(event.target.value) }} required />
                                </div>
                            ) : (<></>)}
                            {(maxduration) ? (
                                <div className='modal1-inputcntr'>
                                    <label>Max Duration (in minutes) <span>*</span></label>
                                    <input type='number' min='1' className='inputfield-2' value={maxduration} onChange={(event) => { setMaxduration(event.target.value) }} required />
                                </div>
                            ) : (<></>)}
                            <div className='modal1-inputcntr'>
                                <label>Price (Rp) <span>*</span></label>
                                <input type='number' min='0' className='inputfield-2' value={price} onChange={(event) => { setPrice(event.target.value) }} required />
                            </div>
                        </div>

                        <div className="modal-footer1">
                            <button className="modal-save-btn" onClick={handleEditPckg}>Edit Package</button>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    )
};

export default Packages;