import React from 'react'
import './agentSignUpForm.css'

function AgentSignUpForm() {
  return (
    <div>
        <div className='container'>
            <div className='infor'>
                <div className='infor-name'>부동산 회원가입</div>
                <p>
                건물주, 관리인(업체), 세입자는 일반 회원가입을 이용해주세요.<br />
                중개업소의 경우 <span>개설등록증 및 사업자등록증 확인 후 가입이 승인</span>됩니다<br />
                증빙서류는 하단에 파일을 첨부해 주시거나 카카오톡 1:1문의로 보내주시면 승인 처리 도와드리겠습니다.<br />
                문자메시지(010-4028-4980)나 팩스(02-549-0561)도 가능합니다.<br />
                공실클럽의 매물정보 이용시 별도의 추가요금이 발생할 수 있습니다.
                </p>
            </div>
            <div className='user-infor'>
                <div className='infor-name'>회원정보</div>
                <table width="800">
                    </table>    
                        <table width="700" height="600" cellpadding="0">
                            <tr height="30">
                                <td width="5%" align="center">*</td>
                                <td width="15%">회원 ID</td>
                                <td><input type="text" name="wUserID" />&nbsp;</td>
                            </tr>
                            <tr height="7">
                                <td colspan="3"><hr /></td>
                            </tr>
                            <tr height="30">
                                <td width="5%" align="center">*</td>
                                <td width="15%">비밀번호</td>
                                <td><input type="password"/></td>
                            </tr>
                            <tr height="7">
                                <td colspan="3"><hr /></td>
                            </tr>
                            <tr height="30">
                                <td width="5%" align="center">*</td>
                                <td width="15%">비밀번호 확인</td>
                                <td><input type="password"/>&nbsp;&nbsp;</td>
                            </tr>
                            <tr height="7">
                                <td colspan="3"><hr /></td>
                            </tr>
                            <tr height="30">
                                <td width="5%" align="center">*</td>
                                <td width="15%">이 름</td>
                                <td><input type="text"/></td>
                            </tr>
                            <tr height="7">
                                <td colspan="3"><hr /></td>
                            </tr>
                            <tr height="30">
                                <td width="5%" align="center">*</td>
                                <td width="15%">성 별</td>
                                <td>
                                    남 성<input type="radio"value="1" checked />&nbsp;여 성<input type="radio"value="2"/>
                                </td>
                            </tr>
                            <tr height="7">
                                <td colspan="3"><hr /></td>
                            </tr>
                            <tr height="30">
                                <td width="5%" align="center">*</td>
                                <td width="15%">집전화</td>
                                <td><input type="tel" name="wUserHomePhone" /></td>
                            </tr>
                            <tr height="7">
                                <td colspan="3"><hr /></td>
                            </tr>
                            <tr height="30">
                                <td width="5%" align="center">*</td>
                                <td width="15%">휴대전화</td>
                                <td><input type="tel"/></td>
                            </tr>
                            <tr height="7">
                                <td colspan="3"><hr /></td>
                            </tr>
                            <tr class="register" height="30">
                                <td width="5%" align="center">*</td>
                                <td width="15%">이메일</td>
                                <td><input type="email" name="wUserEmail" /></td>
                            </tr>
                            <tr height="7">
                                <td colspan="3"><hr /></td>
                            </tr>
                            <tr>
                                <td width="5%" align="center">*</td>
                                <td width="15%">주 소</td>
                                <td>
                                    <input type="text" size="10" placeholder="우편번호" readonly="readonly"/>
                                    <input type="button" value="우편번호 찾기"/>
                                    <input type="text" size="30" placeholder="도로명주소" readonly="readonly"/>
                                    <input type="text" size="30" placeholder="지번주소" readonly="readonly"/>
                                    <br /><span></span>   
                                    <br /><br /><input type="text" placeholder="나머지 주소" size="70" />
                                </td>
                            </tr>
                
                        </table>
                        <br />
                        <table>
                            <tr height="40">
                                <td><input width="120" type="image"/>&nbsp;</td>
                            </tr>
                        </table>

            </div>
        </div>
    </div>
  )
}

export default AgentSignUpForm;