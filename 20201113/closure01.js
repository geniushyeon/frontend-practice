function countdown(x) { // 클로저가 기억할 환경
    let y = x
    function counter() { // 클로저
        console.log(y--)
    }
    return counter
}

const counter = countdown(10)
counter()
counter()
counter()
counter()
counter()
counter()

const c1 = countdown(10)
const c2 = countdown(10)

c1()
c1()
c1()
c2()
