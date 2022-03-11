import React from "react";
import "./SignUpChoose.css";
import { Link } from 'react-router-dom'

function SignUpChoose() {

  return (
    <div>
      <div className="mainForm">
        <div className="textAll">
          <div className="textAllcss1">렌트킹 회원가입을 환영합니다</div>
          <div className="textAllcss2">중개업소는 중개업소 회원가입을 이용해주세요.</div>
          <div className="textAllcss3">
            건물주, 관리인(업체), 세입자는 일반 회원가입을 이용해주세요.
          </div>
          <div className="textAllcss4">대표 번호 1644 - 5510</div>
          <div className="textAllcss5">
            매물 관련 문의 1번 | 중개업소 문의 2번 | 네이버 부동산 문의 3번 |
            집프로 주택임대관리 문의 4번
          </div>
        </div>
        <div className="selectForm">
          <table>
            <tbody>
              <tr>
                <Link to='agensignup'>
                  <td className="hoverEffect">
                    <div className="choseAgent">
                      <div className="Agentcss1">이미지</div>
                      <div className="Agentcss2">중개업소 회원</div>
                      <div className="Agentcss3">중개업소 운영</div>
                      <div className="Agentcss4">이용가능 서비스</div>
                      <div className="Agentcss5">렌트킹 매물정보 확인</div>
                      <div className="Agentcss6">네이버 부동산 광고 전송</div>
                      <div className="Agentcss7-cover">
                        <div className="Agentcss7">중개업소 회원가입</div>
                      </div>
                    </div>
                  </td>
                </Link>
                <td width="30px"></td>
                <td className="hoverEffect">
                  <div className="chosenormal">
                    <div className="normalcss1">이미지</div>
                    <div className="normalcss2">일반회원</div>
                    <div className="normalcss3">건물주/관리업체/세입자</div>
                    <div className="normalcss4">이용가능 서비스</div>
                    <div className="normalcss5">매물 등록 의뢰</div>
                    <div className="normalcss6">매물 광고 상품 구매</div>
                    <div className="normalcss7-cover">
                      <div className="normalcss7">일반회원 회원가입</div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SignUpChoose;
