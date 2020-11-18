// 함수 호이스팅
// javascript 함수 안에 있는 모든 변수의 선언은 함수의 맨 처음으로 이동한 것처럼 동작

var globalNum = 10;
function printNum() {
    console.log("지역 변수 globalNum 선언 전의 globalNum의 값은 " + globalNum);
    var globalNum = 20;
    console.log("지역 변수 globalNum 선언 후의 globalNum의 값은 " + globalNum);

}

printNum()