import React from "react";
import Navbar from "../components/General/Navbar";
import '../components/AdminApprovalOrder/AdminApproveOrder.css'
import { Link } from "react-router-dom";
import ManageRequestOrder from "../components/AdminApprovalOrder/ManageRequestOrder";
import RequestDetails from "../components/AdminApprovalOrder/RequestDetails";
import Footer from "../components/General/Footer";

const AdminApproveOrder = () => {

    return (
        <div className="admin-approve-page">
            <div className="navbar-order">
                <Navbar />
            </div>
            <div className="approve-container">
                <div className="path">
                    <Link to='/' className="nav-link">Home</Link>
                    <i className='bx bx-chevron-right'></i>
                    <div>Approve Order List</div>
                </div>
                <div className="approve-main">
                    <ManageRequestOrder />
                    <RequestDetails />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AdminApproveOrder;