import React from "react";
import '../components/AdminApprovalOrder/AdminApproveOrder.css';
import ManageRequestOrder from "../components/AdminApprovalOrder/ManageRequestOrder";
import Footer from "../components/General/Footer";

const AdminApproveOrder = () => {

    return (
        <>
            <ManageRequestOrder />
            <Footer />
        </>
    )
}

export default AdminApproveOrder;