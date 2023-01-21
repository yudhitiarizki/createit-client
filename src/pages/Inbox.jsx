import React, { useState } from 'react';
import Footer from '../components/General/Footer';
import Ellipse2 from '../asset/Navbar/Ellipse2.png';
import ChatRoom from '../components/Chat/ChatRoom';

const Inbox = () => {
    const [lastData, setLastData] = useState([]);

    const room = [
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
    ];

    return (
        <>
            <div>
                <div>
                    <div>Inbox</div>
                    <div>
                        {room.map(room => (
                            <div key={`id-${room.roomId}`}>
                                <div>
                                    <img alt={1}></img>
                                </div>
                                <div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div>
                                    <i className='bx bx-right-arrow-alt'></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <ChatRoom />
            </div>

            <Footer />
        </>
    )
};

export default Inbox;