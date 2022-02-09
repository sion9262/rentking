import { render } from "@testing-library/react";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import LandingPage from "./component/views/LandingPage/LandingPage";
import LoginPage from "./component/views/LoginPage/LoginPage";
import RegisterPage from "./component/views/RegisterPage/RegisterPage";
import NavBar from "./component/views/NavBar/NavBar";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
