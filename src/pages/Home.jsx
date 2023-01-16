import React, { useEffect } from 'react';
import Footer from '../components/General/Footer';
import HomePage from '../components/Home/HomePage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { setToLoad, setToNotLoad, setWentWrong } from '../redux/actions/loader';
import { getService, getTopService } from '../redux/actions/service';
import Loader from '../components/General/Loader';
import SomethingWrong from '../components/SomethingWrong/SomethingWrong';

const Home = () => {
  const dispatch = useDispatch();

  const { isLoading, isError } = useSelector(state => state.Loading);

  useEffect(() => {
    dispatch(setToLoad());
    dispatch(getTopService())
      .catch(() => {
        dispatch(setWentWrong());
      });
    dispatch(getService())
      .then(() => {
        dispatch(setToNotLoad());
      })
      .catch(() => {
        dispatch(setWentWrong())
      })
  }, [dispatch]);

  return (
    <>
      {isLoading ?
        <Loader />
        :
        (isError ?
          <SomethingWrong />
          :
          <>
            <HomePage />
            <Footer />
            <ToastContainer />
          </>
        )
      }
    </>
  );
};

export default Home;