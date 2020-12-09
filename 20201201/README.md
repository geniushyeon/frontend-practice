# 1. javascript - var, let, const

## 1.1. var
java의 경우
```java
String name = "지니어스현"; // 전역 변수

public void 어쩌구() {
    String name2 = "지니어스현" // 지역 변수
}
```
javascript의 경우
```javascript
a = 10; // 전역 변수
var b = 20; // 지역 변수 
```
function 안에 a=10으로 선언했더라도 전역 변수임.<br/>
var 타입: 함수 레벨 스코프 
## 1.2. let
var의 경우 재선언이 가능하다는 문제점이 있음
```javascript
var a = 10;
var a = 20; // 가능한!
```
```javascript
let b = 10;
let b = 20; // 불가능한!
```

## 1.3. const
javascript에서 상수 선언할 때 사용.

# 2. jsp의 액션 태그
```jsp
<%@ ... %> // 지시문
<%= ... %> // 표현식(out.print)
<%! ... %> // 선언문
<% ... %> // scriptlet
```

# 3. Traversing
DOM Tree 구조를 기반으로 찾아가는 방식
- 명령어가 filter와 유사하다

종류
- .eq(index)
- .first()
- .last()
- .slice(start [, end])

메소드
- .children(expr)
- .find(expr)
- .parent(expr)
- .next(expr)
- .prev(expr)

## 3.1. 실습
```javascript
// btn1, btn2에 이벤트 처리 
var btn1 = $(".btn1")[0]; //클래스는 배열로 반환 

btn1.onclick = function() {
	var parent = $(btn1).parent(); // btn1을 포함하고 있는 부모 태그 
	$(parent).css("background-color", "tomato");
	alert("멋쟁이 토마토!");
	}
	
var btn2 = $(".btn2")[0];
btn2.onclick = function() {
		var parent = $(btn2).parent().css("background-color", "beige");
		
	}
```

this 써보기
```javascript
var btn2 = $(".btn2")[0];
btn2.onclick = function() {
    $(this).parent().css("background-color", "beige");
		
	}
```

# 4. manipulation
지정된 요소의 내, 외부 환경에 대한 요소를 추가 및 제거
- wrap()
- append()
- prepend()
- before()
- after()
- remove()
- empty()

## 4.1. 실습
```html
<body>
	<div id='main'>
		<div id='target'>TARGET</div>

		<div id='btn_zone'>
			<input type="button" value='wrap' id='btnWrap' onclick='printlog(this)' /> 
			<input type="button" value='append' id='btnAppend' /> 
			<input type="button" value='prepend' id='btnPrepend' />
		</div>
	</div>
	<script>
		// 버튼 3개에 각각 click event 처리
		// wrap(): 지정된 요소에 html이나 element를 씌운다.
		function printlog(button) {
			var wrap = "<label><input type='checkbox'/>확인</label>";
			$('#main>#target').wrap(wrap);
		}
	</script>
</body>
```

# 5. Filter
- 선택된 요소 중 필요한 요소만을 걸러낸다.
- 접두문자 `':'`을 붙여서 사용한다.
- 필터와 필터를 연결하여 사용할 수 있다.

## 5.1. 필터의 종류
1) 기본 필터
2) 폼 필터
3) 자식 필터

## 5.2. 실습
```html
<body>
	<div id="filter">
		<fieldset>
			<legend>filter</legend>
			<ul>
				<li>선택된 요소 중 필요한 요소만을 걸러내는 방법</li>
				<li>접두문자 ':'을 사용</li>
				<li>필터와 필터를 연결하여 사용 가능</li>
			</ul>
			</fieldset>
			
			<ol>
				<li>어쩌구</li>
				<li>저쩌구</li>
				<li>웅앵웅</li>
			</ol>
			
			<div id="items">
				<div>방가방가</div>
				<div>하이루</div>
			</div>
	</div>
	<script>
		$("#filter>ol>li:first").css("color", "#f00"); // 첫번째 요소 선택
		$("#filter>ol>li:odd").css("font-weight", "bolder"); // 홀수에 해당하는 요소 선택
		$("#items>div:odd").css("background-color", "#00f");
		$("#items>div:even").css("background-color", "#0f0"); // 짝수에 해당하는 요소 선택
		// odd / even 사용 시 주의사항: index는 0부터 시작한다.
	</script>
</body>
```