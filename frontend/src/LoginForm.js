//import { Axios } from 'axios';
import React, { useState } from 'react';

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
                <button>로그인</button>
            </form>
        </div>
    )
}

export default LoginForm;
