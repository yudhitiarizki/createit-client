import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../context/socket-context";

const Test = () => {
    const socket = useContext(SocketContext);
    const { user } = useSelector(state => state.auth);

    useEffect(() => {
        socket.on('getMessage', data => console.log(data))
    },[socket])
    
    const sendMessage = () => {
        socket.emit('sendMessage', {
            senderId:user.userId, 
            reseiverId: 10, 
            text: 'mantul',
            date: Date.now()
        })
    }

    return (
        <>Halaman Test
            <input type="text" placeholder="testttt"/>
            <button onClick={sendMessage}>send Message</button>
        </>
    )
}

export default Test;