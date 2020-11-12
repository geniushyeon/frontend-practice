const a = 10

if (a>5){
    console.log('a가 5보다 크다.')
}

for (var i=0; i<10; i++){
    console.log(`${i+1}번째 고양이`)
}


const obj = {
    food: '감자', 
    number: 10, 
    arr: [1,2,3], 
    }

for (p in obj) {
    console.log(p)
}

const obj = ['감자', 10, [1,2,3], ]


for (value of obj){
    console.log(value)
}