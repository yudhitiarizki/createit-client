import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Footer from '../components/General/Footer';
import ChatRoom from '../components/Chat/ChatRoom';

import '../components/Chat/Inbox.css';
import { SocketContext } from '../context/socket-context';
import { setChat } from '../redux/actions/chat';
import { useLocation } from 'react-router-dom';
import { getRoomUser, getRoomSeller } from '../redux/actions/chat';

const Inbox = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const socket = useContext(SocketContext);
    const { user, isSeller } = useSelector(state => state.auth);

    const { state } = location;

    const [lastData, setLastData] = useState([]);
    const [Warning, setWarning] = useState('');
    const [transition, setTransition] = useState(false);

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
            let lastMessage = null;
            if (room.Messages.length){
                const messageLength = room.Messages.length;
                lastMessage = room.Messages[messageLength - 1];
            }

            const lastUser = room.RoomParticipants.filter(person => person.userId !== user.userId)[0];
            const result = {
                roomId: room.roomId,
                lastUser: lastUser,
                lastMessage: lastMessage
            }

            filteredData = [...filteredData, result]
        })

        setLastData(filteredData);
    }, [data, user.userId]);

    useEffect(() => {
        if (data.length) {
            filterRoom();
            setWarning('');
        } else {
            setWarning('There is currently no chat.')
        }
        console.log('qwe')
    }, [filterRoom, data.length]);

    const getTime = useCallback((data) => {
        const date = new Date(data);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };

        return date.toLocaleDateString('id-ID', options);
    }, []);


    useEffect(() => {
        socket && socket.on('getChat', data => {setReceiver(data); console.log(data, 'j')});
    },[])

    useEffect(() => {
        isSeller ? dispatch(getRoomSeller()) : dispatch(getRoomUser());
    }, [dispatch, isSeller])

    useEffect(() => {
        setRevUser(room.RoomParticipants.find(pr => pr.userId !== user.userId));
        setMessage(room.Messages);
    }, [room, user.userId])

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
    }, [receiver.createdAt, data, dispatch, receiver]);


    useEffect(() => {
        if(state){
            let filteredData = data.filter(room => {
                return room.RoomParticipants.some(participant => participant.userId === state.sellerId);
            });
            if (filteredData.length){
                setRoom(filteredData[0]);
            }
        }
    }, [state, location, data])

    const handleRoomDetail = useCallback((roomId) => {
        const selectedRoom = data.find(room => room.roomId === roomId);
        setRoom(selectedRoom);
    }, [data]);

    return (
        <>
            <div className='inbox-container'>
                <ChatRoom room={room} message={message} receiverUser={receiverUser} transition={transition} getTime={getTime} setTransition={setTransition}/>

                <div className='inboxlist-cntr'>
                    <div className='inbox-header'>Inbox</div>
                    <div className='lastmsg-cntr'>
                        {data.length ?
                            (lastData.map(({ roomId, lastUser, lastMessage }) => (
                                <div key={`id-${roomId}`} className='lastmsg-box'>
                                    { lastUser.role === 2 ? (
                                        <img src={lastUser.User.Seller.photoProfile} alt={1} className='lastmsg-photo'></img>
                                    ) : (                                        
                                        <img src="https://ik.imagekit.io/createit/Ellipse2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674642000226" alt={1} className='lastmsg-photo'></img>
                                    )}
                                    <div className='lastmsg-center'>
                                        { lastMessage && (
                                            <div className='lastmsg-time'>{getTime(lastMessage.createdAt)}</div>
                                        )}
                                        <div className='lastmsg-name'>{lastUser.User.firstName} {lastUser.User.lastName}</div>
                                        { lastMessage && (
                                            <div className='lastmsg-msg'>{lastMessage.message}</div>
                                        )}
                                    </div>
                                    <div onClick={() => { handleRoomDetail(roomId) }} className='lastmsg-det-btn'>
                                        <i className='bx bx-right-arrow-alt'></i>
                                    </div>
                                </div>
                            ))) : (
                                <div>{Warning}</div>
                            )
                        }
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
};

export default Inbox;