import Navbar from "../General/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './UserOrders.css';
import AllOrdersTable from "./AllOrdersTable";

const UserOrders = () => {
    // Data Dummy
    const User = {
        firstName: "Ahmad",
        lastName: "Na Jaemin",
        username: "admadNaJaemin",
        email: "User1@gmail.com",
        role: 3,
        phoneNumber: "081972197028",
        token: "xsh38hjddnwkdj82",
        createdAt: "27/06/2022"
    };

    //Data Dummy
    const Order = [
        {
            orderId: 1,
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            title: 'IOT',
            type: 'Regular',
            price: 50999,
            note: 'logo name: CreateIT',
            status: 'Checking Payment',
            revisionLeft: 1,
            response: '',
            createdAt: '02/01/2023'
        },
        {
            orderId: 2,
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            title: 'IOT',
            type: 'Regular',
            note: 'logo name: CreateIT',
            price: 50999,
            status: 'Pending',
            revisionLeft: '1',
            response: '',
            createdAt: '02/01/2023'
        },
        {
            orderId: 3,
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            title: 'IOT',
            type: 'Advanced',
            price: 70999,
            note: 'logo name: CreateIT',
            status: 'Working',
            revisionLeft: '2',
            response: '',
            createdAt: '02/01/2023'
        },
        {
            orderId: 4,
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            title: 'IOT',
            type: 'Advanced',
            price: 70999,
            note: 'logo name: CreateIT',
            status: 'Approved',
            revisionLeft: '2',
            response: '',
            createdAt: '02/01/2023'
        },
        {
            orderId: 5,
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            title: 'IOT',
            type: 'Business',
            price: 199999,
            note: 'logo name: CreateIT',
            status: 'Revision',
            revisionLeft: '2',
            response: '',
            createdAt: '02/01/2023'
        },
        {
            orderId: 6,
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            title: 'IOT',
            type: 'Business',
            price: 199999,
            note: 'logo name: CreateIT',
            status: 'Done',
            revisionLeft: '1',
            response: '',
            createdAt: '02/01/2023'
        },
        {
            orderId: 7,
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            title: 'bus',
            type: 'cek',
            price: 199999,
            note: 'logo name: CreateIT',
            status: 'Done',
            revisionLeft: '1',
            response: '',
            createdAt: '02/01/2023'
        }
    ];

    const orderCompleted = Order.filter(item => (item.status === 'Approved' || item.status === 'Done'));
    const orderOngoing = Order.filter(item => (item.status === 'Revision' || item.status === 'Working'));

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
                        <div>User since</div>
                        <span>{User.createdAt}</span>
                    </div>
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
                        <AllOrdersTable allOrder={1} onGoing={0} completed={0}/>
                    </div>
                    <div id="user-order-ongoing" style={{ 'display': 'none' }}>
                        <AllOrdersTable allOrder={0} onGoing={1} completed={0} />
                    </div>
                    <div id='user-order-completed' style={{ 'display': 'none' }}>
                        <AllOrdersTable allOrder={0} onGoing={0} completed={1} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserOrders;