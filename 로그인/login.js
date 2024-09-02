function performLogin() {
    // 사용자 이름과 비밀번호 가져오기
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // 간단한 시뮬레이션: 사용자 이름이 "user"이고 비밀번호가 "password"인 경우 로그인 성공으로 가정
    if (username === "cuteyujin" && password === "dbwls0507!!") {
        // 쿠키 만료 시간 설정 (현재 시간 + 24시간)
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (24 * 60 * 60 * 1000));

        // 쿠키에 로그인 상태 저장
        document.cookie = `isLoggedIn=true; expires=${expirationDate.toUTCString()}; path=/`;

        alert("로그인에 성공하였습니다.");

        // 로그인 성공 시 다른 사이트로 이동
        window.location.href = "../../"; // 대상 사이트의 URL로 변경
    } else {
        alert("아이디 또는 비밀번호가 올바르지 않습니다.\n다시 시도 하십시오.");
    }
}