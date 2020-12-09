<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<div id="ajax_jquery">
	<h2>Ajax in jQuery(JSON)</h2>
	<form name="form" method="POST" id="form">
		<label>구구단을 출력하고 싶은 수를 입력하세요.</label>
		<input type="text" size="4" name="dan" value="9"/>
		<input type="button" value="구구단 실행" id="buttonRun"/>
	</form>
	<div id="result"></div>
</div>
<script>
$("#buttonRun").on("click", function(){
	let param = $("#form").serialize();
	$.ajax({
		type : "GET",
		url : "./jquery/MultiplicationTableJSON.jsp",
		data : param,
		
		dataType : "json",
		success : function(json, status){
			var temp = "";
			for(var i=0; i<json.length; i++) {
				temp += json[i] + "<br/>";
			}
			
			$("#result").append(temp);
			// 새로고침되어 나오게 하고 싶으면
			// $("#result").html(receivedData)
		},
		
		error: function(xhr, status, error) {
			alert(status);
			
		}
	});
})

</script>
</body>
</html>