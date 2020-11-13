console.log('블록 이전에 호출')
{
    console.log('블록 내부1에서 호출됨')
    const x = 1
    console.log(x)
    {
        console.log('블록 내부2에서 호출됨')
        const y = 5
        conosle.log(y)
    }
    console.log(y) // Error!
    
}

console.log('블록 이전에 호출')
{
    const x = 10
    const block1 = '블록 1'
    console.log(x)
    {
        const x = '다른타입의 값'
        console.log(x)
        console.log(block1)
    }
}