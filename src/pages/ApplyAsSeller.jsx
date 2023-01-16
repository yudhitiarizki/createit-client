import React from 'react';
import Footer from '../components/General/Footer';
import ApplySellers from '../components/ApplyAsSeller/ApplySeller';
import { useDispatch, useSelector } from 'react-redux';
import { ApplySeller } from '../redux/actions/auth';
import { Navigate, useNavigate } from 'react-router-dom';

const ApplyAsSeller = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoggedIn } = useSelector(state => state.auth);

    const handleSubmit = (photoProfile, description, noRekening, bankName, cardHolder) => {
        dispatch(ApplySeller(photoProfile, description, noRekening, bankName, cardHolder)).then(() => {
            navigate('/')
        })
    };

    if (!isLoggedIn) {
        return <Navigate to='/' />
    }

    return (
        <>
            <ApplySellers handleSubmit={handleSubmit}/>
            <Footer />
        </>
    );
};

export default ApplyAsSeller;