import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Footer from '../components/General/Footer';
import Loader from '../components/General/Loader';
import SomethingWrong from '../components/SomethingWrong/SomethingWrong';
import AllOrdersTable from '../components/UserOrder/AllOrdersTable';

import { setToLoad, setToNotLoad, setWentWrong } from '../redux/actions/loader';
import { getOrderUser } from '../redux/actions/order';

import '../components/UserOrder/UserOrders.css';

const UserOrder = () => {
  const dispatch = useDispatch();

  const { isLoading, isError } = useSelector(state => state.Loading);
  const { role, isLoggedIn, isSeller } = useSelector(state => state.auth);
  const Order = useSelector(state => state.order.order);

  const [activeTab, setActiveTab] = useState('alltab');
  const [activeOrder, setActiverOrder] = useState([]);

  const admin = role === 3;
  const seller = role === 2 && isSeller === true;

  useEffect(() => {
    dispatch(setToLoad());
    dispatch(getOrderUser())
      .then(() => {
        dispatch(setToNotLoad());
      })
      .catch(() => {
        dispatch(setWentWrong());
      })
  }, [dispatch]);

  const orderCompleted = Order.filter(item => (item.status === 'Approved' || item.status === 'Done'));
  const orderOngoing = Order.filter(item => (item.status === 'Revising' || item.status === 'Working' || item.status === 'Reviewing'));

  useEffect(() => {
    if (activeTab === 'alltab') {
      setActiverOrder(Order)
    }
  }, [activeTab, Order]);

  const allOrderTab = useCallback(() => {
    setActiveTab('alltab');
  }, [])

  const onGoingTab = useCallback(() => {
    setActiveTab('ongoingtab');
    setActiverOrder(orderOngoing);
  }, [orderOngoing])

  const completedTab = useCallback(() => {
    setActiveTab('completedtab');
    setActiverOrder(orderCompleted);
  }, [orderCompleted])

  // search button
  const [services, setServices] = useState([]);
  const [searchMessage, setSearchMessage] = useState('');
  const [searchkey, setSearchkey] = useState('');

  const regexSearch = useMemo(() => new RegExp(`.*(${searchkey.toUpperCase()}).*`), [searchkey]);

  const handleSearchKey = useCallback((event) => {
    setSearchkey(event.target.value);
  }, []);

  useEffect(() => {
    if (!searchkey) {
      setServices(activeOrder);
    } else {
      const filteredOrder1 = activeOrder.filter(item => (
        regexSearch.exec(item.title.toUpperCase()) ||
        regexSearch.exec(item.type.toUpperCase())
      ))
      setServices(filteredOrder1);
    }
  }, [searchkey, activeOrder, regexSearch])

  //sort
  const [dateSort, setDateSort] = useState(0);
  const [priceSort, setPriceSort] = useState(0);

  const handleSortPrice = useCallback(() => {
    if (priceSort) {
      if (searchkey) {
        const ordered0 = [...services]
        ordered0.sort((a, b) => (a.price - b.price));
        setServices(ordered0);
      } else {
        const ordered1 = [...activeOrder];
        ordered1.sort((a, b) => (a.price - b.price));
        setServices(ordered1);
      }
      setPriceSort(0)
    } else {
      if (searchkey) {
        const ordered10 = [...services]
        ordered10.sort((a, b) => (b.price - a.price));
        setServices(ordered10);
      } else {
        const ordered11 = [...activeOrder]
        ordered11.sort((a, b) => (b.price - a.price));
        setServices(ordered11);
      }
      setPriceSort(1)
    }
  }, [priceSort, searchkey, services, activeOrder])

  const handleSortDate = useCallback(() => {
    if (dateSort) {
      if (searchkey) {
        const ordered0 = [...services]
        ordered0.sort((a, b) => (new Date(a.createdAt) - new Date(b.createdAt)));
        setServices(ordered0);
      } else {
        const ordered1 = [...activeOrder];
        ordered1.sort((a, b) => (new Date(a.createdAt) - new Date(b.createdAt)));
        setServices(ordered1);
      }
      setDateSort(0)
    } else {
      if (searchkey) {
        const ordered10 = [...services]
        ordered10.sort((a, b) => (new Date(b.createdAt) - new Date(a.createdAt)));
        setServices(ordered10);
      } else {
        const ordered11 = [...activeOrder]
        ordered11.sort((a, b) => (new Date(b.createdAt) - new Date(a.createdAt)));
        setServices(ordered11);
      }
      setDateSort(1)
    }
  }, [searchkey, dateSort, services, activeOrder]);

  useEffect(() => {
    if (searchkey) {
      if (services.length === 0) {
        setSearchMessage('Order not found');
      } else {
        setSearchMessage('');
      }
    } else {
      setSearchMessage('');
    }
  }, [searchkey, services])

  if (isLoggedIn) {
    if ( admin || seller ) { return <Navigate to='/' /> }
  } else { return <Navigate to='/login' /> }

  return (
    <>
      {isLoading ?
        <Loader />
        :
        isError ?
          <SomethingWrong />
          :
          <>
            <div>
              <div className="navbar-text1">
                <div>User</div>
                <i className='bx bx-chevron-right'></i>
                <div>Order List</div>
              </div>
              <div className='userorder-cntr'>
                <div className="userorder-gnrlinfo">
                  <div className="userorder-infotitle">General Information</div>
                  <div className="userorder-row">
                    <div>Total order</div>
                    <span>{Order.length}</span>
                  </div>
                  <div className="userorder-row">
                    <div>Order Completed</div>
                    <span>{orderCompleted.length}</span>
                  </div>
                  <div className="userorder-row">
                    <div>Order Ongoing</div>
                    <span>{orderOngoing.length}</span>
                  </div>
                </div>

                <div className="user-list-cntr">
                  <div className="usrorder-toggletab">
                    <div className={activeTab === 'alltab' ? 'usrordr-toggleactv' : ''} onClick={allOrderTab}>All Order ({Order.length})</div>
                    <div className={activeTab === 'ongoingtab' ? 'usrordr-toggleactv' : ''} onClick={onGoingTab}>Order Ongoing ({orderOngoing.length})</div>
                    <div className={activeTab === 'completedtab' ? 'usrordr-toggleactv' : ''} onClick={completedTab}>Order Completed ({orderCompleted.length})</div>
                  </div>
                  <div>
                    <AllOrdersTable
                      services={services}
                      searchMessage={searchMessage}
                      searchkey={searchkey}
                      handleSortPrice={handleSortPrice}
                      handleSortDate={handleSortDate}
                      handleSearchKey={handleSearchKey}
                    />
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </>
      }
    </>
  );
};

export default UserOrder;