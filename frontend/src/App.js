import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";

import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import NavBar from "./NavBar/NavBar";
function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>  
      </div>
  );
}

export default App;
