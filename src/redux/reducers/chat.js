import { SET_CHAT } from "../actions/types";

import Ellipse2 from '../../asset/Navbar/Ellipse2.png';

const initialState = [
    {
        roomId: 1,
        name: 'room 1',
        RoomParticipants: [
            {
                role: 1,
                firstName: 'Wednesday',
                lastName: 'Addams',
                userId: 3,
                photoProfile: Ellipse2
            },
            {
                role: 2,
                firstName: 'Enid',
                lastName: 'Sinclair',
                userId: 5,
                photoProfile: Ellipse2
            }
        ],
        Messages: [
            {
                messageId: 1,
                userId: 3,
                message: 'I want to ask about this service...',
                createdAt: '01-02-2022'
            },
            {
                messageId: 2,
                userId: 5,
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
                userId: 5,
                photoProfile: Ellipse2
            },
            {
                role: 2,
                firstName: 'Enid',
                lastName: 'Sinclair',
                userId: 3,
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

const chatReducer = (chat = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case SET_CHAT:
            return chat = payload;
        default: 
            return chat;
    }
}

export default chatReducer;