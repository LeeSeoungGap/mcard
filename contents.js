document.addEventListener('alpine:init', () => {
    Alpine.data('data', () => ({
    	//결혼식 날짜
        date: '3月11日',		
        //신랑이름
        man-nm: "이승갑",
        //신랑 집안 관계
        man-gwangye: "장남",
        //신부이름
        woman-nm: "김유경",	
        //신부 집안 관계
        woman-gwangye: "차녀",
        //요일시간&장소
        timeNplace: "토요일 오후 12시 30분<br> 대보름 Cafe & Ground",
        //메인사진(첫화면)
        mainPhoto: "/mcard/mobile/new_m/mcard/images/mcard_29/visual_01.jpg",
        //인사말 제목
        greetings-title: "이제 서로, 평생 함께",
        //인사말 내용
        greetings-txt: "서로가 마주보며 다져온 사랑을 이제 함께 한 곳을 바라보며 걸어갈 수 있는 큰 사랑으로 키우고자 합니다. 저희 두 사람이 사랑의 이름으로 지켜나갈 수 있도록 앞날을 축복해 주시면 감사하겠습니다.",
        // 혼주 남
        m-honju-m-gwangye: "아버지",
        m-honju-m: "이광호",
        m-honju-w-gwangye: "어머니",
        m-honju-w: "손선자",
        // 혼주 여 
        w-honju-m-gwangye: "아버지",
        w-honju-m: "김병윤",
        w-honju-w-gwangye: "어머니",
        w-honju-w: "주임숙",

        //배너 텍스트
        btext: "소 중 한 &nbsp; 당 신 을 &nbsp; 초 대 합 니 다",

        //달력 요일, 시간
        calendar: 'sat.</span> <span class="time">pm 12:30',
        


        
    }));
});