# 1. 비구조화 할당(destructuring assignment)

객체 리터럴이나 배열 리터럴 분해 가능

## 1.1. 배열 리터럴

```javascript
const arr = [1, 2, '문자열', {}]

const [a,b] = arr
console.log(a)
console.log(b)
```

## 1.2. 객체 리터럴
```javascript
const user = {
    id: 'abcdefg',
    name: 'Jihyeon Lee',
    data: [1, 2, 3, 4],
}

const {id, name, data} = user
console.log(id)
console.log(name)
console.log(data)
```

# 2. 함수

- 함수의 시그니처가 함수 호출을 결정하는가?
  - 자바스크립트에선 아님

```javascript
function f(x){
    console.log('호출됨!')
}

f(1)
f(1,2,3)
```

# 3. 스코프
변수, 상수, 매개변수가 언제 어디서 정의되었는지 결정하는 것
```javascript
function f(x) {
    // 스코프: 함수 f 내부
    return x ** x
}
```

- 선언: 식별자를 알림
- 정의: 값을 부여

```java
// Java
System.out.println(message); 
// 이 시점에선 안 보임
String messeage = "Hello Java";
```

```javascript
// 변수 message가 호이스팅
// var는 함수 레벨 스코프
console.log(message)
var message
```

```javascript
// 블록 레벨 스코프
console.log(message)
const message

console.log(message)
let message
```

## 3.1. 스코프와 존재
```javascript
const name = 'hi' // 전역 스코프
function f(x) {
    console.log(name)
    console.log(x)
}
f(5)
x
```

- 변수가 존재하지 않으면 해당 변수가 스코프 안에 있지 않음을 의미
- 선언하지 않은 변수나 함수가 종료되면서 존재하지 않게 된 변수는 스코프 내부에 존재하는 것이 아님

  - 변수가 스코프 내부에 존재하지 않으면 실제로 존재하지 않을까?

* 스코프(가시성) - 현재 실행 중인 부분(실행 context)에서 현재 보이고 접근 가능한 식별자들을 의미
* 존재 - 식별자가 메모리를 차지하고 있는 어느 부분을 가리키고 있음

## 3.2. 전역 스코프

- 스코프는 계층 구조를 지니고 있음
- 전역 스코프: 묵시적으로 주어지는 스코프
- 전역 변수: 전역 스코프 내에서 선언된 식별자
- 가시성이 전체.

전역 스코프의 단점
- 가시성이 전체
  - 어디서든 접근 및 수정 가능
- 실행 context가 전역 스코프에 의존하게 되어버림

# 3.3. 블록 스코프

중괄호 내부에 선언된 식별자들

```javascript
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
```
### 3.3.1. 변수 마스킹
```javascript

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
```

- 스코프는 계층 구조다
- 같은 이름의 식별자를 사용하면 바깥 스코프의 동일한 이름을 사용하는 식별자가 가려짐(접근할 방법이 전혀 없음)
  - 변수 마스킹

## 3.4. 랙시컬 스코핑(Lexical Scoping) 정리

```javascript
function outer() {
    const name = '바깥임'
    function showName() {
        const n = '안쪽임'
        console.log(`바깥: ${name}, 안: ${name}`)
    }
    showName()
}
outer()
```

- outer 내부 스코프
  - name 상수
  - showName 함수
- showName(클로저)은 자신의 외부에 해당하는 outer 함수의 name 상수에 접근 가능

위 코드를 조금 수정해보자.

```javascript
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
```

일반적으로는 함수 호출이 완료되고 나면 내부 변수가 정리되어 사용할 수 없다고 생각함.
- 하지만 javascript의 경우 클로저(closure)가 형성됨

클로저(closure)
- 함수와 함수가 선언된 렉시컬 환경의 조합
- 렉시컬 환경은 클로저가 생성된 당시의 유효 범위 내에 있는 모든 지역 변수로 구성됨

기억할 것
- 클로저가 생성된 위치에서 유효했던 범위(환경)들을 기억하고 있다는 것.

```javascript
function countdown(x) { // 클로저가 기억할 환경
    let y = x
    function counter() { // 클로저
        console.log(y--)
    }
    return counter
}

const counter = countdown(10)
counter() // 10
counter() // 9
counter() // 8
counter() // 7
counter() // 6
counter() // 5
```

생각해볼 것
```javascript
const c1 = countdown(10)
const c2 = countdown(10)

c1() // 10
c1() // 9
c1() // 8
c2() // 10
```
- c1()과 c2()는 서로 다름.

```javascript
function countdown() { 
    let y = 1
    function counter() { 
        console.log(`${y++}회 호출됨`)
    }
    return counter
}

const c1 = countdown()
const c2 = countdown()

c1() // 1회 호출됨
c1() // 2회 호출됨
c1() // 3회 호출됨
c2() // 1회 호출됨
```

## 3.5.  IIFE
Immediately Invoked Function Expression

```javascript
(function(x) {
  console.log(`파라미터 ${x}`)
})(5) //파라미터 5
```
주로 비동기처리, 정보 은닉에 사용

# 4. 노드
노드 프로젝트 생성. 
- 의존성을 기록할 package.json 필요.

프로젝트 초기화 명령은
```bash
npm init
```

의존성 설치
```bash
npm install <패키지이름>
```

의존성 제거
```bash
ipn install <패키지이름>
```

