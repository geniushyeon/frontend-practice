# 서술형
1. 버튼을 클릭하면 특정 페이지로 이동(form + action + submit)
2. 항목들이 반드시 입력되어야할 때 태그의 속성 지정 - required
3. label을 클릭하면 해당 입력 상자로 이동하도록 하는 label 태그의 속성
4. 정규식을 사용해서 영문자의 대소문자, 문자의 길이를 체크.
```javascript
 /^[A-Z]/, /[A-Z0-9]$/, /[a-z]{4,}/
 ```
 - https://blog.naver.com/PostView.nhn?blogId=sbd38&logNo=220093775270&proxyReferer=https:%2F%2Fwww.google.com%2F
 - https://gocoding.tistory.com/93


# 문제 해결 시나리오
- 실행 결과를 보고 CSS 지정
- 마우스나 키보드 이벤트에 따른 이벤트 설정
- 입력창의 입력될 내용들에 대한 설명. 입력이 되면 안내 메시지는 자동 삭제. (placeholder)