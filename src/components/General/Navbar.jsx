import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Navbar.css';
import logo from '../../asset/Navbar/logo.png';
import Ellipse2 from '../../asset/Navbar/Ellipse2.png';
import MessageQuestion from '../../asset/Navbar/message-question.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { clearMessage } from "../../redux/actions/message";
import { logout } from '../../redux/actions/auth';
import { getCategory } from '../../redux/actions/category';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const category = useSelector(state => state.category);

    useEffect(() => {
        dispatch(getCategory())
        if (['/login', '/register'].includes(location.pathname)) {
            dispatch(clearMessage());
        }
    }, [dispatch, location]);

    // ini nanti dari redux
    const { isLoggedIn, user } = useSelector(state => state.auth);
    const isSeller = true;

    // nanti ambil dari redux atau pakai axios langsung
    const notifMessages = [
        {
            "notifId": 5,
            "type": 3,
            "message": "There is new order. Check the payment.",
            "createdAt": "27-Dec-2022"
        },
        {
            "notifId": 4,
            "type": 3,
            "message": "There is new order. Check the payment.",
            "createdAt": "27-Dec-2022"
        },
        {
            "notifId": 3,
            "type": 3,
            "message": "Buyer finished it's order. Please transfer the money to seller.",
            "createdAt": "27-Dec-2022"
        },
        {
            "notifId": 2,
            "type": 2,
            "message": "New Order",
            "createdAt": "21-Dec-2022"
        },
        {
            "notifId": 1,
            "type": 1,
            "message": "Your seller account is verified.",
            "createdAt": "12-Jan-2022"
        }
    ];
    const adminNotif = notifMessages.filter((notif) => (notif.type === 3));
    const sellerNotif = notifMessages.filter((notif) => (notif.type === 2));
    const userNotif = notifMessages.filter((notif) => (notif.type === 1));

    const handleRead = (notifId) => {
        // axios patch '/notif' disini atau di redux
    }

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    const showNavMenu = () => {
        document.querySelector('.nav-toggle').classList.toggle("show-active");
    }

    return (
        <div className='navbar-cntr container-fluid'>
            <div>
                <img src={logo} alt='' className='navbar-logo'></img>
            </div>
            <div className='smalldvc-menu' onClick={showNavMenu}>
                <i className='bx bx-menu'></i>
            </div>
            <nav className='nav-toggle'>
                <ul className='navbar-right'>
                    <li className='navbarright-item'><Link to='/' className="nav-link">Home</Link></li>

                    <li className='dropdown me-1 navbarright-item'>
                        <div type="button" id="dropdownMenuOffset1" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="-50%,18">
                            Category List
                        </div>
                        <ul className="dropdown-menu cat-list" aria-labelledby="dropdownMenuOffset1">
                            {category.map((category) => (
                                <li key={`id-${category.categoryId}`}>
                                    <Link to={`/category/${category.categoryId}`} className="nav-link">{category.category}</Link>
                                    <i className='bx bx-chevron-right'></i>
                                </li>
                            ))}
                        </ul>
                    </li>

                    {(isLoggedIn) ? (
                        <li className='dropdown me-1 navbarright-item'>
                            <div type="button" id="dropdownMenuOffset2" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="-100%,20">
                                Notifications
                            </div>
                            <ul className="dropdown-menu notif-list" aria-labelledby="dropdownMenuOffset2">
                                <div className='notif-cntr'>
                                    {(user.role === 3) ? (
                                        (adminNotif.length === 0) ? (
                                            <div className='no-notif'>There is no new notifications</div>
                                        ) : (
                                            adminNotif.map((notif) => (
                                                <li key={`id-${notif.notifId}`} className='notifmsg-cntr'>
                                                    <div><img src={MessageQuestion} alt=''></img></div>
                                                    <div className='notifmsg-cntn'>
                                                        <div>{notif.message}</div>
                                                        <div type="button" className='mark-as-read' onClick={(() => { handleRead(notif.notifId) })}>Mark as Read</div>
                                                    </div>
                                                </li>
                                            ))
                                        )
                                    ) : (
                                        (user.role === 2 && isSeller) ? (
                                            (sellerNotif.length === 0) ? (
                                                <div className='no-notif'>There is no new notifications</div>
                                            ) : (
                                                sellerNotif.map((notif) => (
                                                    <li key={`id-${notif.notifId}`} className='notifmsg-cntr'>
                                                        <div><img src={MessageQuestion} alt=''></img></div>
                                                        <div className='notifmsg-cntn'>
                                                            <div>{notif.message}</div>
                                                            <div type="button" className='mark-as-read' onClick={(() => { handleRead(notif.notifId) })}>Mark as Read</div>
                                                        </div>
                                                    </li>
                                                ))
                                            )
                                        ) : (
                                            (userNotif.length === 0) ? (
                                                <div className='no-notif'>There is no new notifications</div>
                                            ) : (
                                                userNotif.map((notif) => (
                                                    <li key={`id-${notif.notifId}`} className='notifmsg-cntr'>
                                                        <div><img src={MessageQuestion} alt=''></img></div>
                                                        <div className='notifmsg-cntn'>
                                                            <div>{notif.message}</div>
                                                            <div type="button" className='mark-as-read' onClick={(() => { handleRead(notif.notifId) })}>Mark as Read</div>
                                                        </div>
                                                    </li>
                                                ))
                                            )
                                        )
                                    )}
                                </div>
                            </ul>
                        </li>
                    ) : (
                        <></>
                    )}

                    <li type="button" className='navbarright-item'>About</li>

                    {(isLoggedIn) ? (
                        <li className='dropdown me-1'>
                            <div type="button" id="dropdownMenuOffset3" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="0,20">
                                { user.role === 2 ? (
                                    <img src={user.seller.photoProfile} alt='' className='profilpic-navbar'></img>
                                ) : (
                                    <img src={Ellipse2} alt='' className='profilpic-navbar'></img>
                                )}
                            </div>
                            <ul className="dropdown-menu cat-list1" aria-labelledby="dropdownMenuOffset3">
                                {(user.role === 3) ? (
                                    <>
                                        <div className='profile-navbar'>
                                            <div className='user-username'>{user.username}</div>
                                            <div className='horizontal-line'></div>
                                            <div className='user-role'>Admin</div>
                                        </div>
                                        <li>
                                            <Link to="/newcategory" className="nav-link">Create Category</Link>
                                            <i className='bx bx-chevron-right'></i>
                                        </li>
                                        <li>
                                            <Link to="/manageseller" className="nav-link">Manage Seller</Link>
                                            <i className='bx bx-chevron-right'></i>
                                        </li>
                                        <li>
                                            <Link to="/admin/order" className="nav-link">Finished Order</Link>
                                            <i className='bx bx-chevron-right'></i>
                                        </li>
                                        <div type="button" className='logout-btn' onClick={handleLogout}>Logout</div>
                                    </>
                                ) : (
                                    (user.role === 1) ? (
                                        <>
                                            <div className='profile-navbar'>
                                                <div className='user-username'>{user.username}</div>
                                                <div className='horizontal-line'></div>
                                                <div className='user-role'>User</div>
                                            </div>
                                            <li>
                                                <Link to="/user/order" className="nav-link">Order</Link>
                                                <i className='bx bx-chevron-right'></i>
                                            </li>
                                            <li>
                                                <Link to="/applyseller" className="nav-link">Apply as a seller</Link>
                                                <i className='bx bx-chevron-right'></i>
                                            </li>
                                            <div type="button" className='logout-btn' onClick={handleLogout}>Logout</div>
                                        </>
                                    ) : (
                                        (isSeller) ? (
                                            <>
                                                <div className='profile-navbar'>
                                                    <div className='user-username'>{user.username}</div>
                                                    <div className='horizontal-line'></div>
                                                    <div className='user-role'>Seller</div>
                                                </div>
                                                <li>
                                                    <Link to="/seller/profile" className="nav-link">Profile</Link>
                                                    <i className='bx bx-chevron-right'></i>
                                                </li>
                                                <li>
                                                    <Link to="/seller/order/new" className="nav-link">Incoming Order</Link>
                                                    <i className='bx bx-chevron-right'></i>
                                                </li>
                                                <li>
                                                    <Link to="/seller/order/progress" className="nav-link">Order in Progress</Link>
                                                    <i className='bx bx-chevron-right'></i>
                                                </li>
                                                <li>
                                                    <Link to="/" className="nav-link">Switch to User</Link>
                                                    <i className='bx bx-chevron-right'></i>
                                                </li>
                                                <div type="button" className='logout-btn' onClick={handleLogout}>Logout</div>
                                            </>
                                        ) : (
                                            <>
                                                <div className='profile-navbar'>
                                                    <div className='user-username'>{user.username}</div>
                                                    <div className='horizontal-line'></div>
                                                    <div className='user-role'>User</div>
                                                </div>
                                                <li>
                                                    <Link to="/user/order" className="nav-link">Order</Link>
                                                    <i className='bx bx-chevron-right'></i>
                                                </li>
                                                <li>
                                                    <Link to="/seller/profile" className="nav-link">Switch to Seller</Link>
                                                    <i className='bx bx-chevron-right'></i>
                                                </li>
                                                <div type="button" className='logout-btn' onClick={handleLogout}>Logout</div>
                                            </>
                                        )
                                    )
                                )}
                            </ul>
                        </li>
                    ) : (
                        <li type="button" className='navbarright-item'><Link to='/login' className="nav-link">Login</Link></li>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;