
    // 쿠키에서 로그인 상태를 확인합니다.
    function checkLoginStatus() {
        const isLoggedIn = document.cookie.includes("isLoggedIn=true");
        return isLoggedIn;
    }

    // 페이지 로드 시 링크 업데이트를 수행합니다.
    function updateLinkVisibility() {
        const loginLink = document.getElementById("loginLink");
        const logoutLink = document.getElementById("logoutLink");
        const articleLink = document.getElementById("jabo");

        if (checkLoginStatus()) {
            // 로그인 상태일 때 설정
            loginLink.style.display = "none";
            logoutLink.style.display = "block";
            articleLink.style.display = "block";
        } else {
            // 비로그인 상태일 때 설정
            loginLink.style.display = "block";
            logoutLink.style.display = "none";
            articleLink.style.display = "none";
        }
    }

    // 페이지 로드 시 링크 업데이트를 수행합니다.
    updateLinkVisibility();

    // 로그아웃 링크 클릭 시 동작하는 함수
    function handleLogoutLinkClick(event) {
        event.preventDefault(); // 기본 동작 방지

        // 로그아웃 처리
        document.cookie = "isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = "로그인/logout.html";

        // 로그인 상태가 변경될 때마다 링크의 가시성 업데이트
        updateLinkVisibility();
    }

    // 로그아웃 링크에 클릭 이벤트 추가
    const logoutLink = document.getElementById("logoutLink");
    logoutLink.addEventListener("click", handleLogoutLinkClick);