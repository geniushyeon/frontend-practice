# Ajax(Asynchronous JavaScript and XML)

- 비동기 방식으로 서버와 통신하며, 브라우저의 새로고침 없이 특정 영역의 내용을 동적으로 변경할 수 있다.
- 별도의 외부 플러그인이나 라이브러리, API들이 필요없다.
- 브라우저 내부에 있는 자바스크립트만으로 처리 가능하다.
- 프로그램 방식을 Web 방식에서 App 방식으로 처리할 수 있다.

# 1. 예시 - Ajax 사용하지 않은 예
```jsp
<h3>간단 테스트</h3>
	<%
	String temp = request.getParameter("number");
	String message = ""; // 결과 메시지 
	int number = 0;
	if (temp != null && !temp.equals("")) {
		number = Integer.parseInt(temp);
		if (number % 2 == 0) {
			message = number + "는 짝수입니다.";
		} else {
			message = number + "는 홀수입니다.";		
            }
		}
	%>
	<form name="form" method="POST">
	    <label>정수를 입력하세요</label> 
	    <input type="text" size="6" name="number" />
	    <input type="submit" value="Check" />
	    </form>
	<div id="result">
		<%=message %>
	</div>
```
Check버튼 누르면 `페이지가 새로고침되며` 결과가 출력된다.

# 2. Ajax로 바꾸기
Ajax를 통해 전체 페이지가 새로고침되지 않게 하려면,
1) 서버에서 처리할 내용을 UI에서 분리
2) 처리된 내용을 화면에 출력하는 로직을 서버에 추가
3) UI단에서는 XMLHttpRequest 객체를 사용하여 서버의 처리 결과를 가져옴

# 3. Ajax 실습
```javascript
// Ajax를 통해 서버의 처리 결과를 result에 표시 
var form = document.form;
	
form.onsubmit = function() { // form 안에 submit 버튼이 클릭됐을 때
	var param = "?number=" + form.number.value;
		
	var request = new XMLHttpRequest();
	request.open("GET", "./ajax/OddEvenCheck.jsp" + param); //GET 타입으로 OddEvenCheck.jsp파일에 요청 정보를 생성

	request.onreadystatechange = function() {
		if (request.status == 200 && request.readyState == 4) {
			// request.status == 200: 정상 요청됨 
			// request.readyStatus == 4: 정상 응답 
			var r = document.getElementById("result");
			r.innerHTML = request.responseText; // 응답 결과를 r에 집어넣음 
		}
			
	}
	
	request.send(); // 요청 정보를 서버에 전송 
	
	return false; // submit 고유의 기능을 취소 
}
```
jQuery로 써보자.
```javascript
var form = document.form;
	
form.onsubmit = function() { // form 안에 submit 버튼이 클릭됐을 때
	var param = "?number=" + form.number.value;
		
	var request = new XMLHttpRequest();
	request.open("GET", "./ajax/OddEvenCheck.jsp" + param); //GET 타입으로 OddEvenCheck.jsp파일에 요청 정보를 생성

	request.onreadystatechange = function() {
		if (request.status == 200 && request.readyState == 4) {
        $("#result").html(request.responseText);
        } // jQuery
    }
    request.send();

    return false;
}
```