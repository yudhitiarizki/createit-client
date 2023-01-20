import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getOrderNew, patchOrderWorking } from '../redux/actions/order';
import { setToLoad, setToNotLoad, setWentWrong } from '../redux/actions/loader';
import { getNewOrderDetail, hideNewOrderDetail } from '../redux/actions/NewOrderDetailSeller';

import Footer from '../components/General/Footer';
import SellerIncomingOrder from '../components/SellerIncomingOrder/SellerIncomingOrder';
import Loader from '../components/General/Loader';
import SomethingWrong from '../components/SomethingWrong/SomethingWrong';
import { SocketContext } from '../context/socket-context';

const SellerNewOrder = () => {
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);

  const { user, role, isLoggedIn, isSeller, isVerified } = useSelector(state => state.auth);
  const { isLoading, isError } = useSelector(state => state.Loading);

  const [approveLoading, setApproveLoading] = useState(false);
  const [idLoad, setIdLoad] = useState(0);

  useEffect(() => {
    dispatch(setToLoad());
    dispatch(getOrderNew())
      .then(() => {
        dispatch(setToNotLoad());
      })
      .catch(() => {
        dispatch(setWentWrong());
      })
  }, [dispatch]);

  const handleDetail = useCallback((order) => {
    dispatch(getNewOrderDetail(order))
  }, [dispatch]);

  const hideDetail = useCallback(() => {
    dispatch(hideNewOrderDetail());
}, [dispatch]);

  const handleApproved = useCallback((orderId, userId) => {
    setApproveLoading(true);
    setIdLoad(orderId);
    dispatch(patchOrderWorking(orderId))
      .then(() => {
        socket.emit('sendMessage', {
          senderId: user.userId, 
          reseiverId: userId, 
          text: `Order #${orderId} has working!`,
          date: Date.now()
        })
        dispatch(getOrderNew());
        dispatch(hideNewOrderDetail());
        setApproveLoading(false);
        setIdLoad(0);
      })
      .catch(() => {
        setApproveLoading(false);
        setIdLoad(0);
      })
  }, [dispatch]);

  if (isLoggedIn) {
    if (!(role === 2 && isVerified && isSeller)) { return <Navigate to='/' /> }
  } else { return <Navigate to='/login' /> }

  return (
    <>
      {isLoading ?
        <Loader />
        :
        (isError ?
          <SomethingWrong />
          :
          <>
            <SellerIncomingOrder
              approveLoading={approveLoading}
              idLoad={idLoad}
              handleDetail={handleDetail}
              handleApproved={handleApproved}
              hideDetail={hideDetail}
            />
            <Footer />
          </>
        )
      }
    </>
  );
};

export default SellerNewOrder;