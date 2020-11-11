# 1. 색상 표현 방법
# 1.1. 16진수

RGB
R: 0 ~ 255(0 ~ `FF)
G: 0 ~ 255(0 ~ FF)
B: 0 ~ 255(0 ~ FF)

ex) #D23232
R: D2h - 210
G: 32h - 50
B: 32h - 50

->RGB함수 사용 가능
```html
background-color: rgb(68, 218, 215);
```

## 1.2. rgb 함수
rgb(r, g, b)
rgba(r, g, b, a)
- a(alpha, 투명도): 0~1 사이의 값

## 1.3. HSL

Hue(색도)
Saturation(채도)
Lightness(명도)

hsl(360, 100, 100);
hsla(360. 100, 100);

# 2. gradation

linear-gradient([각도 방향])

# 3. Box를 구성하는 4가지

- margin: border(테두리) 바깥의 여백
- border: 테두리
- padding: 테두리와 컨텐트 사이의 여백
- content: 내용이 표시되는 공간

박스에 필요한 속성
- width, height

box-sizing -> 의미가 변경됨
- border-box
  - width, height에 입력한 값 그대로 적용됨
- content-box: width, height
  - 좌우 padding + 좌우 border + 컨텐트

# 4. position 속성

- top: 
- bottom: 
- left: 
- right: 

position

- static: 기본값
- relative:다른 블록의 배치에 따라 결정됨
- absolute: 절대값(가장 가까운 부모나 조상 요소 중 속성이 relative인 요소를 기준으로)
- fixed: absolute와 비슷해 보이지만 기준이 브라우저

# 5. flex

flex container에서 사용할 수 있는 속성

- flex-direction: 플렉스 방향 지정
  - row: 주축을 가로로, 교차축 세로로 (left to right)
  - row-reverse: right to left
  - column: 주축을 세로로, 교차축이 가로 (top to bottom)
  - column-reverse: bottom to top
- flex-wrap: 배치 방식
- justify-content: `주축`을 기준으로 배치 방식 지정
- align-items: `교차축`을 기준으로 배치 방식 지정
- align-content: 여러 줄일 때 배치 방식

flex item에서 사용할 수 있는 속성
- flex: 플렉스 항목 크기 조정
  - flex-grow: 플렉스 항목의 너비를 얼마나 늘릴지 지정
  - flex-shrink: 플렉스 항목의 너비를 얼마나 줄일지 지정
  - flex-basis: 항목의 기본 크기 지정

```html
flex: flex-grow flex-shrink flex-basic
```
order: 임의로 순서 지정 가능
