import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../redux/actions/category";
import { getServiceByCategory, getService, getDetailService, getTopService, getServiceBySlug } from "../redux/actions/service";
import { getPackage, getPackageBySlug } from "../redux/actions/packages";
import { getReview, getReviewBySlug } from "../redux/actions/review";
import { getOrderUser } from "../redux/actions/order";
import { getNotification } from "../redux/actions/notification";
import { getUser } from "../redux/actions/user";
import { useNavigate, Link } from "react-router-dom";
import { SocketContext } from "../context/socket-context";

const Test = () => {
    const socket = useContext(SocketContext);
    const { user } = useSelector(state => state.auth);

    useEffect(() => {
        socket.on('getMessage', data => console.log(data))
    },[])
    
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