import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Body from "./Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Body />
        <Routes>
          <Route path="/" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>  
        <Footer />
      </div>
    </BrowserRouter>  

  );
}

export default App;