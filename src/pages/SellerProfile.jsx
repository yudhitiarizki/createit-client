import React, { useEffect } from 'react';
import Footer from '../components/General/Footer';
import Profile from '../components/SellerProfile/Profile';
import ServiceList from '../components/SellerProfile/ServiceList';
import { useSelector, useDispatch } from 'react-redux';
import { getMySeller } from '../redux/actions/seller';
import { useNavigate } from 'react-router-dom';

const SellerProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const seller = useSelector(state => state.seller);
    const { user, isLoggedIn, role } = useSelector(state => state.auth);

    useEffect(() => {
      if(!isLoggedIn){
        navigate('/')
      } else if ( role !== 2) {
        navigate('/');
      }
    }, [isLoggedIn]);

    useEffect(() => {
        dispatch(getMySeller(user.seller.sellerId));
    }, [dispatch]);

    return (
        <>
          <Profile seller={seller} />
          <ServiceList seller={seller} />
          <Footer />
        </>
  );
};

export default SellerProfile;