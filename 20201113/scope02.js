function sayHelloTo(name) {
    const message = `Hello ${name}!`
    return function () {
        console.log(message)
    }
}

const hello1 = sayHelloTo('Javascript')
const hello2 = sayHelloTo('Java')
const hello3= sayHelloTo('Python')

hello1()
hello2()
hello3()

function outer() {
    const name = '바깥임'
    function showName() {
        const n = '안쪽임'
        console.log(`바깥: ${name}, 안: ${name}`)
    }
    return showName;
}
const f1 = outer()
f1()    //showName

