# ⭐ INNOTIME ⭐

## 개요

- 이노베이션 캠프에 가지고 있는 생각들을 자유롭게 적을 수 있는 공간의 필요성을 느낌

## 프로젝트 내용

### 주제: INNOTIME - 이노베이션 캠프 익명 게시판

### 기간: 2022.08.26(금) - 2022.09.01(목)

### 필수 요구사항

1. 동적 라우팅 사용 (✅)
2. 1개 이상의 `Custom Hook` 구현 -> `useInput( )` (✅)
3. Form에 유효성 검증 적용 (✅)
4. 버튼 컴포넌트 1개로 모든 버튼 구현(만능 버튼) (✅)
5. `development` 환경에서만 `redux devtool` 활성화 (✅)
6. 배포된 결과물에서 console.log() 보이지 않도록 처리 (✅)
7. `.env` 를 이용해서 API 서버의 URL 코드 상에서 숨기도록 처리 (✅)

### 추가 기능 구현

- 게시판 목록 무한 스크롤 구현 (✅)

### 팀원별 역할

- 공통

  - Heroku(DB), Vercel(Client) 이용하여 배포
  
  - 노력

- 차혜인

  - 게시글 READ, DELETE, UPDATE 기능 구현
  
  - 게시글 수정 모달창 구현
  
  - DETAIL, EMPTY PAGE 제작

- 황준수

  - Comment(댓글) CRUD 구현

  - 화면 애니메이션 구현 (`framer-motion` 라이브러리 활용)
  
  - infinite scrolling 구현
  
  - Navigation Menu 구현

- 문지웅
  - `Header Component` 구현
  
  - `Banner Component` 구현

  - 새 게시글 CREATE 구현 -`Form Component` 구현

    게시글마다 고유한 ID를 부여하기 위해, `UUID` 라이브러리 활용

  - `만능 버튼 Component` 구현

  - `SubTitle` Code Component로 리팩토링 

### 구현에 사용한 패키지 List

- `redux-toolkit`
- `axios`
- `cross-env`
- `json-server`
- `styled-components`
- `uuid`
- `framer-motion`

## 구현 결과
![image](https://user-images.githubusercontent.com/83802168/187857899-034754a4-5372-42af-b9c8-50a90d02ece2.png)

[바로가기](https://innotime.vercel.app)

## Stack
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
<img src="https://img.shields.io/badge/heroku-430098?style=for-the-badge&logo=Heroku&logoColor=white">
<img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white">
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
<img src="https://img.shields.io/badge/.ENV-ECD53F?style=for-the-badge&logo=.ENV&logoColor=white">

