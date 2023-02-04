document.addEventListener('alpine:init', () => {
    Alpine.data('data', () => ({
    	//결혼식 날짜
        date: '3月11日',		
        //신랑이름
        mNm: "이승갑",
        //신랑 집안 관계
        mGw: "장남",
        //신부이름
        wNm: "김유경",	
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
        gTitle: "이제 서로, 평생 함께",
        //인사말 내용
        gTxt: "서로가 마주보며 다져온 사랑을 이제 함께 한 곳을 바라보며 걸어갈 수 있는 큰 사랑으로 키우고자 합니다. 저희 두 사람이 사랑의 이름으로 지켜나갈 수 있도록 앞날을 축복해 주시면 감사하겠습니다.",
        // 혼주 남
        mHmGw: "아버지",
        mHm: "이광호",
        mHwGw: "어머니",
        mHw: "손선자",
        // 혼주 여 
        wHmGw: "아버지",
        wHm: "김병윤",
        wHwGw: "어머니",
        wHw: "주임숙",

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
        etc: "<dt>기타안내</dt><dd>화환은 정중히 사양합니다.</dd>"
        


        
    }));
});