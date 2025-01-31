(function () {
  function resp() {
  var arrUserIP = ['IP','IP'];
  var arrSetsIP = ['대역','대역'];
  var json = JSON.parse(this.responseText);
  for (var i = 0; i < arrUserIP.length; i++) {
    if (json.ip == arrUserIP[i]) {
      window.location.replace("접속 차단.html");
    }
  }
  for (var i = 0; i < arrSetsIP.length; i++) {
    if (json.ip.startsWith(arrSetsIP[i])) {
      alert("현재 접속을 시도한 IP는 차단된 IP입니다.");
      window.location.replace("접속 차단.html");
    }
  }
}

var request = new XMLHttpRequest();
request.addEventListener("load", resp);
request.open("GET", 'https://api64.ipify.org?format=json');
request.send();
}());