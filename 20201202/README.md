# 1. Attribute
HTML 요소에서 `name 속성을 제외한` 나머지 부분을 제어할 수 있다.
- 정의되지 않은 속성을 임의로 지정할 수 있으나, 브라우저별 호환성은 없으므로 주의해야 함.

## 1.1. .attr()
엘리먼트 집합에 속한 첫번째 엘리먼트의 속성을 가져온다.
- 장점
  - 편리성: jQuery 객체나 jQuery 메소드 체인 코드에서 바로 활용할 수 있다.
  - 크로스 브라우징 지원: 브라우저 종류에 따라 속성 이름이 다르거나 속성 값을 다르게 표현할 때가 있는데, 이러한 크로스 브라우징의 이슈를 최소화할 수 있다.
- 사용 패턴
  - .attr(attributeName)
  - .attr(attributeName, value)
  - .attr(map)
  - .attr(attributeName, function)
## 1.2. .removeAttr()
## 1.3. .val()
value 값을 가져온다.
## 1.4. .text / .html
해당 형식으로 값을 가져오거나 대입한다.

## 1.5. 실습
### 1.5.1. .attr() / .removeAttr() 실습
```html
<style>
	#target {
		border: 1px solid #aaa;
		width: 400px;
		height: 200px;
	}
	
	.a_type {
		background-color: #00f;
		color: #fff;
	}
	
	.a_type>h1 {
		color: #fff;
		font-family: D2Coding
	}
	
	.b_type {
		background-color: #f99;
		color: #ff0;
	}
	
	.b_type>h1 {
		color: #ff0;
		font-family: D2Coding;
	}
	
	
</style>
</head>
<body>

	<div id='attribute'>
		<div id='target' class='target'>
			<h1>Hello jQuery Attribute!</h1>

		</div>

		<div id='buttons'>
			<input type="button" value="A Type" id="btnAtype" /> 
			<input type="button" value="B Type" id="btnBtype" />
			<input type="button" value="Default" id="btnDefault" />
		</div>
	</div>

	<script>
	var target = $("#target"); // 전역 변수 
	
	$('#btnAtype')[0].onclick = function() {
		$(target).attr('class', 'a_type');
	
	} 
	
	$('#btnBtype')[0].onclick = function() {
		$(target).attr('class', 'b_type');
	
	}
	$('#btnDefault')[0].onclick = function() {
		$(target).removeAttr('class', '');
		
	}
</script>
</body>
```
### 1.5.2. .text() / .html() 실습
```html
<!-- each.jsp -->
<script>
	$('#each #btnText')[0].onclick = function() {
		var div = $('#each>#source>div').get(0);
		var text = $(div).text();
		$('#each #target').text(text);
	}
		
	$('#each #btnHtml')[0].onclick = function() {
		let div = $('#each>#source>div').get(0)
		let html = $(div).html();
		$('#each #target').html(html);
	}
</script>
```
# 2. Core
