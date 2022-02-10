import React from 'react';
import {  BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Information from './information';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
function TopHeader() {
  return (
    <BrowserRouter>
        <div>
            <ul>
                <li>
                    <Link to="/">즐겨찾기</Link>
                </li>
                <li>
                    <Link to="/infor">이용안내</Link>
                </li>
                <li>
                    <Link to="/login">로그인</Link>
                </li>
            </ul>
            <hr/>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/infor" element={<Information />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default TopHeader