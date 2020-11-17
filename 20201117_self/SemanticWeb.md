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
```css
@media (max-width: 600px) {
    nav, article {
        width: 100%;
        height: auto;
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