# CSS3 단위
# 1. 상대 단위
- 크기를 상대적으로 지정할 수 있기 때문에 절대 단위보다 많이 사용됨
- 다른 길이 등록 정보와 관련된 길이를 지정
- em 및 rem 단위는 확장 가능한 레이아웃을 만드는데 실용적
- viewport란 브라우저 창 크기를 의미
  - viewport가 50cm면, 너비는 1vw = 0.5cm

# 2. 색상 단위

## 2.1. 키워드를 이용한 색상 적용 
- www.w3schools.com/cssref/css_colors.asp
  
## 2.2. 색상 단위 종류
- Hexadecimal colors: HEX 코드 단위
- RGB colors
- RGBA colors
- HSL colors
  - 빛의 색상 정도를 %로 나타냄
- HSLA colors 
  - A: 투명도 의미
  - 값이 작을수록 투명도가 높아짐(0~1)

# 3. URL 단위
- 이미지 파일이나 폰트 파일을 불러올 때 사용
- url() 함수 지정

# 4. 그레디언트
- 2가지 이상의 색상을 혼합한 색을 만드는 기능(CSS3+)
- 실습: www.colorzilla.com/gradient-editor

# CSS 속성
# 1. Box 속성
- width, height
  -  디폴트 값은 auto, 지정할 경우 상자 크기 고정
- margin
  - 상자 외부에 여백이 생김
- padding
  - 상자 내부에 여백이 생김
- border

# 2. 배경 속성
- background
- background-image
- background-position
- background-size
- background-repeat
- background-attatchment
  - 배경 이미지가 나머지 페이지와 함께 스크롤되는지 고정되는지를 설정
- background-color  

# 3. Font 속성
- font-size
- font-family
- font-style
- font-weight
- text-align

# 4. 위치 속성
- static
- relative
- absolute
- fixed
  - 화면을 기준으로 절대적 위치 좌표 설정
- overflow
- hidden
  - 영역을 벗어나는 부분을 보이지 않게 함
- scroll

# 5. float 속성
- 태그 요소가 어떻게 떠다니는지 지정
- 절대적 위치를 사용하는 요소는 float 속성을 무시함
- left, right

# Semantic Web

# 1. 주의사항
- 유저가 사용하는 모니터의 화면 해상도 고려
- 해상도에 따라 가로 폭이나 배치를 변경하여 가독성을 높이는 방법
- @media 이용하여 화면 해상도에 따라 다른 레이아웃 지정

# 2. 미디어 쿼리
- `@media`로 `<style>`에서 선언하여 미디어 유형 및 장치에 따른 스타일 적용
- 뷰 포트의 너비와 높이
- 장치의 너비와 높이
- 방향 결정
  - 가로, 세로 모드의 태블릿 혹은 스마트폰
- resolution
- 데스크탑, 랩탑, 태블릿 및 스마트폰에 맞춤형 CSS 사용 가능
```css
 @media (max-width: 640px) {
                .container {
                    background-color: indianred;
                }
            }
```
# 3. 반응형 웹 예시
## 3.1. 뷰포트 meta 태그
- 웹 브라우저에 특별한 정보를 제공하는 태그
```html
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
```
