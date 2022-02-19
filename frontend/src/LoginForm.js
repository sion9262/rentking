import { axios } from 'axios';
import React, { useState } from 'react';
import "./login.css"
//Axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

function LoginForm() {

    const [ID, setID] = useState("");
    const [Password, setPassword] = useState("");

    const onEmailHandler = (event) => {
        setID(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    const login = () => {    
        if (ID === "" || ID === undefined) {
          alert("이메일 주소를 입력해주세요.");
          return;
        } else if (Password === "" || Password === undefined) {
          alert("비밀번호를 입력해주세요.");
          return;
        }

        const send_param = {
            headers,
            id: ID, //키값 : 벨류값
            password: Password
          };

    }

    return (
        
        <div class="wrapper login">
        <div class="container">
            <div class="col-left">
                <div class="login-text">
                    <h2>RentKing</h2>
                    <p>회원가입하고 렌트킹의 <br/>다양한 서비스를 사용해보세요</p>
                    <a href="" class="btn">회원가입</a>
                </div>
            </div>

            <div class="col-right">
                <div class="login-form">
                    <h2>로그인</h2>
                    <form action="">
                        <p>
                            <label>아이디<span>*</span></label>
                            <input type="text" placeholder="아이디를 입력하세요" onChange={setID} required/>
                        </p>
                        <p>
                            <label>비밀번호<span>*</span></label>
                            <input type="password" placeholder="비밀번호를 입력하세요" onChange={setPassword} required/>
                        </p>
                        <p>
                            <input type="submit" value="로그인"/>
                        </p>
                        <p>
                            <a href="">비밀번호 찾기</a>
                        </p>

                    </form>
                </div>
            </div>

        </div>
    </div>
    )
}

export default LoginForm;
