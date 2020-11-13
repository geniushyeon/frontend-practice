function countdown() { 
    let s = 1
    function counter() { 
        console.log(`${s++}회 호출됨`)
    }
    return counter
}

const c1 = countdown()
const c2 = countdown()

c1() // 1회 호출됨
c1() // 2회 호출됨
c1() // 3회 호출됨
c2() // 1회 호출됨