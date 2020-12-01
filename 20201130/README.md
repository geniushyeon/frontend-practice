# jQuery
# 1. 개요
- html + CSS + javascript를 통합한 하나의 라이브러리
- 쉬운 접근 방법을 제공 -> but 전체 처리 속도 저하
- 모든 javascript 문법 그대로 사용 가능
- 대소문자 구별
- 함수에 대한 이해가 좋을수록 jQuery의 이해도가 높아질 수 있다.
  
예시
- javascript
```javascript
var id = document.getElementById('abc');
var getId = function(id) {
    return document.getElementById(id);
}
var id = getId('abc');
```
- jQuery  
```jquery
var id = $('#abc');
```
# 2. 라이브러리 사용 방법
www.jquery.com
- 1) CDN: Content Delivery Network
  - 네트워크가 원활하지 않은 경우 정상적으로 돌아가지 않을 수 있다.
- 2) 라이브러리를 해당 프로젝트 내에 복사해서 사용

# 3. jQuery 기본 사용법
```jQuery
$('선택자 선택자이름').css('key', 'value');
```

예시.
```CSS
#element {
    background-color: RED;
}
```
```jQuery
$('#element').css('color','#f00');
```

# 4. DOM
- HTML을 트리 구조로 표현한 것.
  - Selectors, Attribues, Traversing, Maniplation, CSS
  - Event, Effects, Ajax

# 5. JSON
key:value로 표기 
```json
key:value => {
    key:value, key:value ...
}
```
배열로 표기
```json
{v1, v2, v3, ...}
```
혼합형
1) 배열 안에 map
```json
[ { }, { }, ...]
```
2) map 안에 배열
```json
{ key:[...] }
```

```json
$("#footer").css({
			"height" : "100px",
			"background-color" : "#ccc",
			"text-align" : "center",
			"line-height" : "100px"

		});
```

## 5.1. filter
- 선택된 요소 중 필요햔 요소만을 걸러내는 방법
- 접두문자 ':'을 사용
- 필터와 필터를 연결하여 사용 가능

종류
- :eq(index)
- :even
- :odd
- :first
- :last
- :gt(index)
- :lt(index)

## 5.2. 동적 include
```jsp
<%
		String inc = "filter.jsp";
		if(request.getParameter("inc") != null) {
			inc = request.getParameter("inc");
			
		}
	
	%>
	<div id="index">
		<header id="header">This is a header</header>
		<section id="contents">
			<article class="content">
			<jsp:include page ="<%=inc %>"/> <!-- 동적 include -->
```