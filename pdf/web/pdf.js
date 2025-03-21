window.onload = function() {
    // 1. 쿠키 확인 함수
    function checkCookie() {
        const cookieName = 'oilnewspaper=';
        const cookies = document.cookie.split(';').map(cookie => cookie.trim());
        const hasCookie = cookies.some(cookie => cookie.startsWith(cookieName));

        if (!hasCookie) {
            // 쿠키가 없으면 알림을 띄우고 페이지를 이동
            alert('정상적인 방식으로 접속하지 않았습니다.\n인증 페이지로 이동합니다.');
            window.location.href = '../'; // 원하는 페이지 URL로 변경
        }
    }
    checkCookie();

    // 2. PDF Viewer 변경 안내 (SweetAlert2 사용)
    Swal.fire({
        title: 'PDF Viewer 변경 안내',
        html: 'PDF 로딩 문제로 PDF Viewer이 변경되었으니, 서비스 이용에 불편 없으시길 바랍니다.',
        icon: 'info',
        confirmButtonText: '확인'
    }).then(() => {
        // SweetAlert2의 확인 버튼을 클릭한 후에 진행할 동작
        // 여기서 쿠키 확인 또는 다른 처리를 할 수도 있음.
    });

    // 3. 네이버 차단
    var userAgent = navigator.userAgent.toLowerCase();
    
    // 네이버 브라우저에 해당하는 User-Agent 문자열 확인
    if (userAgent.indexOf("naver") !== -1) {
        alert("네이버 브라우저로 접속할 경우에는 정상적인 서비스가 불가능합니다.\n다른 브라우저로 다시 접속해주세요.");
        // 접근 차단 후 다른 페이지로 이동
        window.location.replace("../../../../../../../"); // 원하는 페이지로 리디렉션
    }
};
