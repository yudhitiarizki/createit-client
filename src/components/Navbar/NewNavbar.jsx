import './NewNavbar.css';
import logo from '../../asset/Navbar/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import NotifNavbar from './NotifNavbar';
import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getCategory } from '../../redux/actions/category';
import ProfileNavbar from './ProfileNavbar';

const NewNavbar = () => {
    const dispatch = useDispatch();

    const { isLoggedIn } = useSelector(state => state.auth);
    const category = useSelector(state => state.category);

    const [catopen, setCatOpen] = useState(false);
    const [navopen, setNavOpen] = useState(false);

    useEffect(() => {
        dispatch(getCategory())
    }, [dispatch])

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
        <header>
            <div className='container-navbar'>
                <div className='logo-container'>
                    <img src={logo} alt='' className='navbar-logo'></img>
                </div>
                <div className='right-nav-cntr'>
                    {isLoggedIn ?
                        <ul>
                            <NotifNavbar />
                            <ProfileNavbar />
                        </ul>
                        :
                        <div type='button' className='loginnav-btn'>
                            <NavLink to='/login' className='nav-link'>Login</NavLink>
                        </div>
                    }
                </div>
                <div type='button' className='hamburger' onClick={() => { setNavOpen(!navopen) }}>
                    <i className='bx bx-menu'></i>
                </div>
                <nav className={`navmid-cntr ${navopen ? 'navmid-active' : 'navmid-inactive'} ${isLoggedIn ? '' : 'navmid-notlogin'}`}>
                    <div className='midnavbar-cntr'>
                        <img src={logo} alt='' className='navbar-logo'></img>
                        <div onClick={() => { setNavOpen(false) }}><i className='bx bx-x'></i></div>
                    </div>
                    <ul>
                        <li>
                            <NavLink to='/' className='nav-link'>Home</NavLink>
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
                                            <NavLink to={`/category/${item.categoryId}`} className='nav-link'>{item.category}</NavLink>
                                            <i className='bx bx-chevron-right'></i>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                        <li>
                            <NavLink to='/about' className='nav-link'>About</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default NewNavbar;