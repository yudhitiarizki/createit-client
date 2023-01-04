import Navbar from "../General/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

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
            status: 'Done',
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
        }
    ];

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
            <div className='row userorder-cntr'>
                <div>
                    <div>General Information</div>
                    <div>
                        <div>User since</div>
                        <span>{User.createdAt}</span>
                    </div>
                    <div>
                        <div>Total order</div>
                        <span>{}</span>
                    </div>
                    <div>
                        <div>Order Completed</div>
                        <span></span>
                    </div>
                    <div>
                        <div>Order Ongoing</div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
};

export default UserOrders;