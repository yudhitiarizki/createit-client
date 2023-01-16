import React, { createContext, useState, useEffect } from 'react';
import io from 'socket.io-client';

export const SocketContext = createContext();

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState(io('ws://magnificent-regular-transport.glitch.me/'));
  
  useEffect(() => {
    setSocket(io('ws://magnificent-regular-transport.glitch.me/'));
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
}

