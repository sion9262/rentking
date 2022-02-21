import React from "react";
import { Link } from "react-router-dom";
import "./header.css"
function Header(){
    return(
    <div class="container">
    <header>
        <div className="title-bar">
            <div className="title-name">
                <a className="title-name-css" href="/">R</a>
            </div>
            <nav>
                <ul className="ul-css">
                    <li><Link className="link-css" to="/">매물구경</Link></li>
                    <li><Link className="link-css" to="/login">로그인</Link></li>
                    <li><Link className="link-css" to='/test'>이용안내</Link></li>
                    <li>매물관리 바로가기</li>
                    <li>dd</li>
                </ul>
            </nav>
        </div>
    </header>
    </div>
    )
}

export default Header;