import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./Helpers/ScrollToTop";
import ApplyAsSeller from "./pages/ApplyAsSeller";
import CategoryDetail from "./pages/CategoryDetail";
import CreateCategory from "./pages/CreateCategory";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ManageSeller from "./pages/ManageSeller";
import OtherSellerProfile from "./pages/OtherSellerProfile";
import SellerNewOrder from "./pages/SellerNewOrder";
import SellerProfile from "./pages/SellerProfile";
import SellerProgressOrder from "./pages/SellerProgressOrder";
import ServiceDetail from "./pages/ServiceDetail";
import UserOrder from "./pages/UserOrder";
import Test from "./pages/Test"
import CreateOrder from "./pages/CreateOrder";
import Register from "./pages/Register";
import AdminApproveOrder from "./pages/AdminApproveOrder";
import VerifyPayment from "./pages/VerifyPayment";
import UserOrderDetail from "./pages/UserOrderDetail";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import EmailVerif from './pages/EmailVerify';
import NewNavbar from "./components/Navbar/NewNavbar";
import { useSelector } from "react-redux";
import { SocketContext } from "./context/socket-context";
import { sendMessage } from "./redux/actions/message";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const socket = useContext(SocketContext);
  const location = useLocation();
  const [nav, setNav] = useState(true);
  const [message, setMessage] = useState({date:'', text:''});
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    ['/login', '/register', '*'].includes(location.pathname) ? setNav(false) : setNav(true);
  }, [location]);

  useEffect(() => {
      if (user) {
        socket.emit('addUser', user.userId);
        socket.on('getUsers', users => console.log(users))
      }
  }, [user])

  useEffect(() => {
    socket.on('getMessage', data => {
      setMessage(data)
    })
  },[])

  useEffect(() => {
    if(message.date){
      ['/test'].includes(location.pathname) ? <></> : sendMessage('success', message.text);
    }
  }, [message])

  return (
      <>
        <ScrollToTop />
        { nav && <NewNavbar /> }
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/newcategory" element={<CreateCategory />} />
          <Route exact path="/category/:id" element={<CategoryDetail />} />
          <Route exact path="/service/:slug" element={<ServiceDetail />} />
          <Route exact path="/manageseller" element={<ManageSeller />} />
          <Route exact path="/admin/order" element={<AdminApproveOrder />} />
          <Route exact path="/applyseller" element={<ApplyAsSeller />} />
          <Route exact path="/seller/profile" element={<SellerProfile />} />
          <Route exact path="/seller/order/new" element={<SellerNewOrder />} />
          <Route exact path="/seller/order/progress" element={<SellerProgressOrder />} />
          <Route exact path="/seller/:id" element={<OtherSellerProfile />} />
          <Route exact path="/user/order" element={<UserOrder />} />
          <Route exact path="/user/order/:id" element={<UserOrderDetail/>} />
          <Route exact path="/test" element={<Test />} />
          <Route exact path="/createorder" element={<CreateOrder />} />
          <Route exact path="/verifypayment" element={<VerifyPayment />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/verif/:token" element={<EmailVerif />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </>
  );
};

export default App;
