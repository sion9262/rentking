import React from "react";
import "./Footer.css"
function Footer() {
  return (
<div class="footer_box02">
		<div class="inner">
			<div class="foot_list">
				<div class="img_box">
					<img src="/v4/images/design_bottom/kakao_image.png" alt=""/>
					<div class="mg_list">
						<span class="tst">
							<span class="t">중개업소</span><br/>
							<span class="b">@렌트킹</span>
						</span>
						<span class="tst">
							<span class="t">임대인</span><br/>
							<span class="b">@rentking</span>
						</span>
					</div>
				</div>
				<div class="txt_area frs">
					<div class="b_txt">대표번호 <b>0000 - 0000</b></div>
					<div class="txt">
						매물 관련 문의 1번<br/>중개업소 문의 2번<br/>네이버 부동산 문의 3번<br/>홈택트 주택임대관리 문의 4번
					</div>
				</div>
				<div class="txt_area scd">
					<div class="b_txt">팩스번호</div>
					<div class="txt">
						공실(임대,매매) 관련 : <br/> <b>00 - 0000 - 0000</b><br/>중개업소 관련 : <br/><b>00 - 0000 - 0000</b>
					</div>
				</div>
				<div class="txt_area thr">
					<div class="b_txt">분양/배너/제휴/지사가입</div>
					<div class="txt">
          00 - 0000 - 0000
					</div>
				</div>
			</div>
			<div class="footer_line_txt">
				<span class="tit">업무시간</span>
				<span class="txt">평일 09:30 ~ 18:30</span>
				<span class="tit">점심시간</span>
				<span class="txt">12:30 ~ 13:40</span>
				<span class="are">(토/일/공휴일 휴무)</span>
			</div>
		</div>
	</div>
  );
}

export default Footer;