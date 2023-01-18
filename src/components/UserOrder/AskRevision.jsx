import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Modal } from "react-bootstrap";

import { orderRevising } from '../../redux/actions/order';
import loader from '../../asset/Login/loader.gif';

import './OrderDetailUser.css';
import "bootstrap/dist/css/bootstrap.css";

const AskRevision = ({ orderId }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [note, setNote] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = useCallback(() => setShow(false), []);
    const handleShow = useCallback(() => setShow(true), []);

    const submitRevision = useCallback(() => {
        setIsLoading(true);
        dispatch(orderRevising(orderId, note))
            .then(() => {
                setNote('');
                setIsLoading(false);
                setShow(false);
                navigate('/user/order');
            })
            .catch(() => {
                setIsLoading(false);
            })
    }, [dispatch, navigate, orderId, note]);

    const handleCancel = useCallback(() => {
        setNote('');
        setShow(false);
    }, []);

    return (
        <>
            <div type="button" className="rev-btn" onClick={handleShow}>ASK FOR REVISION</div>

            {/* Modal */}
            <Modal show={show} onHide={handleClose} className='askrvsn-modal'>
                <div className="modal-title22">Revision Note</div>
                <div className="modal-body22">
                    <textarea rows={6} className='askrvsn-box' value={note} onChange={(event) => setNote(event.target.value)} />
                </div>

                {isLoading ?
                    <div className='middle-loader'>
                        <img src={loader} alt={1} className='Loading'></img>
                    </div>
                    :
                    <div className="modal-footer22">
                        <button type="button" className="askrvsn-cancelbtn" onClick={handleCancel}>Cancel</button>
                        <button type="button" className="askrevsn-submit" onClick={submitRevision}>Add</button>
                    </div>
                }
            </Modal>
        </>
    )
};

export default AskRevision;