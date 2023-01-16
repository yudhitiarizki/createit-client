import React from "react";
import Router from "./shared/Router";
import { BrowserRouter } from "react-router-dom";
import { SocketProvider } from "./context/socket-context";

const App = () => {
  return (
    <SocketProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </SocketProvider>
  );
};

export default App;
