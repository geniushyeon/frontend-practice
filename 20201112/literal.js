const obj = {
    abc: 'abc'
}
//멤버 접근 연산자(.) member access operator
console.log(obj.abc);
// 계산된 멤버 접근 연산자([]) computed member access operator
console.log(obj['abc']);
obj['alpha'] = 'a'
obj['beta'] = 'b'
console.log(obj);

//javascript에서 값 비교 : ===

const obj1 = {
    abc: 'abc'
}
const obj2 = {
    abc: 'abc'
}

console.log(obj1 === obj2)