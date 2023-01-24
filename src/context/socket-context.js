import React, { createContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';

export const SocketContext = createContext();

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState(io('https://aquamarine-mulberry-kicker.glitch.me/'));
  const { user } = useSelector(state => state.auth)
  
  useEffect(() => {
    setSocket(io('https://aquamarine-mulberry-kicker.glitch.me/'));
  }, []);

  useEffect(() => {
    if (user) {
      socket.on('connect', () => { socket.emit('addUser', user.userId) });
      socket.on('getUsers', users => console.log(users))  
    }
}, [user])

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
}

