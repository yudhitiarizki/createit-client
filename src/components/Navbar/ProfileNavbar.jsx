import './ProfileNavbar.css';
import './NewNavbar.css';
import './NotifNavbar.css';
import Ellipse2 from '../../asset/Navbar/Ellipse2.png';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout, switchtoBuyer, switchtoSeller } from '../../redux/actions/auth';
import { useEffect, useRef, useState } from 'react';

const ProfileNavbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, isSeller, isVerified } = useSelector(state => state.auth);
    const [prflOpen, setPrflOpen] = useState(false);

    const profileRef = useRef();

    useEffect(() => {
        const closeMenus = (e) => {
            if (!profileRef.current.contains(e.target)) {
                setPrflOpen(false)
            }
        };

        document.addEventListener('mousedown', closeMenus);
        return () => document.removeEventListener('mousedown', closeMenus);
    }, [prflOpen]);

    const handleSwitch2User = () => {
        dispatch(switchtoBuyer());
        navigate('/');
    };

    const handleSwitch2Seller = () => {
        dispatch(switchtoSeller());
        navigate('/seller/profile');
    };

    const handleLogout2 = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <li ref={profileRef}>
            <div type='button' onClick={() => { setPrflOpen(!prflOpen) }}>
                {user.role === 2 ? (
                    <img src={user.seller.photoProfile} alt='' className='profile-pic-navbar'></img>
                ) : (
                    <img src={Ellipse2} alt='' className='profile-pic-navbar'></img>
                )}
            </div>

            <div className={`prfl-dropdown-menu ${prflOpen ? 'prfl-active' : 'prfl-nonactive'}`}>
                <div className='prfl-header'>
                    <div className='notif-title'>PROFILE</div>
                    <div onClick={() => { setPrflOpen(false) }} className='closebtn-notif'><i className='bx bx-x'></i></div>
                </div>
                <ul>
                    {(user.role === 3) ? (
                        <>
                            <div className='profilenav-cntr'>
                                <img src={Ellipse2} alt=''></img>
                                <div className='prfl-nav-info'>
                                    <div className='prflnav-username'>{user.username}</div>
                                    <div className='prflnav-role'>Admin</div>
                                </div>
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
                            <div type="button" className='prfl-logout' onClick={handleLogout2}>Logout</div>
                        </>
                    ) : (
                        (user.role === 1) ? (
                            <>
                                <div className='profilenav-cntr'>
                                    <img src={Ellipse2} alt=''></img>
                                    <div className='prfl-nav-info'>
                                        <div className='prflnav-username'>{user.username}</div>
                                        <div className='prflnav-role'>User</div>
                                    </div>
                                </div>

                                <li>
                                    <Link to="/user/order" className="nav-link">Order</Link>
                                    <i className='bx bx-chevron-right'></i>
                                </li>
                                <li>
                                    <Link to="/applyseller" className="nav-link">Apply as a seller</Link>
                                    <i className='bx bx-chevron-right'></i>
                                </li>
                                <div type="button" className='prfl-logout' onClick={handleLogout2}>Logout</div>
                            </>
                        ) : (
                            (isSeller) ? (
                                <>
                                    <div className='profilenav-cntr'>
                                        <img src={user.seller.photoProfile} alt=''></img>
                                        <div className='prfl-nav-info'>
                                            <div className='prflnav-username'>{user.username}</div>
                                            <div className='prflnav-role'>Seller</div>
                                        </div>
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
                                        <div onClick={handleSwitch2User} className="nav-link" type='button'>Switch to User</div>
                                        <i className='bx bx-chevron-right'></i>
                                    </li>
                                    <div type="button" className='prfl-logout' onClick={handleLogout2}>Logout</div>
                                </>
                            ) : (
                                <>
                                    <div className='profilenav-cntr'>
                                        <img src={user.seller.photoProfile} alt=''></img>
                                        <div className='prfl-nav-info'>
                                            <div className='prflnav-username'>{user.username}</div>
                                            <div className='prflnav-role'>User</div>
                                        </div>
                                    </div>

                                    <li>
                                        <Link to="/user/order" className="nav-link">Order</Link>
                                        <i className='bx bx-chevron-right'></i>
                                    </li>
                                    {isVerified ?
                                        <li>
                                            <div onClick={handleSwitch2Seller} className="nav-link" type='button'>Switch to Seller</div>
                                            <i className='bx bx-chevron-right'></i>
                                        </li>
                                        : null
                                    }
                                    <div type="button" className='prfl-logout' onClick={handleLogout2}>Logout</div>
                                </>
                            )
                        )
                    )}
                </ul>
            </div>
        </li>
    )
};

export default ProfileNavbar;