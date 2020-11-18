// x, y를 전역 변수로 선언
var x = 10, y = 20;
// sub()를 전역 함수로 선언
function sub() {
    return x-y;
}
// document.write("전역 함수에서 x-y의 값은" + sub() + "입니다.<br>");

// parentFunc()을 전역 함수로 선언
function parentFunc() {
    var x = 1, y = 2;
    function add() {
        return x+y;
    }

    return add();
}

console.log(sub())
console.log(parentFunc())