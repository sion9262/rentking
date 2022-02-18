import React from 'react'
import './agentSignUpForm.css'
import { Link } from 'react-router-dom'

function AgentSignUpForm() {
    return (
        <div>
            <div className='Agent-container'>
                <div className='infor-name-main'>
                    <div className='infor-name'>부동산 회원가입</div>
                    <div className="infor-name2">
                        <Link style={{ color: 'white', fontWeight: "700" }} to='/signup'>일반 회원가입(건물주/관리업체/세입자)</Link>
                    </div>
                </div>
                <div className='infor-text'>
                    <p>
                        건물주, 관리인(업체), 세입자는 일반 회원가입을 이용해주세요.<br />
                        중개업소의 경우 <span>개설등록증 및 사업자등록증 확인 후 가입이 승인</span>됩니다<br />
                        증빙서류는 하단에 파일을 첨부해 주시거나 카카오톡 1:1문의로 보내주시면 승인 처리 도와드리겠습니다.<br />
                        문자메시지(010-4028-4980)나 팩스(02-549-0561)도 가능합니다.<br />
                        공실클럽의 매물정보 이용시 별도의 추가요금이 발생할 수 있습니다.
                    </p>
                </div>
                <div className='infor-title'>회원정보</div>
                <table className='infor-table-css' width='1000px' cellpadding='0' cellspacing='0'>
                    <tbody>
                        <tr>
                            <td className='name-css1'>
                                <div className='name-css1-write'>아이디(대표)
                                    <span className='name-css1-wrtie-star'>*</span>
                                </div>
                            </td>
                            <td className='name-css2' colSpan={3}>
                                <input  className='name-css-input' type='text' id='account' style={{ width: "150px", height: "35px" }} />
                            </td>
                        </tr>
                        <tr>
                            <td className='name-css1'>
                                <div className='name-css1-write'>비밀번호
                                    <span className='name-css1-wrtie-star'>*</span>
                                </div>
                            </td>
                            <td className='name-css2' colSpan='3'>
                                <input className='name-css-input' type='password' id='password1' style={{ width: "150px", height: "35px" }} />
                            </td>
                        </tr>
                        <tr>
                            <td className='name-css1'>
                                <div className='name-css1-write'>비밀번호 확인
                                    <span className='name-css1-wrtie-star'>*</span>
                                </div>
                            </td>
                            <td className='name-css2' colSpan={3}>
                                <input className='name-css-input' type='password' id='password2' style={{ width: "150px", height: "35px" }} />
                            </td>
                        </tr>
                        <tr>
                            <td className='name-css1'>
                                <div className='name-css1-write'>이름
                                    <span className='name-css1-wrtie-star'>*</span>
                                </div>
                            </td>
                            <td className='name-css2'>
                                <input className='name-css-input' type='text' id='account' style={{ width: "150px", height: "35px" }} />
                            </td>
                            <td className='name-css1'>
                                <div className='name-css1-write'>휴대폰
                                    <span className='name-css1-wrtie-star'>*</span>
                                </div>
                            </td>
                            <td className='name-css2'>
                                <input className='name-css-input' type='text' id='phone1' style={{ width: "75px", height: "35px" }} />
                                -
                                <input className='name-css-input' type='text' id='phone2' maxLength={4} style={{ width: "75px", height: "35px" }} />
                                -
                                <input className='name-css-input' type='text' id='phone3' maxLength={4} style={{ width: "75px", height: "35px" }} />
                            </td>
                        </tr>
                        <tr>
                            <td className='name-css1'>
                                <div className='name-css1-write'>일반전화
                                    <span className='name-css1-wrtie-star'>*</span>
                                </div>
                            </td>
                            <td className='name-css2' colSpan={3}>
                                <input className='name-css-input' type='text' id='normal-phone1' maxLength={3} style={{ width: "75px", height: "35px" }} />
                                -
                                <input className='name-css-input' type='text' id='normal-phone2' maxLength={4} style={{ width: "75px", height: "35px" }} />
                                -
                                <input className='name-css-input' type='text' id='normal-phone3' maxLength={4} style={{ width: "75px", height: "35px" }} />
                            </td>
                        </tr>
                        <tr>
                            <td className='name-css1'>
                                <div className='name-css1-write'>이메일
                                    <span className='name-css1-wrtie-star'>*</span>
                                </div>
                            </td>
                            <td className='name-css2' colSpan={3}>
                                <input className='name-css-input' type='text' id='account' style={{ width: "150px", height: "35px" }} />
                                @
                                <input className='name-css-input' type='text' id='account' style={{ width: "150px", height: "35px" }} />
                                <select id='Email-domain' className='Email-choese' style={{ width: "100px", height: "35px", marginLeft: "5px" }} >
                                    <option value selected>-- 직접 입력 --</option>
                                    <option value="hanmail.com">hanmail.com</option>
                                    <option value="naver.com">naver.com</option>
                                    <option value="nate.com">nate.com</option>
                                    <option value="gmail.com">gmail.com</option>
                                    <option value="dreamwiz.com">dreamwiz.com</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='check-market'>
                    <input type='checkbox' id=''></input>
                    <span className='check-market-text'>렌트킹의 마케팅 정보 및 이벤트 소식을 수신하겠습니다</span>
                </div>
                <div>
                    <div className='infor-title'>업체정보</div>
                    <table className='infor-table-css' width='1000px' cellpadding='0' cellspacing='0'>
                        <tbody>
                            <tr>
                                <td className='name-css1'>
                                    <div className='name-css1-write'>업체명
                                        <span className='name-css1-wrtie-star'>*</span>
                                    </div>
                                </td>
                                <td className='name-css2'>
                                    <input className='name-css-input' type='text' id='account' style={{ width: "150px", height: "35px" }} />
                                </td>
                                <td className='name-css1'>
                                    <div className='name-css1-write'>대표자명
                                        <span className='name-css1-wrtie-star'>*</span>
                                    </div>
                                </td>
                                <td className='name-css2'>
                                    <input className='name-css-input' type='text' style={{width:'150px', height:'35px'}}></input>
                                </td>
                            </tr>
                            <tr>
                                <td className='name-css1'>
                                    <div className='name-css1-write'>사업자등록번호
                                        <span className='name-css1-wrtie-star'>*</span>
                                    </div>
                                </td>
                                <td className='name-css2' colSpan={3}>
                                    <input className='name-css-input' type='password' id='password1' style={{ width: "75px", height: "35px" }} />
                                    -
                                    <input className='name-css-input' type='password' id='password1' style={{ width: "75px", height: "35px" }} />
                                    -
                                    <input className='name-css-input' type='password' id='password1' style={{ width: "75px", height: "35px" }} />
                                </td>
                            </tr>
                            <tr>
                                <td className='name-css1'>
                                    <div className='name-css1-write'>사업자등록증
                                        <span className='name-css1-wrtie-star'>*</span>
                                    </div>
                                </td>
                                <td className='name-css2' colSpan={3}>
                                    <input className='name-css-input' type='password' id='password2' style={{ width: "150px", height: "35px" }} />
                                </td>
                            </tr>
                            <tr>
                                <td className='name-css1'>
                                    <div className='name-css1-write'>업태
                                        <span className='name-css1-wrtie-star'>*</span>
                                    </div>
                                </td>
                                <td className='name-css2'>
                                    <input className='name-css-input' type='text' id='account' style={{ width: "150px", height: "35px" }} />
                                </td>
                                <td className='name-css1'>
                                    <div className='name-css1-write'>종목
                                        <span className='name-css1-wrtie-star'>*</span>
                                    </div>
                                </td>
                                <td className='name-css2'>
                                    <input className='name-css-input' type='text' id='phone1' style={{ width: "150px", height: "35px" }} />
                                </td>
                            </tr>
                            <tr>
                                <td className='name-css1'>
                                    <div className='name-css1-write'>중개사무소등록번호
                                        <span className='name-css1-wrtie-star'>*</span>
                                    </div>
                                </td>
                                <td className='name-css2' colSpan={3}>
                                    <input className='name-css-input' type='text' id='normal-phone1' maxLength={3} style={{ width: "150px", height: "35px" }} />
                                </td>
                            </tr>
                            <tr>
                                <td className='name-css1'>
                                    <div className='name-css1-write'>중개사무소등록증
                                        <span className='name-css1-wrtie-star'>*</span>
                                    </div>
                                </td>
                                <td className='name-css2' colSpan={3}>
                                    <input className='name-css-input' type='text' id='account' style={{ width: "150px", height: "35px" }} />
                                </td>
                            </tr>
                            <tr>
                                <td className='name-css1'>
                                    <div className='name-css1-write'>주소
                                        <span className='name-css1-wrtie-star'>*</span>
                                    </div>
                                </td>
                                <td className='name-css2' colSpan={3}>
                                    <div>
                                        <input type='text' placeholder='우편번호' className='name-css-input-location' style={{ width:'75px', height: "35px"}} />
                                    </div>
                                    <div>
                                        <input type='text' placeholder='지번주소' className='name-css-input-location' style={{ width:'400px', height: "35px"}} />
                                    </div>
                                    <div>
                                        <input type='text' placeholder='도로명주소' className='name-css-input-location' style={{ width:'400px', height: "35px"}} />
                                    </div>
                                    <div>
                                        <input type='text' placeholder='상세주소를 입력하세요(건물명,동/호수 등)' className='name-css-input-location' style={{ width:'400px', height: "35px"}} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='name-css1'>
                                    <div className='name-css1-write'>전화번호
                                        <span className='name-css1-wrtie-star'>*</span>
                                    </div>
                                </td>
                                <td className='name-css2'>
                                    <input className='name-css-input' type='text' id='normal-phone1' maxLength={3} style={{ width: "75px", height: "35px" }} />
                                    -
                                    <input className='name-css-input' type='text' id='normal-phone1' maxLength={3} style={{ width: "75px", height: "35px" }} />
                                    -
                                    <input className='name-css-input' type='text' id='normal-phone1' maxLength={3} style={{ width: "75px", height: "35px" }} />
                                </td>
                                <td className='name-css1'>
                                    <div className='name-css1-write'>팩스번호</div>
                                </td>
                                <td className='name-css2'>
                                <input className='name-css-input' type='text' id='normal-phone1' maxLength={3} style={{ width: "75px", height: "35px" }} />
                                -
                                <input className='name-css-input' type='text' id='normal-phone1' maxLength={3} style={{ width: "75px", height: "35px" }} />
                                -
                                <input className='name-css-input' type='text' id='normal-phone1' maxLength={3} style={{ width: "75px", height: "35px" }} />
                                </td>
                            </tr>
                            <tr>
                                <td className='name-css1'>
                                    <div className='name-css1-write'>선호지역 선택
                                        <span className='name-css1-wrtie-star'>*</span>
                                    </div>
                                </td>
                                <td className='name-css2' colSpan={3}>
                                    <div>
                                        <div className='likelo-infor'>* 여러 지역 선택 가능(최소 1개 필수)</div>
                                        <div className='likelo'>
                                            <label><input type='checkbox' name='likelocation' value='강남구' /> 강남구</label>
                                        </div>
                                        <div className='likelo'>
                                            <label><input type='checkbox' name='likelocation' value='서초구' /> 서초구</label>
                                        </div>
                                        <div className='likelo'>
                                            <label><input type='checkbox' name='likelocation' value='송파구' /> 송파구</label>
                                        </div>
                                        <div className='likelo'>
                                            <label><input type='checkbox' name='likelocation' value='관악구' /> 관악구</label>
                                        </div>
                                        <div className='likelo'>
                                            <label><input type='checkbox' name='likelocation' value='동작구' /> 동작구</label>
                                        </div>
                                        <div className='likelo'>
                                            <label><input type='checkbox' name='likelocation' value='강동구' /> 강동구</label>
                                        </div>
                                        <div className='likelo'>
                                            <label><input type='checkbox' name='likelocation' value='강북구' /> 강북구</label>
                                        </div>
                                        <div className='likelo'>
                                            <label><input type='checkbox' name='likelocation' value='강서구' /> 강서구</label>
                                        </div>
                                        <div className='likelo'>
                                         <label><input type='checkbox' name='likelocation' value='구로구' /> 구로구</label>
                                        </div>
                                        <div className='likelo'>
                                            <label><input type='checkbox' name='likelocation' value='금천구' /> 금천구</label>
                                        </div>
                                        <div className='likelo'>
                                        <label><input type='checkbox' name='likelocation' vlaue='노원구' /> 노원구</label>
                                        </div>
                                        <div className='likelo'>
                                        <label><input type='checkbox' name='likelocation' vlaue='도봉구' /> 도봉구</label>
                                        </div>
                                        <div className='likelo'>
                                        <label><input type='checkbox' name='likelocation' value='동대문구' /> 동대문구</label>
                                        </div>
                                        <div className='likelo'>
                                        <label><input type='checkbox' name='likelocation' value='마포구' /> 마포구</label>
                                        </div>
                                        <div className='likelo'>
                                        <label><input type='checkbox' name='likelocation' value='서대문구' /> 서대문구</label>
                                        </div>
                                        <div className='likelo'>
                                        <label><input type='checkbox' name='likelocation' value='양천구' /> 양천구</label>
                                        </div>
                                        <div className='likelo'>
                                        <label><input type='checkbox' name='likelocation' value='영등포구' /> 영등포구</label>
                                        </div>
                                        <div className='likelo'>
                                        <label><input type='checkbox' name='likelocation' value='용산구' /> 용산구</label>
                                        </div>
                                        <div className='likelo'>
                                        <label><input type='checkbox' name='likelocation' value='은평구' /> 은평구</label>
                                        </div>
                                        <div className='likelo'>
                                        <label><input type='checkbox' name='likelocation' value='종로구' /> 종로구</label>
                                        </div>
                                        <div className='likelo'>
                                        <label><input type='checkbox' name='likelocation' value='중구' /> 중구</label>
                                        </div>
                                        <div className='likelo'>
                                        <label><input type='checkbox' name='likelocation' value='중랑구' /> 중랑구</label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default AgentSignUpForm;