import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Footer from '../components/General/Footer';
import Loader from '../components/General/Loader';
import SellerOrderInProgress from '../components/SellerOrderInProgress/SellerOrderInProgress';
import SomethingWrong from '../components/SomethingWrong/SomethingWrong';

import { setToLoad, setToNotLoad, setWentWrong } from '../redux/actions/loader';
import { getOrderProgress } from '../redux/actions/order';

const SellerProgressOrder = () => {
  const dispatch = useDispatch();

  const { role, isLoggedIn, isSeller, isVerified } = useSelector(state => state.auth);
  const { isLoading, isError } = useSelector(state => state.Loading);

  useEffect(() => {
    dispatch(setToLoad());
    dispatch(getOrderProgress())
      .then(() => {
        dispatch(setToNotLoad());
      })
      .catch(() => {
        dispatch(setWentWrong());
      })
  }, [dispatch]);

  if (isLoggedIn) {
    if (!(role === 2 && isVerified && isSeller)) { return <Navigate to='/' /> }
  } else { return <Navigate to='/login' /> }

  return (
    <>
      {isLoading ?
        <Loader />
        : (isError ?
          <SomethingWrong />
          :
          <>
            <SellerOrderInProgress />
            <Footer />
          </>
        )
      }
    </>
  );
};

export default SellerProgressOrder;