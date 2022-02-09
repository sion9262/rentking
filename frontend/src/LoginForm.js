import { Axios } from 'axios';
import React, { useState } from 'react';
Axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

function LoginForm() {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();

        console.log(Email)
        console.log(Password)
    }

    const login = () => {    
        if (Email === "" || Email === undefined) {
          alert("이메일 주소를 입력해주세요.");
          this.loginEmail.focus();
          return;
        } else if (Password === "" || Password === undefined) {
          alert("비밀번호를 입력해주세요.");
          this.loginPw.focus();
          return;
        }

        const send_param = {
            headers,
            email: Email, //키값 : 벨류값
            password: Password
          };

    }

    return (
        <div style={{
            display:"flex", justifyContent  : "center", alignItems: "center"
            , width: "100%", height: "100vh"
        }}>
            <form style={{display: 'flex', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}
            >  
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <br />
                <button onClick={login}>로그인</button>
            </form>
        </div>
    )
}

export default LoginForm;
