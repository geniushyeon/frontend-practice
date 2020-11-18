# 반복문
Java와 다른 반복문 정리

# 1. for(변수 in 객체)
반복문 루프마다 객체의 열거할 수 있는 프로퍼티(enumerable properties)의 이름을 지정한 변수에 대입
```javascript
for (변수 in 객체) {
    객체의 모든 열거할 수 있는 프로퍼티의 개수만큼 반복적으로 실행하고자 하는 실행문;
}
```

```javascript
var arr = [1, 2, 3];

for (var i in arr) {
    console.log(i + " ");
}
```

# 2. for-of 문
반복할 수 있는 객체(iterable objects - Array, Map, Set, arguments)를 순회
```javascript
for (변수 of 객체) {
    객체의 모든 열거할 수 있는 프로퍼티의 개수만큼 반복적으로 실행하고자 하는 실행문;
}
```
```javascript
var arr = new Set([1,1,2,2,3,3]);

for(var value of arr) {
    console.log(value + " ");
}
```