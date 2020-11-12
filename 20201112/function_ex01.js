function test(a,b) {
    return `${a}와 ${b}의 합은 ${a+b}입니다.`
}

// const resultMessage = test(1,2)
// console.log(resultMessage)

// const a = test
// const resultMessage = a(1,2)
// console.log(resultMessage)

//이름이 없는 함수
const a = (a, b) => `${a}와 ${b}의 합은 ${a+b}입니다.`
const resultMessage = a(1,2)
console.log(resultMessage)