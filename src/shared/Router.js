import React from "react";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import AdminApproveOrder from "../pages/AdminApproveOrder";
import AdminNewOrder from "../pages/AdminNewOrder";
import ApplyAsSeller from "../pages/ApplyAsSeller";
import CategoryDetail from "../pages/CategoryDetail";
import CreateCategory from "../pages/CreateCategory";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ManageSeller from "../pages/ManageSeller";
import OtherSellerProfile from "../pages/OtherSellerProfile";
import SellerNewOrder from "../pages/SellerNewOrder";
import SellerProfile from "../pages/SellerProfile";
import SellerProgressOrder from "../pages/SellerProgressOrder";
import ServiceDetail from "../pages/ServiceDetail";
import UserOrder from "../pages/UserOrder";

const Router = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/newcategory" element={<CreateCategory />} />
        <Route exact path="/category/:id" element={<CategoryDetail />} />
        <Route exact path="/service/:id" element={<ServiceDetail />} />
        <Route exact path="/manageseller" element={<ManageSeller />} />
        <Route exact path="/admin/order/new" element={<AdminNewOrder />} />
        <Route exact path="/admin/order/approve" element={<AdminApproveOrder />}/>
        <Route exact path="/applyseller" element={<ApplyAsSeller />}/>
        <Route exact path="/seller/profile" element={<SellerProfile />}/>
        <Route exact path="/seller/order/new" element={<SellerNewOrder />}/>
        <Route exact path="/seller/order/progress" element={<SellerProgressOrder />}/>
        <Route exact path="/seller/:id" element={<OtherSellerProfile />}/>
        <Route exact path="/user/order" element={<UserOrder />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
