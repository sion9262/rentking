import React, { Component } from 'react';
import './NavBar.css';


export default class NavBar extends Component {
  render() {
    return( 
        <div>
            <ul style={{listStyle: "none", display: "flex", backgroundColor:"beige"}}>
                <li class="navlist">매물정보</li>
                <li class="navlist">매물등록</li>
                <li class="navlist">로그인</li>
            </ul>
        </div>
    );
  }
}
