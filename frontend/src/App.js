import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Body from "./Body";
import Check from "./check";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Check /> 
        <Footer />
      </div>
    </BrowserRouter>  

  );
}

export default App;