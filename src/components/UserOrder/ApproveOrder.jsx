import './OrderDetailUser.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { orderApprove } from '../../redux/actions/order';
import { createReview } from '../../redux/actions/review';
import loader from '../../asset/Login/loader.gif';

const ApproveOrder = ({ orderId }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [review, setReview] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleCancel = () => {
        setRating(0);
        setHover(0);
        setReview('');
    }

    const submitReview = () => {
        setIsLoading(true);
        dispatch(createReview(orderId, review, rating)).then(() => {
            dispatch(orderApprove(orderId))
                .then(() => {
                    setIsLoading(false)
                    setRating(0);
                    setHover(0);
                    setReview('');
                    navigate('/user/order');
                })
                .catch(() => {
                    setIsLoading(false)
                })
        }).catch(() => {
            setIsLoading(false)
        })
    }

    return (
        <>
            <div type="button" className="apprv-btn" data-bs-toggle="modal" data-bs-target="#exampleModal2">APPROVE</div>

            {/* Modal */}
            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content askrvsn-modal">
                        <div className="modal-title22" id="exampleModalLabel">ORDER REVIEW</div>
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
                        <div className="modal-footer22">
                            {isLoading ?
                                <img src={loader} alt='' className='Loading'></img>
                                :
                                <>
                                    <button type="button" className="askrvsn-cancelbtn" data-bs-dismiss="modal" onClick={handleCancel}>Cancel</button>
                                    <button type="button" className="askrevsn-submit" onClick={submitReview}>Add</button>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ApproveOrder;