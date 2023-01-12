import React, { useEffect } from 'react';
import Navbar from "../General/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './UserOrders.css';
import AllOrdersTable from "./AllOrdersTable";
import { useDispatch, useSelector } from 'react-redux';
import { getOrderUser } from '../../redux/actions/order';
import { Navigate } from 'react-router-dom';

const UserOrders = () => {
    const dispatch = useDispatch();

    const Order = useSelector(state => state.order.order);
    const { role, isLoggedIn, isSeller } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(getOrderUser());
    }, [dispatch]);

    if(isLoggedIn) {
        if (role === 3 || (role === 2 && isSeller === true)) { return <Navigate to='/' />}
    } else {return <Navigate to='/' />}

    const orderCompleted = Order.filter(item => (item.status === 'Approved' || item.status === 'Done'));
    const orderOngoing = Order.filter(item => (item.status === 'Revising' || item.status === 'Working' || item.status === 'Reviewing'));

    const allOrderTab = () => {
        document.getElementById('user-all-order').style.display = 'flex';
        document.getElementById('user-order-ongoing').style.display = 'none';
        document.getElementById('user-order-completed').style.display = 'none';

        const alltab = document.getElementById('userallOrdertab').classList;
        const ongoingtab = document.getElementById('userongoingtab').classList;
        const completedtab = document.getElementById('usercompletedtab').classList;

        if (!alltab.contains('usrordr-toggleactv')) {
            alltab.add('usrordr-toggleactv');

            if (ongoingtab.contains('usrordr-toggleactv')) {
                ongoingtab.remove('usrordr-toggleactv');
            }

            if (completedtab.contains('usrordr-toggleactv')) {
                completedtab.remove('usrordr-toggleactv');
            }
        }
    }

    const onGoingTab = () => {
        document.getElementById('user-all-order').style.display = 'none';
        document.getElementById('user-order-ongoing').style.display = 'flex';
        document.getElementById('user-order-completed').style.display = 'none';

        const alltab = document.getElementById('userallOrdertab').classList;
        const ongoingtab = document.getElementById('userongoingtab').classList;
        const completedtab = document.getElementById('usercompletedtab').classList;

        if (!ongoingtab.contains('usrordr-toggleactv')) {
            ongoingtab.add('usrordr-toggleactv');

            if (alltab.contains('usrordr-toggleactv')) {
                alltab.remove('usrordr-toggleactv');
            }

            if (completedtab.contains('usrordr-toggleactv')) {
                completedtab.remove('usrordr-toggleactv');
            }
        }
    }

    const completedTab = () => {
        document.getElementById('user-all-order').style.display = 'none';
        document.getElementById('user-order-ongoing').style.display = 'none';
        document.getElementById('user-order-completed').style.display = 'flex';

        const alltab = document.getElementById('userallOrdertab').classList;
        const ongoingtab = document.getElementById('userongoingtab').classList;
        const completedtab = document.getElementById('usercompletedtab').classList;

        if (!completedtab.contains('usrordr-toggleactv')) {
            completedtab.add('usrordr-toggleactv');

            if (alltab.contains('usrordr-toggleactv')) {
                alltab.remove('usrordr-toggleactv');
            }

            if (ongoingtab.contains('usrordr-toggleactv')) {
                ongoingtab.remove('usrordr-toggleactv');
            }
        }
    }

    return (
        <div>
            <div className="detailservice-navbar">
                <Navbar />
            </div>
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
                        <div id="userallOrdertab" className="usrordr-toggleactv" onClick={allOrderTab}>All Order ({Order.length})</div>
                        <div id="userongoingtab" onClick={onGoingTab}>Order Ongoing ({orderOngoing.length})</div>
                        <div id="usercompletedtab" onClick={completedTab}>Order Completed ({orderCompleted.length})</div>
                    </div>
                    <div id="user-all-order">
                        { Order && (
                            <AllOrdersTable Order={Order} />
                        ) }
                    </div>
                    <div id="user-order-ongoing" style={{ 'display': 'none' }}>
                        <AllOrdersTable Order={orderOngoing} />
                    </div>
                    <div id='user-order-completed' style={{ 'display': 'none' }}>
                        <AllOrdersTable Order={orderCompleted} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserOrders;