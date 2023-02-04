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
        tnp: "토요일 오후 12시 30분<br> 대보름 Cafe & Ground",
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

        //달력 요일, 시간
        calendar: 'sat.</span> <span class="time">pm 12:30',
        


        
    }));
});