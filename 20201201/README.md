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

# 4. 이벤트 처리
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

# 5. manipulation
지정된 요소의 내, 외부 환경에 대한 요소를 추가 및 제거
- append
- prepend
- before
- after
- remove
- empty