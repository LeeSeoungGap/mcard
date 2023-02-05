document.addEventListener('alpine:init', () => {
	dataPicker('2023-03-11');
    Alpine.data('data', () => ({
    	//결혼식 날짜
        date: '3月11日',		
        //신랑이름
        mNm: "이승갑",
        mTel: "tel:01097909994",
        mSms: "sms:01097909994",
        //신랑 집안 관계
        mGw: "장남",
        //신부이름
        wNm: "김유경",
        wTel: "tel:01077400430",
        wSms: "sms:01077400430",
        //신부 집안 관계
        wGw: "차녀",
        //요일시간&장소
        tnp: "토요일 오후 12시 30분<br>",
        //식장 이름
        place: "대보름 Cafe & Ground",
        //식장 주소
        address: "부산 기장군 기장읍 기장해안로 98 오시리아스퀘어 D101호 (우)46084 지번기장읍 시랑리 725",
        //식장 전화번호
        tel: "Tel. 1670-8515",
        //주차안내
        parking: "대보름 카페 앤 그라운드 주차장 이용",
        //메인사진(첫화면)
        mainPhoto: "/mcard/mobile/new_m/mcard/images/mcard_29/visual_01.jpg",
        //인사말 제목
        gTitle: "저희, 결혼합니다",
        //인사말 내용
        gTxt: "성실하고 듬직한 모습이 믿음직스러운 남자와 <br>밝은 미소가 사랑스러운 여자가 만났습니다.<br><br>함께 있는 것만으로도 즐거운 두 사람은 <br>매일을 감사와 행복으로 채워나가기로 약속했습니다.<br><br>눈부신 봄날,<br>부부의 인연을 맺게 된 저희를 축복해 주세요.<br><br>잘 살겠습니다.<br><br>",
        // 혼주 남
        mHmGw: "아버지",
        mHm: "이광호",
        mHwGw: "어머니",
        mHw: "손선자",
        mHTel: "tel:01057553628",
        mHSms: "sms:01057553628",
        // 혼주 여 
        wHmGw: "아버지",
        wHm: "김병윤",
        wHwGw: "어머니",
        wHw: "주임숙",
        wHTel: "tel:01048004224",
        wHSms: "sms:01048004224",	

        //배너 텍스트
        btext: "소 중 한 &nbsp; 당 신 을 &nbsp; 초 대 합 니 다",
        //세로 배너 텍스트
        vtext: `저희를 아껴주시는 감사한 분들을 모시고<br>
        혼인의 예를 갖추는 것이 도리인 줄 아오나<br>
        양가 부모님과 친지분들만 참석하는<br>
        작은 결혼식을 올리게 되었습니다.<br><br>
        넓은 마음으로 양해 부탁드리며<br>
        멀리서나마 저희 두 사람을 축복해 주시는<br>
        귀한 마음, 소중히 간직하겠습니다.`,
        //달력 요일, 시간
        calendar: 'sat.</span> <span class="time">pm 12:30',
        //혼주계좌 보여줄지 여부
        isAcc: false,
        //남자혼주 계좌
        mHAcc: "",
        //여자혼주 계좌
        wHAcc: "",
        //기타 할말
        etc: "<dt>기타안내</dt><dd>화환은 정중히 사양합니다.</dd>",
        
        kakaoMap: "https://kko.to/1KKWaoD2O2",
        kakaoMapImg: "http://t1.daumcdn.net/roughmap/imgmap/7a0d58e5f7f9b608f5b809a22e4a59964807603372ad3881cad2a34a12407b4c",
        naverMap: "https://naver.me/5kX10LAT",
        
        //신랑 계좌
        bank: "하나은행",
        bankNum: "306-910675-39007",
        
        //신부 계좌
        wBank: "부산은행",
        wBankNum: "112-2103-5032-07",
        
        //알림
        alram: `<ol style="padding: 0 60px 0 60px;font-size: 0.750rem;">
					<li style="list-style: decimal-leading-zero;">원활한 좌석 배치와 식사 준비를 위하여,<br>참석여부와 동반인원수를 미리 알려주시기를 부탁드립니다.</li>
					<li style="list-style: decimal-leading-zero;">식이 종료되면, 앉아계신 자리로 식사가 준비됩니다. 스테이크 코스요리이며, 작은 뷔페가 준비되어 있습니다.</li>
					<li style="list-style: decimal-leading-zero;">건물 내 주차공간은 충분하며,<br>3시간 무료주차입니다.</li>
					<li style="list-style: decimal-leading-zero;">당일 단독 예식으로, 오랜만에 만난 가족분들과 여유있는 시간을 보내시길 소망합니다.</li>
					<li style="list-style: decimal-leading-zero;">식사 종료 후, 식장에 장식된 꽃을 포장해드릴 예정입니다.<br>작은 꽃다발과 함께 저희 결혼식이 좋은 기억으로 추억되기를 바랍니다.</li>
				</ol>`,
        pt: `<dl>
        	<dt>버스 </dt>
			<dd>공수.당사마을 정류장 하차, 도보 3분 거리</dd>
            <dd>100번, 181번, 185번, 해운대구 마을버스 9번</dd>
            </dl>
            <dl>
            <dt>지하철 </dt>
			<dd>동해선 송정역 하차, 도보 25분 거리</dd>
			</dl>`,
    }));
});