import React, { useEffect } from 'react';
import Footer from '../components/General/Footer';
import ServicePerCategory from '../components/Services/ServicePerCategory';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getServiceByCategory } from '../redux/actions/service';
import Loader from '../components/General/Loader';
import { setToLoad, setToNotLoad, setWentWrong } from '../redux/actions/loader';
import SomethingWrong from '../components/SomethingWrong/SomethingWrong';

const CategoryDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { isLoading, isError } = useSelector(state => state.Loading);

  const { service } = useSelector(state => state.service);

  useEffect(() => {
    dispatch(setToLoad());
    dispatch(getServiceByCategory(id))
      .then(() => {
        dispatch(setToNotLoad());
      })
      .catch(error => {
        dispatch(setWentWrong());
      });
  }, [id, dispatch]);

  return (
    <>
      {isLoading ?
        <Loader />
        : (isError ?
          <SomethingWrong />
          :
          <>
            <ServicePerCategory service={service} />
            <div style={{ 'width': '100%', 'background': '#e5e5e533' }}>
              <Footer />
            </div>
          </>
        )
      }
    </>
  );
};

export default CategoryDetail;