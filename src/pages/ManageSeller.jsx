import React from 'react';
import AdminApproval from '../components/AdminApproveSeller/AdminApproval';
import Footer from '../components/General/Footer';
import { ToastContainer } from 'react-toastify';

const ManageSeller = () => {
  return (
    <>
      <AdminApproval />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default ManageSeller;