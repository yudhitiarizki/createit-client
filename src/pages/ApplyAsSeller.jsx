import React from 'react';
import Footer from '../components/General/Footer';
import ApplySellers from '../components/ApplyAsSeller/ApplySeller';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { ApplySeller } from '../redux/actions/auth';
import { useNavigate } from 'react-router-dom';

const ApplyAsSeller = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (photoProfile, description, noRekening, bankName, cardHolder) => {
        dispatch(ApplySeller(photoProfile, description, noRekening, bankName, cardHolder)).then(() => {
            window.location.reload()
            navigate('/')
        })
    };
    return (
        <>
            <ApplySellers handleSubmit={handleSubmit}/>
            <Footer />
            <ToastContainer />
        </>
    );
};

export default ApplyAsSeller;