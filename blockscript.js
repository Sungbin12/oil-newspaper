        // SweetAlert2 라이브러리 동적으로 추가
        var script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
        script.onload = function() {
            // SweetAlert2가 로드된 후 동작을 차단하는 코드 실행
            initBlockActions();
        };
        document.head.appendChild(script);

        function initBlockActions() {
            // F12 키 (개발자 도구 열기) 막기
            document.addEventListener("keydown", function(e) {
                if (e.key === "F12" || e.keyCode === 123) {
                    e.preventDefault();
                    showAlert("F12 (개발자 도구) 기능은 사용할 수 없습니다.");
                }
            });

            // 오른쪽 클릭(컨텍스트 메뉴) 막기
            document.addEventListener("contextmenu", function(e) {
                e.preventDefault();
                showAlert("오른쪽 클릭은 사용할 수 없습니다.");
            });

            // 프린트 스크린 (PrtScn 키) 막기
            document.addEventListener("keydown", function(e) {
                if (e.key === "PrintScreen" || e.keyCode === 44) {
                    e.preventDefault();
                    showAlert("프린트 스크린은 사용할 수 없습니다.");
                }
            });

            // 개발자 도구와 관련된 키 이벤트 차단
            document.addEventListener("keydown", function(e) {
                if ((e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) || 
                    (e.ctrlKey && e.key === "U")) {
                    e.preventDefault();
                    showAlert("개발자 도구를 사용할 수 없습니다.");
                }

                if (e.ctrlKey && e.key === "c") {
                    e.preventDefault();
                    showAlert("복사 기능은 사용할 수 없습니다.");
                }

                if (e.ctrlKey && e.key === "x") {
                    e.preventDefault();
                    showAlert("잘라내기 기능은 사용할 수 없습니다.");
                }

                if (e.ctrlKey && e.key === "v") {
                    e.preventDefault();
                    showAlert("붙여넣기 기능은 사용할 수 없습니다.");
                }
            });

            // 복사 이벤트 처리
            document.addEventListener("copy", function(e) {
                e.preventDefault();  // 기본 복사 동작을 막음
                const newText = "이 텍스트는 복사할 수 없습니다.";  // 복사 시 보여줄 텍스트
                e.clipboardData.setData("text/plain", newText);  // 새로운 텍스트를 클립보드에 설정
                showAlert("복사 기능은 사용할 수 없습니다.");
            });

            // 드래그 이벤트 차단
            document.addEventListener("dragstart", function(e) {
                e.preventDefault();  // 드래그 시작을 막음
                showAlert("드래그 기능은 사용할 수 없습니다.");
            });

            document.addEventListener("drag", function(e) {
                e.preventDefault();  // 드래그 중인 동작을 막음
            });

            document.addEventListener("dragend", function(e) {
                e.preventDefault();  // 드래그 끝을 막음
            });

            // 텍스트 선택 차단
            document.addEventListener("selectstart", function(e) {
                e.preventDefault();  // 텍스트 선택을 막음
                showAlert("텍스트 선택은 사용할 수 없습니다.");
            });
        }

        // SweetAlert2로 알림 띄우기
        function showAlert(message) {
            Swal.fire({
                icon: 'warning',  // 알림의 아이콘
                title: '주의!',
                text: message,
                confirmButtonText: '확인',

                showClass: {
                    popup: 'animate__animated animate__fadeIn'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOut'
                }
            });
        }