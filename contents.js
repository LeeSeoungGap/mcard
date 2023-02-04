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
        gTxt: "성실하고 듬직한 모습이 믿음직스러운 남자와 <br>밝은 미소가 사랑스러운 여자가 만났습니다. <br>함께 있는 것만으로도 즐거운 두 사람은 <br>매일을 감사와 행복으로 채워나가기로 약속했습니다.<br>눈부신 봄날, 부부의 인연을 맺게 된 저희를 축복해 주세요.<br>잘 살겠습니다.",
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
        vtext: '예쁘게<span class="space">잘</span>살겠습니다',
        //달력 요일, 시간
        calendar: 'sat.</span> <span class="time">pm 12:30',
        //남자혼주 계좌
        mHAcc: "농협 123-456788-7654321 예금주 : 손선자",
        //여자혼주 계좌
        wHAcc: "",
        //기타 할말
        etc: "<dt>기타안내</dt><dd>화환은 정중히 사양합니다.</dd>",
        
        kakaoMap: "https://map.kakao.com/?urlX=1003801.0&amp;urlY=475405.0&amp;itemId=625926405&amp;q=%EB%8C%80%EB%B3%B4%EB%A6%84%20%EC%B9%B4%ED%8E%98%20%EC%95%A4%20%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C&amp;srcid=625926405&amp;map_type=TYPE_MAP&amp;from=roughmap",
        kakaoMapImg: "http://t1.daumcdn.net/roughmap/imgmap/7a0d58e5f7f9b608f5b809a22e4a59964807603372ad3881cad2a34a12407b4c",
        naverMap: "https://naver.me/5kX10LAT",
        
        //신랑신부 계좌
        bank: "하나은행",
        bankNum: "306-910675-39007",
        bankNumrepl: "30691067539007",
    }));
});