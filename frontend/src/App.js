import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Body from "./Body";
import TopBar from "./TopBar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AgentSignUpForm from "./AgentSignUpForm";

function App() {
  return (
      <div>
        <TopBar />
        <Header />
        <Body />
        <Routes>
          <Route path="/" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/test" element={<AgentSignUpForm />} />
        </Routes>  
        <Footer />
      </div> 
  );
}

export default App;