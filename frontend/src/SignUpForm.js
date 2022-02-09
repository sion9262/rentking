import React, { Component } from "react";

class SignUpForm extends Component{


    render() {
        return (
            <div>
                <div class="title">
                <h1>회원가입</h1>
                </div>
                <hr/>
                
                <fieldset>
                    <legend>계정 정보</legend>
                    <div>
                        <label for="account">아이디</label>
                        <input type="text" name="id" id="account" required="required"/>
                        <span class="alert-message" id="account-alert" style="display: none;">Test</span>
                    </div>
                    <div>
                        <label for="password">비밀번호</label>
                        <input type="password" name="password" id="password" required="required"/>
                        <span class="alert-message" id="account-alert" style="display: none;">Test</span>
                    </div>
                    <div>
                        <label for="password2">비밀번호 확인</label>
                        <input type="password2" name="password2" id="password2" required="required"/>
                        <span class="alert-message" id="account-alert" style="display: none;">Test</span>
                    </div>
                </fieldset>
            
                <fieldset>
                    <legend>프로필</legend>
                    <div>
                    <label for="name">이름</label>
                    <input type="text" name="name" id="name" required="required"/>
                    </div>
            
                    <div>
                    <label for="birth_years">생년월일</label>
                    <input type="number" name="birth_years" id="birth_years" min="1900" max="2022" required="required"/>
                    <select name="birth_month">
                        <option value="1">1월</option>
                        <option value="2">2월</option>
                        <option value="3">3월</option>
                        <option value="4">4월</option>
                        <option value="5">5월</option>
                        <option value="6">6월</option>
                        <option value="7">7월</option>
                        <option value="8">8월</option>
                        <option value="9">9월</option>
                        <option value="10">10월</option>
                        <option value="11">11월</option>
                        <option value="12">12월</option>
                    </select>
                    <input type="number" name="birth_day" min="1" max="31" required="required"/>
                    <span class="alert-message" id="account-alert" style="display: none;">Test</span>
                    </div>
            
                    <div>
                    <label>성별</label>
                    
                    <input type="radio" name="gender" id="gender_male" required="required"/>
                    <label for="gender_male" value="male">남</label>
            
                    <input type="radio" name="gender" id="gender_female" required="required"/>
                    <label for="gender_female" value="female">여</label>
            
                    <input type="radio" name="gender" id="gender_unknown" required="required"/>
                    <label for="gender_unknown" value="unknown">기타</label>
                    <span class="alert-message" id="account-alert" style="display: none;">Test</span>
                    </div>
            
                </fieldset>
            
                <div>
                    <input type="checkbox" name="agree" id="agree" required="required"/>
                    <label for="agree">사이트 이용약관과 사용자 개인정보 수집 방침에 동의합니다.</label>
                </div>
            
                <input type="submit" value="가입하기"/>
        </div>
        );
    }
}

export default SignUpForm;