import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import Footer from '../components/General/Footer';
import ChatRoom from '../components/Chat/ChatRoom';

import Ellipse2 from '../asset/Navbar/Ellipse2.png';
import '../components/Chat/Inbox.css';

const Inbox = () => {
    // const {user} = useSelector(state => state.auth);
    const user = useMemo(() => ({ userId: 1 }), []); //data dummy

    const [lastData, setLastData] = useState([]);
    const [message, setMessage] = useState('');

    const room = useMemo(() => [
        {
            roomId: 1,
            name: 'room 1',
            RoomParticipants: [
                {
                    role: 1,
                    firstName: 'Wednesday',
                    lastName: 'Addams',
                    userId: 1,
                    photoProfile: Ellipse2
                },
                {
                    role: 2,
                    firstName: 'Enid',
                    lastName: 'Sinclair',
                    userId: 2,
                    photoProfile: Ellipse2
                }
            ],
            Messages: [
                {
                    messageId: 1,
                    userId: 1,
                    message: 'I want to ask about this service...',
                    createdAt: '01-02-2022'
                },
                {
                    messageId: 2,
                    userId: 2,
                    message: 'Hi! thank you for reaching us. We provide 3 types of packages, standard, premium, and business. Which package do you have interest in?',
                    createdAt: '01-02-2023'
                }
            ]
        },
        {
            roomId: 2,
            name: 'room 2',
            RoomParticipants: [
                {
                    role: 1,
                    firstName: 'Wednesday',
                    lastName: 'Addams',
                    userId: 1,
                    photoProfile: Ellipse2
                },
                {
                    role: 2,
                    firstName: 'Enid',
                    lastName: 'Sinclair',
                    userId: 2,
                    photoProfile: Ellipse2
                }
            ],
            Messages: [
                {
                    messageId: 1,
                    userId: 1,
                    message: 'I want to ask about this service...',
                    createdAt: '01-02-2022'
                },
                {
                    messageId: 2,
                    userId: 2,
                    message: 'Hi! thank you for reaching us. We provide 3 types of packages, standard, premium, and business. Which package do you have interest in?',
                    createdAt: '01-02-2023'
                }
            ]
        }
    ], []);

    const filterRoom = useCallback(() => {
        let filteredData = [];
        room.forEach(room => {
            const messageLength = room.Messages.length;
            const lastMessage = room.Messages[messageLength - 1];

            const lastUser = room.RoomParticipants.filter(person => person.userId !== user.userId)[0];
            const result = {
                roomId: room.roomId,
                lastUser: lastUser,
                lastMessage: lastMessage
            }

            filteredData = [...filteredData, result]
        })

        setLastData(filteredData);
    }, [room, user]);

    useEffect(() => {
        if (room.length) {
            filterRoom();
            setMessage('');
        } else {
            setMessage('There is currently no chat.')
        }
    }, [filterRoom, room]);

    const getTime = useCallback((data) => {
        const date = new Date(data);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };

        return date.toLocaleDateString('id-ID', options);
    }, []);

    const handleRoomDetail = useCallback((roomId) => {
        const selectedRoom = room.filter(room => room.roomId === roomId);

        // dispatch pakai payload selectedRoom

    }, [room]);

    return (
        <>
            <div className='inbox-container'>
                <ChatRoom />

                <div className='inboxlist-cntr'>
                    <div className='inbox-header'>Inbox</div>
                    <div className='lastmsg-cntr'>
                        {room.length &&
                            lastData.map(({ roomId, lastUser, lastMessage }) => (
                                <div key={`id-${roomId}`} className='lastmsg-box'>
                                    <img src={lastUser.photoProfile} alt={1} className='lastmsg-photo'></img>
                                    <div className='lastmsg-center'>
                                        <div className='lastmsg-time'>{getTime(lastMessage.createdAt)}</div>
                                        <div className='lastmsg-name'>{lastUser.firstName} {lastUser.lastName}</div>
                                        <div className='lastmsg-msg'>{lastMessage.message}</div>
                                    </div>
                                    <div onClick={() => { handleRoomDetail(roomId) }} className='lastmsg-det-btn'>
                                        <i className='bx bx-right-arrow-alt'></i>
                                    </div>
                                </div>
                            ))
                        }
                        {message && <div>{message}</div>}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
};

export default Inbox;