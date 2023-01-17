import './OrderDetailUser.css';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { orderApprove } from '../../redux/actions/order';
import { createReview } from '../../redux/actions/review';
import loader from '../../asset/Login/loader.gif';
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const ApproveOrder = ({ orderId }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [review, setReview] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = useCallback(() => setShow(false), []);
    const handleShow = useCallback(() => setShow(true), []);

    const handleCancel = useCallback(() => {
        setRating(0);
        setHover(0);
        setReview('');
        setShow(false);
    }, [])

    const submitReview = useCallback(() => {
        setIsLoading(true);
        dispatch(createReview(orderId, review, rating)).then(() => {
            dispatch(orderApprove(orderId))
                .then(() => {
                    setIsLoading(false)
                    setRating(0);
                    setHover(0);
                    setReview('');
                    setShow(false);
                    navigate('/user/order');
                })
                .catch(() => {
                    setIsLoading(false)
                })
        }).catch(() => {
            setIsLoading(false)
        })
    }, [orderId, review, rating, dispatch, navigate])

    return (
        <>
            <div type="button" className="apprv-btn" onClick={handleShow}>APPROVE</div>

            {/* Modal */}
            <Modal show={show} onHide={handleClose} className="askrvsn-modal">
                <div className="modal-title22">ORDER REVIEW</div>
                <div className="modal-body22">
                    <div className='starrating-cntr'>
                        {[...Array(5)].map((star, index) => (
                            <div
                                type='button'
                                key={index}
                                className={((index + 1) <= ((rating && hover) || hover)) ? "on" : "off"}
                                onClick={() => { setRating(index + 1) }}
                                onMouseEnter={() => { setHover(index + 1) }}
                                onMouseLeave={() => { setHover(rating) }}
                            >
                                <i className='bx bxs-star'></i>
                            </div>
                        ))}
                    </div>
                    <textarea placeholder='Write your review here...' rows={6} className='askrvsn-box' value={review} onChange={(event) => { setReview(event.target.value) }} />
                </div>

                {isLoading ?
                    <div className='middle-loader'>
                        <img src={loader} alt={1} className='Loading'></img>
                    </div>
                    :
                    <div className="modal-footer22">
                        <button type="button" className="askrvsn-cancelbtn" onClick={handleCancel}>Cancel</button>
                        <button type="button" className="askrevsn-submit" onClick={submitReview}>Add</button>
                    </div>
                }
            </Modal>
        </>
    )
};

export default ApproveOrder;