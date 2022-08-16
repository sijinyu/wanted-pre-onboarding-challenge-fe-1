// const Key = {
// 	Token : 'token',
// } as const;

// const Message = {
// 	TokenValid : '토큰이 유효하지 않습니다.',
// } as const;

// const auth =  {
// 	Key,
// 	Message,
// } as const ;
// type Union<T> = T[keyof T];

// type Auth = Union<typeof auth>
// export default Auth;

// key로 가져다 쓰려니 왜 왜! 안되ㅏ안되는건가!

/* enum 사용의 문제
https://velog.io/@leehaeun0/typescript-enum-%EC%9D%84-union%EC%9C%BC%EB%A1%9C-%EB%B3%80%EA%B2%BD%ED%95%98%EA%B8%B0

*/

const Key = {
	Token: 'token',
};

const Message = {
	TokenValid: '토큰이 유효하지 않습니다.',
};

const Auth = {
	Key,
	Message,
};

export default Auth;
