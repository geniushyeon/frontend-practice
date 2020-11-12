function test(a, b=3, template = `${a}와 ${b}의 합은 ${a+b}입니다.`) {
    return template
}

console.log(test(1))
