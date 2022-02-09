import React from "react";
import { Link } from 'react-router-dom';
import "./header.css"

function Header() {
  return (
    <div style={{backgroundColor:"#f0f3f7",paddingLeft:0,paddingRight:0,paddingTop:9,paddingBottom:10}}>
  <table width="1000" border="0" cellpadding="0" cellspacing="0">
    <tbody><tr>
      <td align="left">
        <span><Link to="/" class="top_over_link">즐겨찾기</Link></span>
        <span style={{paddingRight:0,paddingTop:0,paddingBottom:0,paddingLeft:20}}><Link to="/" class="top_over_link">이용안내</Link></span>
        <span style={{paddingRight:0,paddingTop:0,paddingBottom:0,paddingLeft:20}}><Link to="/" class="top_over_link">매물관리 바로가기</Link></span>
      </td>
      <td align="right">
        <span class="R13px_888f91">IP: xxx.xxx.xxx.xxx</span>
        <span style={{paddingRight:0,paddingTop:0,paddingBottom:0,paddingLeft:20}}>
            <Link to="/" class="top_over_link">로그인</Link>
        </span>
      </td>
    </tr>
  </tbody></table>
</div>
  );
}

export default Header;