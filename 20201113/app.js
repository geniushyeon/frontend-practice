// 배열 리터럴
const arr = [1, 2, '문자열', {}]

const [a,b] = arr
console.log(a)
console.log(b)

// 객체 리터럴
const user = {
    id: 'abcdefg',
    name: 'Jihyeon Lee',
    data: [1, 2, 3, 4],
}

const {id, name, data} = user
console.log(id)
console.log(name)
console.log(data)



console.log