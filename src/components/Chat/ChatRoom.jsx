import React, { useCallback, useContext, useEffect, useState } from "react";
import './chatroom.css';
import iconSend from '../../asset/General/send.png'
import { useDispatch, useSelector } from "react-redux";
import { SocketContext } from "../../context/socket-context";
import { setChat, sendChat } from "../../redux/actions/chat";

const ChatRoom = ({room, message, receiverUser, setTransition, transition, getTime}) => {
    const dispatch = useDispatch();
    const socket = useContext(SocketContext);
    const { user } = useSelector(state => state.auth);

    const [text, setText] = useState('');
    const [messageSend, setMessage] = useState([]);
    const data = useSelector(state => state.chat);

    const [isOnline, setOnline] = useState(false);
    const [onlineList, setList] = useState([]);

    useEffect(() => {
        socket && socket.on('getUsers', users => setList(users))  
    }, [user, socket]);

    useEffect(() => {
        if(receiverUser){
            let index = onlineList.findIndex(item => item.userId === receiverUser.userId);
            index !== -1 ? setOnline(true) : setOnline(false);
        }
    }, [onlineList])

    useEffect(() => {
        setMessage(message.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
    }, [room.roomId, message.length]);

    const onSending = useCallback(() => {
        if(text === ''){return}
        const dataSend = {
            userId: user.userId, 
            roomId: room.roomId, 
            message: text, 
            receiverId: receiverUser.userId,
            createdAt: new Date().toISOString()
        }
        console.log(dataSend)
        socket.emit('sendChat', dataSend);
        const updatedData = data.map(item => {
            if (item.roomId === room.roomId) { item.Messages.push(dataSend); }
                return item;
            });
        console.log(updatedData, 'datasend');
        dispatch(setChat(updatedData));
        dispatch(sendChat(room.roomId, text))
        setText('')
    }, [text, dispatch, data, receiverUser, user, room, socket]);

    const hideDetail = useCallback(() => {
        setTransition(false);
    }, [setTransition]);
    
    return (
        <div className={`chat-room ${transition ? 'chat-transition' : ''}`}>
            {room.roomId && (
                <>
                <div className="chat-header">
                    { receiverUser && (
                        <>
                        <div className="back-chat-arrow" onClick={hideDetail}><i className='bx bx-chevron-left'></i></div>
                        { receiverUser.role === 2 ? (
                            <img src={receiverUser.User.Seller.photoProfile} alt={1} className='lastmsg-photo'></img>
                        ) : (
                            <img src="https://ik.imagekit.io/createit/Ellipse2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674642000226" alt={1} className='lastmsg-photo'></img>
                        ) }
                        <div className="info-user">
                            <h6>{receiverUser.User.firstName} {receiverUser.User.lastName}</h6>
                            { isOnline && (  <p>Online</p> ) }
                        </div>
                        </>
                    ) }
                    
                </div>
                <div className="chat-message">
                    { messageSend.map(msg => { 
                        const isUser = msg.userId && msg.userId === user.userId;
                        return (
                            <div className={`message-cont ${isUser ? 'me' : ''}`}>
                                <div className={`message ${isUser ? 'right' : ''}`}>
                                    <h6>{msg.message}</h6>
                                    <p>{getTime(msg.createdAt)}</p>
                                </div>
                            </div>
                        );
                    }) }
                </div>
                <div className="chat-send">
                    <textarea type="text" className="chat-input" placeholder="Write a message.." value={text} onChange={event => setText(event.target.value)}/>
                    <div className="send-button">
                        <button onClick={onSending}>
                            <img src={iconSend} alt="" />
                        </button>
                    </div>
                    
                </div>
                </>
            )}
        </div>
    )
};

export default ChatRoom;