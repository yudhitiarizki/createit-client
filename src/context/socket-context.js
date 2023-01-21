import React, { createContext, useState, useEffect } from 'react';
import io from 'socket.io-client';

export const SocketContext = createContext();

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState(io('http://localhost:3001/'));
  
  useEffect(() => {
    setSocket(io('http://localhost:3001/'));
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
}

