import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../context/socket-context";

const Test = () => {
    // const socket = useContext(SocketContext);
    // const { user } = useSelector(state => state.auth);
    // const [room, setRoom] = useState({
    //     roomId: '',
    //     RoomParticipants: [],
    //     Messages: []
    // });
    // const [receiverUser, setRevUser] = useState({})
    // const [message, setMessage] = useState([]);
    // const [receiver, setReceiver] = useState({});
    // const [text, setText] = useState('');

    // const [data, setData] = useState([
    //     {
    //         roomId: 1,
    //         name: 'room 1',
    //         RoomParticipants: [
    //             {
    //                 role: 1,
    //                 firstName: 'Wednesday',
    //                 lastName: 'Addams',
    //                 userId: 3,
                    
    //             },
    //             {
    //                 role: 2,
    //                 firstName: 'Enid',
    //                 lastName: 'Sinclair',
    //                 userId: 5,
                    
    //             }
    //         ],
    //         Messages: [
    //             {
    //                 messageId: 1,
    //                 userId: 1,
    //                 message: 'I want to ask about this service...',
    //                 createdAt: '01-02-2022'
    //             },
    //             {
    //                 messageId: 2,
    //                 userId: 2,
    //                 message: 'Hi! thank you for reaching us. We provide 3 types of packages, standard, premium, and business. Which package do you have interest in?',
    //                 createdAt: '01-02-2023'
    //             }
    //         ]
    //     },
    //     {
    //         roomId: 2,
    //         name: 'room 2',
    //         RoomParticipants: [
    //             {
    //                 role: 1,
    //                 firstName: 'Wednesday',
    //                 lastName: 'Addams',
    //                 userId: 1,
                    
    //             },
    //             {
    //                 role: 2,
    //                 firstName: 'Enid',
    //                 lastName: 'Sinclair',
    //                 userId: 2,
                    
    //             }
    //         ],
    //         Messages: [
    //             {
    //                 messageId: 1,
    //                 userId: 1,
    //                 message: 'I want to ask about this service...',
    //                 createdAt: '01-02-2022'
    //             },
    //             {
    //                 messageId: 2,
    //                 userId: 2,
    //                 message: 'Hi! thank you for reaching us. We provide 3 types of packages, standard, premium, and business. Which package do you have interest in?',
    //                 createdAt: '01-02-2023'
    //             }
    //         ]
    //     }
    // ]);
    

    // useEffect(() => {
    //     setRoom(data[0]);
    //     socket.on('getChat', data => setReceiver(data));
    // },[])

    // useEffect(() => {
    //     setRevUser(room.RoomParticipants.find(pr => pr.userId !== user.userId));
    //     setMessage(room.Messages);
    // }, [room])

    // useEffect(() => {
    //     if(receiver.message){
    //         const updatedData = data.map(item => {
    //             if (item.roomId === room.roomId) {
    //               item.Messages.push(receiver);
    //             }
    //             return item;
    //           });
    //         setData(updatedData);
    //     }
    // }, [receiver.createdAt]);

    // const sendMessage = () => {
    //     const data = {
    //         userId: user.userId, 
    //         roomId: room.roomId, 
    //         message: text, 
    //         receiverId: receiverUser.userId,
    //         createdAt: new Date().toISOString()
    //     }
    //     socket.emit('sendChat', data);
    //     const updatedData = data.map(item => {
    //         if (item.roomId === room.roomId) { item.Messages.push(data); }
    //         return item;
    //       });
    //     setData(updatedData);
    //     setText('');
    // }

    // console.log(message)

    return (
        <>Halaman Test
            {/* <input type="text" value={text} onChange={event => setText(event.target.value)}/>
            <button onClick={sendMessage}>send Message</button>
            { message.map(mes => {
                return <p>{mes.message}</p>
            }) } */}
        </>
    )
}

export default Test;