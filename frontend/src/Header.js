import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
function Header(){
    return(
    <div class="container">
    <header>
        <h2>렌트킹</h2>
        <nav>
            <ul>
                <li><Link to="/">회원가입</Link></li>
                <li><Link to="/login">로그인</Link></li>
                <li>이용안내</li>
                <li>매물관리 바로가기</li>
                <li>dd</li>
            </ul>
        </nav>
    </header>
    </div>
    )
}

export default Header;
