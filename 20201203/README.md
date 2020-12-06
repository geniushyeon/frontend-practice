# 1. effect
기본 형태: 메소드(속도)
## 1.1. show()
요소를 보이게 함.
```javascript
$("#btnShow").on("click", function(){
		$("#target>#image").show(2000)
	})
```
## 1.2. hide()
요소를 숨김(show와 세트라고 생각하기)
```javascript
$("#btnHide").on("click", function(){
		$("#target>#image").hide(2000)
})
```
## 1.3. toggle()
show + hide
```javascript
$("#btnToggle").on("click", function(){
		$("#target>#image").toggle(1000)	
})
```
## 1.4. slideDown()
숨겨진 요소를 위에서부터 아래로 내려오며(slide down) 보이게 함.
- 숨겨져 있어야 효과를 볼 수 있음
```javascript
$("#btnSlideDown").on("click", function(){
		$("#target>#image").slideDown(700)	
})
```
## 1.5. slideUp()
보여지고 있는 요소를 아래에서부터 위로 올라가며(slide up) 숨김
```javascript
$("#btnSlideUp").on("click", function(){
		$("#target>#image").slideUp(700)	
	
})
```
## 1.6. slideToggle()
slideDown + slideUp
```javascript
$("#btnSlideToggle").on("click", function(){
		$("#target>#image").slideToggle(2000)	
})
```
## 1.7. fadeIn()
지정된 요소를 서서히 보이게 함(투명도 0->1)
```javascript
$("#btnFadeIn").on("click", function(){
		$("#target>#image").fadeIn(1500)	
	
})
```
## 1.8. fadeOut()
지정된 요소를 서서히 사라지게 함(투명도 1->0)
```javascript
$("#btnFadeOut").on("click", function(){
		$("#target>#image").fadeOut(2000)
})
```
## 1.9. animate(params)
params: 효과를 표현할 스타일 셋. map 구조로 지정.
```javascript
$("#btnAnimation").on("click", function(){
		$("#target>#image").animate({
			"width" : "toggle",
			"opacity" : "toggle"
		})
	})
```
# 2. one()
지정된 이벤트를 단위 세션 당 한 번만 실행하게 함.
```javascript
<div id="one">
	<div id="result">송금 버튼을 클릭하시면 송금됩니다.</div>
	<input type="button" value="송금" id="btnSend"/>
</div>

$("#btnSend").one("click", function(){
		count++;
		$("#result").html(count + "회 송금됨.");
		$(this).attr("disabled", "disabled");
}) // btnSend 비활성화
```
다른 방법들. 결과는 같음.
```javascript
$("#btnSend").click(function(){
		$("#result").html(count +"회 송금됨.");
		$(this).attr("disabled", "disabled");
})
```
```javascript
$("#btnSend").click(function(){
		if (count == 1) {
			return false;
		}
		count++;
		$("#result").html(count +"회 송금됨.");		
	})
```
# 3. tabs()

# 4. toggle()