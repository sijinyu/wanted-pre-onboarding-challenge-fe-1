# 🚀 원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제 Todo App


## 📚 STACKS
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)


![login](https://user-images.githubusercontent.com/59022492/185672890-18f53325-de30-46ed-8dc1-784bb33a898c.gif)
![todo](https://user-images.githubusercontent.com/59022492/185673680-3e42b252-e0a5-4c81-8452-017c2cb95eb7.gif)
![errorboundary](https://user-images.githubusercontent.com/59022492/185673643-1e2877ae-c35f-4fb9-8ab0-3b963a0d49c6.gif)
<!-- ![스크린샷 2022-08-20 오전 2 27 45](https://user-images.githubusercontent.com/59022492/185674778-1780668b-3dd2-467b-9853-d3eb231e5fb5.png) -->

## Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [V] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [V] 이메일 조건 : 최소 `@`, `.` 포함 
  - [V] 비밀번호 조건 : 8자 이상 입력 o
  - [V] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [V] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [V] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [V] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

## Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [v] 목록 / 상세 영역으로 나누어 구현해주세요
  - [v] Todo 목록을 볼 수 있습니다.
  - [v] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [v] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [v] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [v] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요
  - [v] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

<!-- <details>
<summary>토글 접기/펼치기</summary>
<div markdown="1">

안녕

</div>
</details> -->
