import './OrderDetailUser.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { orderRevising } from '../../redux/actions/order';

const AskRevision = ({ orderId }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [note, setNote] = useState('');

    const submitRevision = () => {
        dispatch(orderRevising(orderId, note)).then(() => {
            setNote('');
            navigate('/user/order');
        })
        
    }

    const handleCancel = () => {
        setNote('');
    }

    return (
        <>
            <div type="button" className="rev-btn" data-bs-toggle="modal" data-bs-target="#exampleModal1">ASK FOR REVISION</div>

            {/* Modal */}
            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content askrvsn-modal">
                        <div className="modal-title22" id="exampleModalLabel">Revision Note</div>
                        <div className="modal-body22">
                            <textarea rows={6} className='askrvsn-box' value={note} onChange={(event) => {setNote(event.target.value)}}/>
                        </div>
                        <div className="modal-footer22">
                            <button type="button" className="askrvsn-cancelbtn" data-bs-dismiss="modal" onClick={handleCancel}>Cancel</button>
                            <button type="button" className="askrevsn-submit" onClick={submitRevision}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AskRevision;