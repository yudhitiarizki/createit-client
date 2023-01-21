import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../context/socket-context";

const Test = () => {
    const socket = useContext(SocketContext);
    const { user } = useSelector(state => state.auth);
    const [room, setRoom] = useState(1);
    const [receiverUser, setRevUser] = useState({})
    const [message, setMessage] = useState([]);
    const [receiver, setReceiver] = useState({});
    const [text, setText] = useState('');
    
    const part = [{userId: 3}, {userId: 5}]
    

    useEffect(() => {
        socket.on('getChat', data => setReceiver(data));
        setRevUser(part.find(pr => pr.userId !== user.userId))
        
    },[])

    useEffect(() => {
        if(receiver.message){
            setMessage([...message, receiver])
        }
    }, [receiver.date])

    console.log(message);

    const sendMessage = () => {
        socket.emit('sendChat', {
            userId: user.userId, 
            roomId: room, 
            message: text, 
            receiverId: receiverUser.userId,
            date: Date.now()
        })
        setMessage([...message, {
            userId: user.userId, 
            roomId: room, 
            message: text, 
            receiverId: receiverUser.userId,
            date: Date.now()}])
        setText('');

    }

    return (
        <>Halaman Test
            <input type="text" value={text} onChange={event => setText(event.target.value)}/>
            <button onClick={sendMessage}>send Message</button>
        </>
    )
}

export default Test;