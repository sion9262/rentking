import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { Routes, Route } from "react-router-dom";
import AgentSignUpForm from "./AgentSignUpForm";
import SignUpChoose from "./SignUpChoose";

function App() {
  return (
      <div>
        <Header />
        <Routes>
          <Route path="/signupchoose" element={<SignUpChoose />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signupchoose/agensignup" element={<AgentSignUpForm />} />
          <Route path="/normalSignup" element={<SignUpForm />} />
        </Routes>  
        <Footer />
      </div> 
  );
}

export default App;