import React, { useEffect } from 'react';
import Footer from '../components/General/Footer';
import Profile from '../components/SellerProfile/Profile';
import ServiceList from '../components/SellerProfile/ServiceList';
import { useSelector, useDispatch } from 'react-redux';
import { getMySeller } from '../redux/actions/seller';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { deleteService, getMyService } from '../redux/actions/service';

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
        dispatch(getMyService())
    }, [dispatch]);

    const onDelete = (serviceId) => {
      dispatch(deleteService(serviceId)).then(() => {
          dispatch(getMyService());
      })
  }

  const getServiceButton = () => {
    dispatch(getMyService())
}

    return (
        <>
          <Profile seller={seller} />
          <ServiceList seller={seller} onDelete={onDelete} getServiceButton={getServiceButton}/>
          <Footer />
          <ToastContainer />
        </>
  );
};

export default SellerProfile;