import React from "react";
import Router from "./shared/Router";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
  );
};

export default App;
