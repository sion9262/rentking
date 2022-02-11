import React from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import Information from '../information';
import LoginPage from '../LoginPage';
import Subscrive from '../**/subscrive';
import './TopHeader.css';

function TopHeader() {
  return (
        <div>
            <div className="top-nav">
                <ul className="top-nav-list">
                    <li className="rentking">
                        <a href='/'>Rent킹</a>
                    </li>
                    <li className="top-nav-ele">
                        <Link className="topLink" to="/subs">즐겨찾기</Link>
                    </li>
                    <li className='top-nav-ele'>
                        <Link className="topLink "to="/infor">이용안내</Link>
                    </li>
                    <li className='top-nav-ele'>
                        <Link className="topLink "to="/login">로그인</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path="/subs" element={<Subscrive />} />
                <Route path="/infor" element={<Information />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
  );
}

export default TopHeader