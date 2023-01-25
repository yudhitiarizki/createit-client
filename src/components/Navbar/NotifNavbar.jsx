import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { getNotification, patchReadNotif, deleteNotification } from '../../redux/actions/notification';

import './NotifNavbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const NotifNavbar = () => {
    const dispatch = useDispatch();

    const { user, isSeller, isVerified } = useSelector(state => state.auth);
    const notification = useSelector(state => state.notification);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        dispatch(getNotification());
    }, [dispatch]);

    const menuRef = useRef();

    useEffect(() => {
        const closeMenus = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false)
            }
        };

        document.addEventListener('mousedown', closeMenus);
        return () => document.removeEventListener('mousedown', closeMenus);
    }, [open])

    const adminNotif = notification.filter((notif) => (notif.type === '3'));
    const sellerNotif = notification.filter((notif) => (notif.type === '2'));
    const userNotif = notification.filter((notif) => (notif.type === '1'));
    const unReadAdmin = adminNotif.filter((notif) => notif.isRead === 0);
    const unReadSeller = sellerNotif.filter((notif) => notif.isRead === 0);
    const unReadUser = userNotif.filter((notif) => notif.isRead === 0);

    const handleRead = (notifId) => {
        dispatch(patchReadNotif(notifId)).then(() => {
            dispatch(getNotification());
        })
    };

    const handleDelNotif = (notifId) => {
        dispatch(deleteNotification(notifId)).then(() => {
            dispatch(getNotification());
        })
    }

    return (
        <li className='notif-menu-cntr' ref={menuRef}>
            <div className='notif-icon' onClick={() => { setOpen(!open) }}>
                <i className='bx bxs-bell'></i>
                {user.role === 3 ? (
                    unReadAdmin.length !== 0 ?
                        <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                            <span className="visually-hidden">New alerts</span>
                        </span>
                        : null
                ) : (
                    (user.role === 2 && isSeller && isVerified) ? (
                        unReadSeller.length !== 0 ?
                            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                                <span className="visually-hidden">New alerts</span>
                            </span>
                            : null
                    ) : unReadUser.length !== 0 ?
                        <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                            <span className="visually-hidden">New alerts</span>
                        </span>
                        : null
                )}
            </div>

            <div className={`notif-dropdown-menu ${open ? 'notif-active' : 'notif-inactive'}`}>
                <div className='notif-header'>
                    <div className='notif-title'>Notifications</div>
                    <div onClick={() => { setOpen(false) }} className='closebtn-notif'><i className='bx bx-x'></i></div>
                </div>
                {(user.role === 3) ? (
                    (adminNotif.length === 0) ? (
                        <div className='no-notif-msg'>There is no new notifications</div>
                    ) : (
                        <ul>
                            {adminNotif.map((notif) => (
                                <li key={`id-${notif.notifId}`}>
                                    <div><img src="https://ik.imagekit.io/createit/message-question.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674641940805" alt={1}></img></div>
                                    <div className='notifmsg-container'>
                                        <div>{notif.message}</div>
                                        <div className='read-del-btn'>
                                            {notif.isRead ? null :
                                                <div type="button" className='notifmsg-txt' onClick={() => { handleRead(notif.notifId) }}>Mark as Read</div>
                                            }
                                            <div type="button" className='notifmsg-txt' onClick={() => { handleDelNotif(notif.notifId) }}>Delete</div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )
                ) : (
                    (user.role === 2 && isSeller && isVerified) ? (
                        (sellerNotif.length === 0) ? (
                            <div className='no-notif-msg'>There is no new notifications</div>
                        ) : (
                            <ul>
                                {sellerNotif.map((notif) => (
                                    <li key={`id-${notif.notifId}`}>
                                        <div><img src="https://ik.imagekit.io/createit/message-question.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674641940805" alt={1}></img></div>
                                        <div className='notifmsg-container'>
                                            <div>{notif.message}</div>
                                            <div className='read-del-btn'>
                                                {notif.isRead ? null :
                                                    <div type="button" className='notifmsg-txt' onClick={() => { handleRead(notif.notifId) }}>Mark as Read</div>
                                                }
                                                <div type="button" className='notifmsg-txt' onClick={() => { handleDelNotif(notif.notifId) }}>Delete</div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )
                    ) : (
                        (userNotif.length === 0) ? (
                            <div className='no-notif-msg'>There is no new notifications</div>
                        ) : (
                            <ul>
                                {userNotif.map((notif) => (
                                    <li key={`id-${notif.notifId}`}>
                                        <div><img src="https://ik.imagekit.io/createit/message-question.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674641940805" alt={1}></img></div>
                                        <div className='notifmsg-container'>
                                            <div>{notif.message}</div>
                                            <div className='read-del-btn'>
                                                {notif.isRead ? null :
                                                    <div type="button" className='notifmsg-txt' onClick={() => { handleRead(notif.notifId) }}>Mark as Read</div>
                                                }
                                                <div type="button" className='notifmsg-txt' onClick={() => { handleDelNotif(notif.notifId) }}>Delete</div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )
                    )
                )}
            </div>
        </li>
    )
};

export default NotifNavbar;