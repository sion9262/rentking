import React, { useState } from "react";
import "./agentSignUpForm.css";
import { Link } from "react-router-dom";
import DaumPostcode from "react-daum-postcode";

function AgentSignUpForm() {
  let [Test, SetTest] = useState("");
  let [Test1, SetTest1] = useState("");
  let [Test2, SetTest2] = useState("");

  const Loadcode = () => {
    window.daum.postcode.load(() => {
      const postcode = new window.daum.Postcode({
        oncomplete: function (data) {
          console.log(data);
          SetTest(data.zonecode);
          SetTest1(data.autoJibunAddress);
          SetTest2(data.address);
          if (data.autoJibunAddress === "") {
            SetTest1(data.jibunAddress);
          }
        },
      });
      postcode.open();
    });
  };

  const T = () => {
    document.getElementById("test").focus();
  };

  return (
    <div>
      <div className="Agent-container">
        <div className="infor-name-main">
          <div className="infor-name">부동산 회원가입</div>
          <div className="infor-name2">
            <Link style={{ color: "white", fontWeight: "700" }} to="/signup">
              일반 회원가입(건물주/관리업체/세입자)
            </Link>
          </div>
        </div>
        <div className="infor-text">
          <p>
            건물주, 관리인(업체), 세입자는 일반 회원가입을 이용해주세요.
            <br />
            중개업소의 경우{" "}
            <span>개설등록증 및 사업자등록증 확인 후 가입이 승인</span>됩니다
            <br />
            증빙서류는 하단에 파일을 첨부해 주시거나 카카오톡 1:1문의로
            보내주시면 승인 처리 도와드리겠습니다.
            <br />
            문자메시지(010-4028-4980)나 팩스(02-549-0561)도 가능합니다.
            <br />
            공실클럽의 매물정보 이용시 별도의 추가요금이 발생할 수 있습니다.
          </p>
        </div>
        <div className="infor-title">회원정보</div>
        <form action="" method="get">
          <table
            className="infor-table-css"
            width="1000px"
            cellpadding="0"
            cellspacing="0"
          >
            <tbody>
              <tr>
                <td className="name-css1">
                  <div className="name-css1-write">
                    아이디(대표)
                    <span className="name-css1-wrtie-star">*</span>
                  </div>
                </td>
                <td className="name-css2" colSpan={3}>
                  <tabel>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            className="name-css-input"
                            name="password"
                            type="password"
                            style={{ width: "150px", height: "35px" }}
                          />
                        </td>
                        <td>
                          <button className="checkid" type="button">
                            아이디 중복확인
                          </button>
                        </td>
                        <td>
                          <div className="condiword">
                            * 영문 소문자, 숫자 조합 6자 ~ 12자 (변경불가)
                          </div>
                          <div className="condiword">
                            * 대표아이디에 순번이 붙은 직원아이디가 자동으로
                            생성됩니다.
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </tabel>
                </td>
              </tr>
              <tr>
                <td className="name-css1">
                  <div className="name-css1-write">
                    비밀번호
                    <span className="name-css1-wrtie-star">*</span>
                  </div>
                </td>
                <td className="name-css2" colSpan={3}>
                  <tabel>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            className="name-css-input"
                            name="password"
                            type="password"
                            style={{ width: "150px", height: "35px" }}
                          />
                        </td>
                        <td>&nbsp;&nbsp;&nbsp;</td>
                        <td>
                          <div className="condiword">
                            * 8~20자 영문 대소문자, 숫자, 특수문자 2가지 이상
                            조합 (~!@#$%^&*()_+ 특수문자만 사용 가능)
                          </div>
                          <div className="condiword">
                            * 3개 이상 연속되는 동일한 문자/숫자 제외, 아이디와
                            동일한 비밀번호 제외
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </tabel>
                </td>
              </tr>
              <tr>
                <td className="name-css1">
                  <div className="name-css1-write">
                    비밀번호 확인
                    <span className="name-css1-wrtie-star">*</span>
                  </div>
                </td>
                <td className="name-css2" colSpan={3}>
                  <input
                    className="name-css-input"
                    name="password2"
                    type="password"
                    style={{ width: "150px", height: "35px" }}
                  />
                </td>
              </tr>
              <tr>
                <td className="name-css1">
                  <div className="name-css1-write">
                    이름
                    <span className="name-css1-wrtie-star">*</span>
                  </div>
                </td>
                <td className="name-css2">
                  <input
                    className="name-css-input"
                    name="userName"
                    type="text"
                    style={{ width: "150px", height: "35px" }}
                  />
                </td>
                <td className="name-css1">
                  <div className="name-css1-write">
                    휴대폰
                    <span className="name-css1-wrtie-star">*</span>
                  </div>
                </td>
                <td className="name-css2">
                  <input
                    className="name-css-input"
                    name="userPhone1"
                    type="text"
                    maxLength={3}
                    style={{ width: "75px", height: "35px" }}
                  />
                  -
                  <input
                    className="name-css-input"
                    name="userPhone2"
                    type="text"
                    maxLength={4}
                    style={{ width: "75px", height: "35px" }}
                  />
                  -
                  <input
                    className="name-css-input"
                    name="userPhone3"
                    type="text"
                    maxLength={4}
                    style={{ width: "75px", height: "35px" }}
                  />
                </td>
              </tr>
              <tr>
                <td className="name-css1">
                  <div className="name-css1-write">
                    일반전화
                    <span className="name-css1-wrtie-star">*</span>
                  </div>
                </td>
                <td className="name-css2" colSpan={3}>
                  <input
                    className="name-css-input"
                    name="phone1"
                    type="text"
                    maxLength={3}
                    style={{ width: "75px", height: "35px" }}
                  />
                  -
                  <input
                    className="name-css-input"
                    name="phone2"
                    type="text"
                    maxLength={4}
                    style={{ width: "75px", height: "35px" }}
                  />
                  -
                  <input
                    className="name-css-input"
                    name="phone3"
                    type="text"
                    maxLength={4}
                    style={{ width: "75px", height: "35px" }}
                  />
                </td>
              </tr>
              <tr>
                <td className="name-css1">
                  <div className="name-css1-write">
                    이메일
                    <span className="name-css1-wrtie-star">*</span>
                  </div>
                </td>
                <td className="name-css2" colSpan={3}>
                  <input
                    className="name-css-input"
                    name="emailId"
                    type="text"
                    style={{ width: "150px", height: "35px" }}
                  />
                  @
                  <input
                    className="name-css-input"
                    name="emailAdd"
                    type="text"
                    style={{ width: "150px", height: "35px" }}
                  />
                  <select
                    id="Email-domain"
                    className="Email-choese"
                    style={{
                      width: "100px",
                      height: "35px",
                      marginLeft: "5px",
                    }}
                  >
                    <option value selected>
                      -- 직접 입력 --
                    </option>
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
          <div className="check-market">
            <input type="checkbox" name="accRent"></input>
            <span className="check-market-text">
              렌트킹의 마케팅 정보 및 이벤트 소식을 수신하겠습니다
            </span>
          </div>
          <div>
            <div className="infor-title">업체정보</div>
            <table
              className="infor-table-css"
              width="1000px"
              cellpadding="0"
              cellspacing="0"
            >
              <tbody>
                <tr>
                  <td className="name-css1">
                    <div className="name-css1-write">
                      업체명
                      <span className="name-css1-wrtie-star">*</span>
                    </div>
                  </td>
                  <td className="name-css2">
                    <input
                      className="name-css-input"
                      name="compName"
                      type="text"
                      style={{ width: "150px", height: "35px" }}
                    />
                  </td>
                  <td className="name-css1">
                    <div className="name-css1-write">
                      대표자명
                      <span className="name-css1-wrtie-star">*</span>
                    </div>
                  </td>
                  <td className="name-css2">
                    <input
                      className="name-css-input"
                      name="preName"
                      type="text"
                      style={{ width: "150px", height: "35px" }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className="name-css1">
                    <div className="name-css1-write">
                      사업자등록번호
                      <span className="name-css1-wrtie-star">*</span>
                    </div>
                  </td>
                  <td className="name-css2" colSpan={3}>
                    <input
                      className="name-css-input"
                      name="busineNum1"
                      type="text"
                      style={{ width: "75px", height: "35px" }}
                    />
                    -
                    <input
                      className="name-css-input"
                      name="busineNum2"
                      type="text"
                      style={{ width: "75px", height: "35px" }}
                    />
                    -
                    <input
                      className="name-css-input"
                      name="busineNum3"
                      type="text"
                      style={{ width: "75px", height: "35px" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="name-css1">
                    <div className="name-css1-write">
                      사업자등록증
                      <span className="name-css1-wrtie-star">*</span>
                    </div>
                  </td>
                  <td className="name-css2" colSpan={3}>
                    <input
                      className="name-css-input"
                      name="busineCertifi"
                      type="text"
                      style={{ width: "150px", height: "35px" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="name-css1">
                    <div className="name-css1-write">
                      업태
                      <span className="name-css1-wrtie-star">*</span>
                    </div>
                  </td>
                  <td className="name-css2">
                    <input
                      className="name-css-input"
                      name="busineCondit"
                      type="text"
                      style={{ width: "150px", height: "35px" }}
                    />
                  </td>
                  <td className="name-css1">
                    <div className="name-css1-write">
                      종목
                      <span className="name-css1-wrtie-star">*</span>
                    </div>
                  </td>
                  <td className="name-css2">
                    <input
                      className="name-css-input"
                      name="event"
                      type="text"
                      style={{ width: "150px", height: "35px" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="name-css1">
                    <div className="name-css1-write">
                      중개사무소등록번호
                      <span className="name-css1-wrtie-star">*</span>
                    </div>
                  </td>
                  <td className="name-css2" colSpan={3}>
                    <input
                      className="name-css-input"
                      name="meditaNum"
                      type="text"
                      style={{ width: "150px", height: "35px" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="name-css1">
                    <div className="name-css1-write">
                      중개사무소등록증
                      <span className="name-css1-wrtie-star">*</span>
                    </div>
                  </td>
                  <td className="name-css2" colSpan={3}>
                    <input
                      className="name-css-input"
                      name="meditaCertifi"
                      type="text"
                      style={{ width: "150px", height: "35px" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="name-css1">
                    <div className="name-css1-write">
                      주소
                      <span className="name-css1-wrtie-star">*</span>
                    </div>
                  </td>
                  <td className="name-css2" colSpan={3}>
                    <div>
                      <input
                        type="text"
                        placeholder="우편번호"
                        name="zipCode"
                        className="name-css-input-location"
                        value={Test}
                        style={{ width: "75px", height: "35px" }}
                      />
                      <button
                        className="SearchPost"
                        type="button"
                        onClick={() => {
                          Loadcode();
                          T();
                        }}
                      >
                        우편번호 찾기
                      </button>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="지번주소"
                        name="parcel"
                        className="name-css-input-location"
                        value={Test1}
                        style={{ width: "400px", height: "35px" }}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="도로명주소"
                        name="roadAdd"
                        className="name-css-input-location"
                        value={Test2}
                        style={{ width: "400px", height: "35px" }}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="상세주소를 입력하세요(건물명,동/호수 등)"
                        name="detailAdd"
                        className="name-css-input-location"
                        id="test"
                        style={{ width: "400px", height: "35px" }}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="name-css1">
                    <div className="name-css1-write">
                      전화번호
                      <span className="name-css1-wrtie-star">*</span>
                    </div>
                  </td>
                  <td className="name-css2">
                    <input
                      className="name-css-input"
                      name="busineOffNum1"
                      type="text"
                      maxLength={3}
                      style={{ width: "75px", height: "35px" }}
                    />
                    -
                    <input
                      className="name-css-input"
                      name="busineOffNum2"
                      type="text"
                      maxLength={4}
                      style={{ width: "75px", height: "35px" }}
                    />
                    -
                    <input
                      className="name-css-input"
                      name="busineOffNum3"
                      type="text"
                      maxLength={4}
                      style={{ width: "75px", height: "35px" }}
                    />
                  </td>
                  <td className="name-css1">
                    <div className="name-css1-write">팩스번호</div>
                  </td>
                  <td className="name-css2">
                    <input
                      className="name-css-input"
                      name="busineOffFax1"
                      type="text"
                      maxLength={3}
                      style={{ width: "75px", height: "35px" }}
                    />
                    -
                    <input
                      className="name-css-input"
                      name="busineOffFax2"
                      type="text"
                      maxLength={4}
                      style={{ width: "75px", height: "35px" }}
                    />
                    -
                    <input
                      className="name-css-input"
                      name="busineOffFax3"
                      type="text"
                      maxLength={4}
                      style={{ width: "75px", height: "35px" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="name-css1">
                    <div className="name-css1-write">
                      선호지역 선택
                      <span className="name-css1-wrtie-star">*</span>
                    </div>
                  </td>
                  <td className="name-css2" colSpan={3}>
                    <div>
                      <div className="likelo-infor">
                        * 여러 지역 선택 가능(최소 1개 필수)
                      </div>
                      <div className="likelo">
                        <label>
                          <input
                            type="checkbox"
                            name="likelocation"
                            value="강남구"
                          />{" "}
                          강남구
                        </label>
                      </div>
                      <div className="likelo">
                        <label>
                          <input
                            type="checkbox"
                            name="likelocation"
                            value="서초구"
                          />{" "}
                          서초구
                        </label>
                      </div>
                      <div className="likelo">
                        <label>
                          <input
                            type="checkbox"
                            name="likelocation"
                            value="송파구"
                          />{" "}
                          송파구
                        </label>
                      </div>
                      <div className="likelo">
                        <label>
                          <input
                            type="checkbox"
                            name="likelocation"
                            value="관악구"
                          />{" "}
                          관악구
                        </label>
                      </div>
                      <div className="likelo">
                        <label>
                          <input
                            type="checkbox"
                            name="likelocation"
                            value="동작구"
                          />{" "}
                          동작구
                        </label>
                      </div>
                      <div className="likelo">
                        <label>
                          <input
                            type="checkbox"
                            name="likelocation"
                            value="강동구"
                          />{" "}
                          강동구
                        </label>
                      </div>
                      <div className="likelo">
                        <label>
                          <input
                            type="checkbox"
                            name="likelocation"
                            value="강북구"
                          />{" "}
                          강북구
                        </label>
                      </div>
                      <div className="likelo">
                        <label>
                          <input
                            type="checkbox"
                            name="likelocation"
                            value="강서구"
                          />{" "}
                          강서구
                        </label>
                      </div>
                      <div className="likelo">
                        <label>
                          <input
                            type="checkbox"
                            name="likelocation"
                            value="구로구"
                          />{" "}
                          구로구
                        </label>
                      </div>
                      <div className="likelo">
                        <label>
                          <input
                            type="checkbox"
                            name="likelocation"
                            value="금천구"
                          />{" "}
                          금천구
                        </label>
                      </div>
                      <div className="likelo">
                        <label>
                          <input
                            type="checkbox"
                            name="likelocation"
                            vlaue="노원구"
                          />{" "}
                          노원구
                        </label>
                      </div>
                      <div className="likelo">
                        <label>
                          <input
                            type="checkbox"
                            name="likelocation"
                            vlaue="도봉구"
                          />{" "}
                          도봉구
                        </label>
                      </div>
                      <div className="likelo">
                        <label>
                          <input
                            type="checkbox"
                            name="likelocation"
                            value="동대문구"
                          />{" "}
                          동대문구
                        </label>
                      </div>
                      <div className="likelo">
                        <label>
                          <input
                            type="checkbox"
                            name="likelocation"
                            value="마포구"
                          />{" "}
                          마포구
                        </label>
                      </div>
                      <div className="likelo">
                        <label>
                          <input
                            type="checkbox"
                            name="likelocation"
                            value="서대문구"
                          />{" "}
                          서대문구
                        </label>
                      </div>
                      <div className="likelo">
                        <label>
                          <input
                            type="checkbox"
                            name="likelocation"
                            value="양천구"
                          />{" "}
                          양천구
                        </label>
                      </div>
                      <div className="likelo">
                        <label>
                          <input
                            type="checkbox"
                            name="likelocation"
                            value="영등포구"
                          />{" "}
                          영등포구
                        </label>
                      </div>
                      <div className="likelo">
                        <label>
                          <input
                            type="checkbox"
                            name="likelocation"
                            value="용산구"
                          />{" "}
                          용산구
                        </label>
                      </div>
                      <div className="likelo">
                        <label>
                          <input
                            type="checkbox"
                            name="likelocation"
                            value="은평구"
                          />{" "}
                          은평구
                        </label>
                      </div>
                      <div className="likelo">
                        <label>
                          <input
                            type="checkbox"
                            name="likelocation"
                            value="종로구"
                          />{" "}
                          종로구
                        </label>
                      </div>
                      <div className="likelo">
                        <label>
                          <input
                            type="checkbox"
                            name="likelocation"
                            value="중구"
                          />{" "}
                          중구
                        </label>
                      </div>
                      <div className="likelo">
                        <label>
                          <input
                            type="checkbox"
                            name="likelocation"
                            value="중랑구"
                          />{" "}
                          중랑구
                        </label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="name-css1">
                    <div className="name-css1-write">
                      주력업종 선택
                      <span className="name-css1-wrtie-star">*</span>
                    </div>
                  </td>
                  <td className="name-css2" colSpan={3}>
                    <div>
                      <div className="forcelist-infor">* 최소 1개 필수</div>
                      <div className="forcelist-css">
                        <label>
                          <input
                            name="forcelist"
                            type="checkbox"
                            value="빌딩"
                          />
                          빌딩
                        </label>
                      </div>
                      <div className="forcelist-css">
                        <label>
                          <input
                            name="forcelist"
                            type="checkbox"
                            value="주택"
                          />
                          주택
                        </label>
                      </div>
                      <div className="forcelist-css">
                        <label>
                          <input
                            name="forcelist"
                            type="checkbox"
                            value="아파트"
                          />
                          아파트
                        </label>
                      </div>
                      <div className="forcelist-css">
                        <label>
                          <input
                            name="forcelist"
                            type="checkbox"
                            value="오피스텔"
                          />
                          오피스텔
                        </label>
                      </div>
                      <div className="forcelist-css">
                        <label>
                          <input
                            name="forcelist"
                            type="checkbox"
                            value="분양권"
                          />
                          분양권
                        </label>
                      </div>
                      <div className="forcelist-css">
                        <label>
                          <input
                            name="forcelist"
                            type="checkbox"
                            value="사무실"
                          />
                          사무실
                        </label>
                      </div>
                      <div className="forcelist-css">
                        <label>
                          <input
                            name="forcelist"
                            type="checkbox"
                            value="상가"
                          />
                          상가
                        </label>
                      </div>
                      <div className="forcelist-css">
                        <label>
                          <input
                            name="forcelist"
                            type="checkbox"
                            value="토지"
                          />
                          토지
                        </label>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="nece">
              <span className="name-css1-wrtie-star">*</span>표시는 필수
              항목입니다
            </div>
            <table width="1000px">
              <tbody>
                <tr>
                  <td width={"440px"}>
                    <div style={{ margin: "35px 0 0 0" }}>
                      <div
                        style={{
                          float: "left",
                          fontWeight: "700",
                          fontSize: "20px",
                        }}
                      >
                        이용약관
                      </div>
                      <div style={{ float: "right" }}>
                        <label>
                          <input
                            style={{ marginRight: "10px" }}
                            type="checkbox"
                          />
                          약관에 동의
                        </label>
                      </div>
                      <div style={{ clear: "both" }}></div>
                    </div>
                    <div
                      style={{
                        margin: "35px 0 0 0",
                        border: "1px solid black",
                      }}
                    >
                      <iframe
                        width="100%"
                        height="350px"
                        src="https://www.gongsilclub.com/v4/policy2.asp?tdhide=1"
                        frameBorder="0"
                        scrolling="yes"
                        leftmargin="0"
                      ></iframe>
                    </div>
                  </td>
                  <td width="20px"></td>
                  <td width={"440px"}>
                    <div style={{ margin: "35px 0 0 0" }}>
                      <div
                        style={{
                          float: "left",
                          fontWeight: "700",
                          fontSize: "20px",
                        }}
                      >
                        개인정보취급방침
                      </div>
                      <div style={{ float: "right" }}>
                        <label>
                          <input
                            style={{ marginRight: "10px" }}
                            type="checkbox"
                          />
                          개인정보 취급방침에 동의합니다
                        </label>
                      </div>
                      <div style={{ clear: "both" }}></div>
                    </div>
                    <div
                      style={{
                        margin: "35px 0 0 0",
                        border: "1px solid black",
                      }}
                    >
                      <iframe
                        width="100%"
                        height="350px"
                        src="https://www.gongsilclub.com/v4/policy1.asp?tdhide=1"
                        frameBorder="0"
                        scrolling="yes"
                        leftmargin="0"
                      ></iframe>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr style={{ marginTop: "40px" }} />
            <button style={{ float: "right" }} type="submit">
              제출
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AgentSignUpForm;
