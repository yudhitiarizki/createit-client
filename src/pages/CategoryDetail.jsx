import React, { useEffect } from 'react';
import Footer from '../components/General/Footer';
import ServicePerCategory from '../components/Services/ServicePerCategory';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getServiceByCategory } from '../redux/actions/service';
import Loader from '../components/General/Loader';
import { setToLoad, setToNotLoad } from '../redux/actions/loader';

const CategoryDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { isLoading } = useSelector(state => state.Loading);

  useEffect(() => {
    dispatch(setToLoad());
    dispatch(getServiceByCategory(id)).then(() => {
      dispatch(setToNotLoad());
    });
  }, [id, dispatch]);

  return (
    <>
      {isLoading ?
        <Loader />
        :
        <>
          <ServicePerCategory />
          <div style={{ 'width': '100%', 'background': '#e5e5e533' }}>
            <Footer />
          </div>
        </>
      }
    </>
  );
};

export default CategoryDetail;