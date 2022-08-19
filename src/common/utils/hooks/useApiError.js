import { useCallback } from 'react';

const commonHandler = () => console.log('공통 처리 로직 필요');
const defaultHandler = () => console.log('어디에도 정의되지않은 에러');
const handler400 = () => console.log('--');
const handler401 = () => console.log('401 처리 로직 필요');
const handler403 = () => console.log('403 처리 로직 필요');
const handler500 = () => console.log('500 처리 로직 필요');

const defaultHandlers = {
	common: commonHandler,
	default: defaultHandler,
	400: {
		default: handler400,
	},
	401: {
		default: handler401,
	},
	403: {
		default: handler403,
	},
	500: {
		default: handler500,
	},
};
// 매개변수 handlers: 컴포넌트에서 재정의한 핸들러 모음 매개변수로 커스텀 가능
export const useApiError = handlers => {
	// 우선순위에 따른 핸들러의 선택과 실행
	const handleError = error => {
		const httpStatus = error.response.status; // HTTP Status
		switch (true) {
			case handlers && handlers[httpStatus]:
				handlers[httpStatus].default();
				break;
			case !!defaultHandlers[httpStatus]:
				defaultHandlers[httpStatus].default();
				break;
			default:
			// 	defaultHandlers.default();
		}
	};
	handleError(handlers);

	// // 공통 처리 로직 수행
	// defaultHandlers.common();
};
