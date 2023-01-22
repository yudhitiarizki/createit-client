import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Footer from '../components/General/Footer';
import ChatRoom from '../components/Chat/ChatRoom';

import Ellipse2 from '../asset/Navbar/Ellipse2.png';
import '../components/Chat/Inbox.css';
import { SocketContext } from '../context/socket-context';
import { setChat } from '../redux/actions/chat';

const Inbox = () => {
    const dispatch = useDispatch();
    const socket = useContext(SocketContext)
    const {user} = useSelector(state => state.auth);

    const [lastData, setLastData] = useState([]);
    const [Warning, setWarning] = useState('');

    const [room, setRoom] = useState({
        roomId: '',
        RoomParticipants: [],
        Messages: []
    });
    const [receiverUser, setRevUser] = useState({userId: ''})
    const [message, setMessage] = useState([]);
    const [receiver, setReceiver] = useState({});

    const data = useSelector(state => state.chat)

    const filterRoom = useCallback(() => {
        let filteredData = [];
        data.forEach(room => {
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
    }, [data]);

    useEffect(() => {
        if (data.length) {
            filterRoom();
            setWarning('');
        } else {
            setWarning('There is currently no chat.')
        }
    }, [filterRoom]);

    const getTime = useCallback((data) => {
        const date = new Date(data);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };

        return date.toLocaleDateString('id-ID', options);
    }, []);


    useEffect(() => {
        socket.on('getChat', data => {setReceiver(data)});
    },[])

    useEffect(() => {
        setRevUser(room.RoomParticipants.find(pr => pr.userId !== user.userId));
        setMessage(room.Messages);
    }, [room.roomId])

    useEffect(() => {
        if(receiver.message){
            const updatedData = data.map(item => {
                if (item.roomId === receiver.roomId) {
                  item.Messages.push(receiver);
                }
                return item;
              });
            dispatch(setChat(updatedData));
        }
    }, [receiver.createdAt]);

    const handleRoomDetail = useCallback((roomId) => {
        const selectedRoom = data.find(room => room.roomId === roomId);
        setRoom(selectedRoom);
    }, [data]);

    return (
        <>
            <div className='inbox-container'>
                <ChatRoom room={room} message={message} receiverUser={receiverUser}/>

                <div className='inboxlist-cntr'>
                    <div className='inbox-header'>Inbox</div>
                    <div className='lastmsg-cntr'>
                        {data.length &&
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
                        {Warning && <div>{Warning}</div>}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
};

export default Inbox;