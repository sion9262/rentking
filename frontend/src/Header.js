import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
function Header() {
    return (
        <div class="container">
            <header>
                <div className="title-bar">
                    <div className="title-name">
                        <a className="title-name-css" href="/">R</a>
                    </div>
                    <nav>
                        <ul className="ul-css">
                            <li className="li-css">
                                <Link className="link-css" to="/">매물구경</Link>
                                <div className="detailinfor">
                                    <ul className="detaillist">
                                        <li>전체</li>
                                        <li>일반룸</li>
                                        <li>사무실</li>
                                        <li>아파트</li>
                                        <li>상가</li>
                                        <li>풀옵션</li>
                                        <li>오피스텔</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="li-css">
                                <Link className="link-css" to="/login">로그인</Link>
                                <div className="detailinfor">
                                    <ul className="detaillist">
                                        <li>기호일번</li>
                                        <li>기호이번</li>
                                        <li>기호삼번</li>
                                        <li>기호사번</li>
                                        <li>기호오번</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="li-css">
                                <Link className="link-css" to='/signupchoose'>이용안내</Link>
                                <div className="detailinfor">
                                    <ul className="detaillist">
                                        <li>기호일번</li>
                                        <li>기호이번</li>
                                        <li>기호삼번</li>
                                        <li>기호사번</li>
                                        <li>기호오번</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="li-css">
                                매물관리 바로가기
                                <div className="detailinfor">
                                    <ul className="detaillist">
                                        <li>기호일번</li>
                                        <li>기호이번</li>
                                        <li>기호삼번</li>
                                        <li>기호사번</li>
                                        <li>기호오번</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="li-css">
                                dd
                                <div className="detailinfor">
                                    <ul className="detaillist">
                                        <li>NJFNDJNA</li>
                                        <li>apapap</li>
                                        <li>22jsjj</li>
                                        <li>wkwkwk</li>
                                        <li>sksk</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header;