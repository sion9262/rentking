import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import TopBar from './TopBar';
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  return (
      <div>
        <TopBar />
        <Header />
        <Routes>
          <Route path="/" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>  
        <Footer />
      </div> 
  );
}

export default App;