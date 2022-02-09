import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  

import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
function Body() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<LoginForm />} />
      </Routes>  
    </div>
  </BrowserRouter>  

  );
}

export default Body;
