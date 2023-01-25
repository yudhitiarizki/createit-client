import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import NotifNavbar from './NotifNavbar';
import ProfileNavbar from './ProfileNavbar';
import { getCategory } from '../../redux/actions/category';

import './NewNavbar.css';

const NewNavbar = () => {
    const dispatch = useDispatch();

    const { isLoggedIn } = useSelector(state => state.auth);
    const category = useSelector(state => state.category);
    const { isLoading, isError } = useSelector(state => state.Loading);

    const [catopen, setCatOpen] = useState(false);
    const [navopen, setNavOpen] = useState(false);

    useEffect(() => {
        dispatch(getCategory());
    }, [dispatch])

    useEffect(() => {
        if (isLoading) {
            setCatOpen(false)
        }
    }, [isLoading])

    const catRef = useRef();

    useEffect(() => {
        const closeMenus = (e) => {
            if (!catRef.current.contains(e.target)) {
                setCatOpen(false)
            }
        };

        document.addEventListener('mousedown', closeMenus);
        return () => document.removeEventListener('mousedown', closeMenus);
    }, [catopen])

    return (
        <>
            {isLoading ?
                <></>
                : (isError ?
                    <></>
                    :
                    <header>
                        <div className='container-navbar'>
                            <div className='logo-container'>
                                <img src="https://ik.imagekit.io/createit/logo.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674642000231" alt={1} className='navbar-logo'></img>
                            </div>
                            <div className='right-nav-cntr'>
                                {isLoggedIn ?
                                    <ul>
                                        <Link to='/chat' className='nav-link'><div className='nav-link inbox-icon'><i className='bx bxs-chat'></i></div></Link>
                                        <NotifNavbar />
                                        <ProfileNavbar />
                                    </ul>
                                    :
                                    <div type='button' className='loginnav-btn'>
                                        <Link to='/login' className='nav-link'>Login</Link>
                                    </div>
                                }
                            </div>
                            <div type='button' className='hamburger' onClick={() => { setNavOpen(!navopen) }}>
                                <i className='bx bx-menu'></i>
                            </div>
                            <nav className={`navmid-cntr ${navopen ? 'navmid-active' : 'navmid-inactive'} ${isLoggedIn ? '' : 'navmid-notlogin'}`}>
                                <div className='midnavbar-cntr'>
                                    <img src="https://ik.imagekit.io/createit/logo.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674642000231" alt={1} className='navbar-logo'></img>
                                    <div onClick={() => { setNavOpen(false) }}><i className='bx bx-x'></i></div>
                                </div>
                                <ul>
                                    <li>
                                        <Link to='/' className='nav-link'>Home</Link>
                                    </li>
                                    <li className='cat-dropdown-cntr' ref={catRef}>
                                        <div type='button' onClick={() => { setCatOpen(!catopen) }} className='catbutton'>
                                            Category List
                                            <i className={catopen ? 'bx bx-chevron-up' : 'bx bx-chevron-down'}></i>
                                        </div>
                                        <div className={`cat-dropdown-menu ${catopen ? 'cat-active' : 'cat-inactive'}`}>
                                            <ul>
                                                {category.map(item => (
                                                    <li key={`id-${item.categoryId}`}>
                                                        <Link to={`/category/${item.categoryId}`} className='nav-link'>{item.category}</Link>
                                                        <i className='bx bx-chevron-right'></i>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <Link to='/about' className='nav-link'>About</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </header>
                )
            }
        </>
    )
};

export default NewNavbar;