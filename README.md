# 🚀 원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제 Todo App


## 📚 STACKS
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

### 로그인
![login](https://user-images.githubusercontent.com/59022492/185672890-18f53325-de30-46ed-8dc1-784bb33a898c.gif)
### Todo
![todo](https://user-images.githubusercontent.com/59022492/185673680-3e42b252-e0a5-4c81-8452-017c2cb95eb7.gif)
### Error
![errorboundary](https://user-images.githubusercontent.com/59022492/185673643-1e2877ae-c35f-4fb9-8ab0-3b963a0d49c6.gif)
<!-- ![스크린샷 2022-08-20 오전 2 27 45](https://user-images.githubusercontent.com/59022492/185674778-1780668b-3dd2-467b-9853-d3eb231e5fb5.png) -->

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3f706a2e-dc05-482e-9fe9-f7ab1c4ce1c3/Untitled.png)

TodoList를 위와 같이 감싸줬습니다. QueryErrorResetBoundary로 Todos요청시 에러가 발생하면

빈화면이 아닌 에러메세지와 재요청 버튼을 보여줘 사용자경험을 향상 시켰습니다.

### 설치, 환경설정 및 실행방법

1. 설치
백엔드 : [https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-ap](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api)
2. 환경설정
.env 파일 생성 REACT_APP_API_URL = “서버”,
코드 규칙 : eslint, prettier (airbnb config),
node : 18.6.0
3. 실행방법

```jsx
npm install 

npm start
```

---

### 구현 요구 사항 목록

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
    - [V] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
    - [v] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
    - [v] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
    - [] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요
    - [v] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다
    

---

### 사용한 프레임워크 및 라이브러리 설명

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/05a37c9a-726a-43a2-8f94-d3e5ca1fe399/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3767df5f-4b82-4216-8362-0e55852984b2/Untitled.png)

**emotion** : mui지원, 스타일 컴포넌트/

**mui** : UI 컴포넌트 모음 대중적이고 가장
손에 익어서 사용

**axios** : 비동기 http통신 라이브러리

**react-error-boundary** : 에러 선언형 처리

**react-query** : 서버 데이터 캐싱, 서버 상태 값
전역 관리 , 에러 처리 용이 등 다양한 기능 제공

**prettier** : 코드포멧터

**react-toastify** : 에러 처리 alert보다 사용자경험 
향상

**zustand** : 전역상태관리툴 ,간편함, 
사용해보고 싶었습니다

**craco** : eject없이 cra config 설정 라이브러리 path alias 설정

**eslint** : 정적 코드 분석 도구

**eslint-config-airbnb** : airbnb의 코드스타일 가이드

**eslint-config-prettier** : eslint와 통합하기위해 설치 eslint 규칙을 벗어난 코드 오류 prettier로 포맷

---

## 폴더 구조

├── @types
│   └── index.ts
├── App.tsx
├── assets
│   └── images
│       └── main_bg.jpg
├── common
│   ├── api
│   │   └── index.ts
│   ├── images
│   │   └── index.ts
│   └── utils
│       ├── auth.ts
│       ├── hooks
│       │   └── useApiError.jsx
│       ├── index.ts
│       ├── localStorage.ts
│       ├── reactQuery.ts
│       └── theme.ts
├── components
│   ├── Error
│   │   └── index.tsx
│   ├── HOC
│   │   └── Button
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── Layout
│   │   ├── Container.tsx
│   │   ├── Header.tsx
│   │   └── SplashScreen.tsx
│   ├── Modals
│   │   └── index.tsx
│   └── Todo
│       ├── Modal
│       │   ├── TodoDetail
│       │   │   ├── index.tsx
│       │   │   └── styles.ts
│       │   └── TodoModify
│       │       ├── index.tsx
│       │       └── styles.ts
│       ├── TodoAdd
│       │   ├── index.tsx
│       │   └── styles.ts
│       ├── TodoItem
│       │   ├── index.tsx
│       │   └── styles.ts
│       └── TodoList
│           ├── index.tsx
│           └── styles.ts
├── constant
│   ├── auth.ts
│   ├── index.ts
│   └── todo.ts
├── controller
│   ├── auth
│   │   ├── useSignIn.tsx
│   │   └── useSignUp.tsx
│   └── todo
│       ├── useTodoDetail.tsx
│       └── useTodos.tsx
├── hooks
│   ├── index.ts
│   ├── useInput.tsx
│   └── useInputMultiple.tsx
├── index.css
├── index.tsx
├── logo.svg
├── pages
│   ├── auth
│   │   ├── SignIn.tsx
│   │   ├── SignUp.tsx
│   │   └── index.ts
│   ├── error
│   │   ├── NotFound.tsx
│   │   └── index.ts
│   └── todo
│       ├── List.tsx
│       └── index.ts
├── repository
│   ├── auth.ts
│   └── todo.ts
├── routers
│   ├── AuthLayout.tsx
│   ├── LayoutRoute.tsx
│   └── index.tsx
└── store
├── index.ts
└── useModalStore.ts

- @types : 써드 파티 라이브러리 타입 설정들
- assets : 이미지, 비디오, json파일 등
- common : 종속되지않고 공통으로 사용되는 것들 (ex axios,utils …)
- components : 컴포넌트들
- constant : 변수 이름을 명확하게 지정하기 위한 상수 파일들
- controller :  비즈니스 로직 커스텀훅들
- hooks : 커스텀훅들
- pages : 라우팅되는 컴포넌트들
- repository : 백엔드에 접근 하는 비동기 통신 파일들
- store : 전역상태 파일들

자바 스프링 프레임워크 디렉토리를 많이 참조했습니다.

### 고민했던 부분

디렉토리 구조 , spring 프레임 워크 구조를 조금 참고 삼아
폴더를 나눴지만 정해진게 없다보니 항상 고민 하게 됍니다.

컴포넌트 분리 관점에 대한 고민

현재는 부모컴포넌트에서 이벤트핸들링을 하는게 아니라 최소한의 props만 전달 해주고
각 컴포넌트단에서 데이터를 관리할수 있게 데이터관점에서 분리하였습니다.

Modal이 늘어날시 사용되는 로직들 (onOpen, onClose, onSubmit등)을 공통으로
관리하려 했습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0f6094f9-0d34-4f43-bc2c-122b8623e30c/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/63abcfc8-be8f-4e89-8245-a1d7cbd0d2dc/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b2b59999-56fc-44d6-8ada-4e10dace9b18/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/67268a2a-79b6-45a4-b136-9b8513a53f06/Untitled.png)

openModal(컴포넌트모달 , props) → 배열에들어가있는 모달들 modals컴포넌트에서 관리 → app.tsx내에 <Modals> 선언

### I learned

**뷰**와 **비즈니스로직** 분리가 조금 더 명확해졌습니다.

어떻게(How)가 아닌 어떤(What) UI로 구성하는 것

**How** - 어떻게 데이터를 바꿀까? 언제 데이터를 바꿀까?

**What** - 무슨 데이터를 바꿀까? 어디에 값을 보여줄까?

**클린 코드**는 짧은 코드가 아니다 오히려 컴포넌트의 명확성을 떨어 트릴 수 있다.

**클린 코드**란 원하는 로직을 빠르게 찾을 수 있는 코드

**타입스크립트**를 숙련도를 올릴 수 있었습니다.

코드를 **공부**하는 법 **분석**하는 법을 배울 수 있었습니다.

React-Query를 활용하는 법을 자세히 배울 수 있었습니다.

### **프리온보딩 챌린지 후기**

사수없이 혼자 개발하고있어 막막할때도 있었고 방식에대한 고민도 많았는데
방향이 명확해졌습니다. 정말 많이 배울 수 있는 계기가 되었고 
막혔던 속이 풀리는 기분도 많았습니다.
밀도있는 강의와 중간중간 위트있는 개그로 즐거웠고
시간이 오바되는게 오히려 좋았습니다.
끝으로 좋은 강사님과 개발자님을 알게 되었습니다 감사합니다!
