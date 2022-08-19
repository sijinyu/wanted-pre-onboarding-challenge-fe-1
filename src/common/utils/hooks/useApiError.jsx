import React, { useCallback } from 'react';
import { toast } from 'react-toastify';

const commonHandler = () => console.log('공통 에러');
const defaultHandler = () => console.log('어디에도 정의되지않은 에러');
const handler400 = error => toast.error(error);
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

export const useApiError = error => {
	// 우선순위에 따른 핸들러의 선택과 실행
	const handleError = err => {
		const httpStatus = err.response.status; // HTTP Status

		switch (true) {
			case !!defaultHandlers[httpStatus]:
				defaultHandlers[httpStatus].default(
					error.response?.data?.details || error.message,
				);
				break;
			default:
				defaultHandlers.default();
		}
	};
	handleError(error);
	// // 공통 처리 로직 수행
	defaultHandlers.common();
};
