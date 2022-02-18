import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { Routes, Route } from "react-router-dom";
import AgentSignUpForm from "./AgentSignUpForm";

function App() {
  return (
      <div>
        <Header />
        <Routes>
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/test" element={<AgentSignUpForm />} />
        </Routes>  
        <Footer />
      </div> 
  );
}

export default App;