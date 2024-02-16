// script.js
const popupContainer = document.getElementById("popupContainer");
const closePopupButton = document.querySelector(".close-popup");
const hideForDayButton = document.querySelector(".hide-for-day");

// 쿠키를 설정하는 함수
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// 쿠키를 가져오는 함수
function getCookie(name) {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === " ") {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return null;
}

// 쿠키에 저장된 값 확인하여 팝업 표시 여부 결정
const hidePopupForDay = getCookie("hidePopupForDay");
if (!hidePopupForDay) {
    popupContainer.style.display = "block";
}

closePopupButton.addEventListener("click", function() {
    popupContainer.style.animation = "fadeOut 0.3s ease-in-out"; // 닫힐 때 애니메이션 적용
    setTimeout(function() {
        popupContainer.style.display = "none";
        popupContainer.style.animation = ""; // 애니메이션 초기화
    }, 300); // 애니메이션 종료 후 팝업 숨김
});

hideForDayButton.addEventListener("click", function() {
    setCookie("hidePopupForDay", "true", 1); // 1일 동안 쿠키 유지
    popupContainer.style.animation = "fadeOut 0.3s ease-in-out"; // 닫힐 때 애니메이션 적용
    setTimeout(function() {
        popupContainer.style.display = "none";
        popupContainer.style.animation = ""; // 애니메이션 초기화
    }, 300); // 애니메이션 종료 후 팝업 숨김
});

// 팝업 외부를 클릭하면 팝업이 닫히도록 하려면
popupContainer.addEventListener("click", function(event) {
    if (event.target === popupContainer) {
        popupContainer.style.animation = "fadeOut 0.3s ease-in-out"; // 닫힐 때 애니메이션 적용
        setTimeout(function() {
            popupContainer.style.display = "none";
            popupContainer.style.animation = ""; // 애니메이션 초기화
        }, 300); // 애니메이션 종료 후 팝업 숨김
    }
});
