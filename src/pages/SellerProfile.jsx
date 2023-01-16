import React, { useEffect } from 'react';
import Footer from '../components/General/Footer';
import Profile from '../components/SellerProfile/Profile';
import ServiceList from '../components/SellerProfile/ServiceList';
import { useSelector, useDispatch } from 'react-redux';
import { getMySeller } from '../redux/actions/seller';
import { useNavigate } from 'react-router-dom';
import { deleteService, getMyService } from '../redux/actions/service';
import { setToLoad, setToNotLoad, setWentWrong } from '../redux/actions/loader';
import Loader from '../components/General/Loader';
import SomethingWrong from '../components/SomethingWrong/SomethingWrong';

const SellerProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoggedIn, role, isSeller } = useSelector(state => state.auth);
  const { isLoading, isError } = useSelector(state => state.Loading);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/')
    } else if (!(role === 2 && isSeller === true)) {
      navigate('/');
    }
  }, [isLoggedIn]);

  useEffect(() => {
    dispatch(setToLoad());
    dispatch(getMySeller(user.seller.sellerId));
    dispatch(getMyService())
      .then(() => {
        dispatch(setToNotLoad());
      })
      .catch(() => {
        dispatch(setWentWrong());
      })
  }, [dispatch]);

  return (
    <>
      {isLoading ?
        <Loader />
        : (isError ?
          <SomethingWrong />
          :
          <>
            <Profile />
            <ServiceList />
            <Footer />
          </>
        )}
    </>
  );
};

export default SellerProfile;