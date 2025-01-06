function performLogin() {
    // 사용자 이름과 비밀번호 가져오기
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // 여러 사용자 정보 (아이디와 비밀번호 배열로 저장)
    const users = [
        { username: "cuteyujin", password: "dbwls0507!!" },
        { username: "logindatabass", password: "admin" },
        { username: "abs", password: "abs123" },
        // 추가 사용자 정보는 여기에 추가
    ];

    // 입력한 아이디와 비밀번호가 배열의 사용자 정보와 일치하는지 확인
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
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