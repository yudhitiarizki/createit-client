import React, { createContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';

export const SocketContext = createContext();

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);
  const { user } = useSelector(state => state.auth)
  
  useEffect(() => {
    if(user){
      setSocket(io('https://aquamarine-mulberry-kicker.glitch.me/', {
        query: { userId: user.userId }
      }));
    }
  }, [user]);

  useEffect(() => {
    if (user && socket) {
      socket.emit('addUser', user.userId);
      socket.on('getUsers', users => console.log(users))  
    }
  }, [user, socket])

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
}

