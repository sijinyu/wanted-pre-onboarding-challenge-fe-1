import axios from 'axios';
import { localStorage } from '@/common/utils';

const baseURL = process.env.REACT_APP_API_URL;

const Api = axios.create({
	baseURL,
	headers: {
		'Content-type': 'application/json',
	},
});

Api.interceptors.request.use(
	async config => {
		const originalRequest: any = config;
		try {
			const token = await localStorage.getLocalStorage('token');
			if (token) {
				originalRequest.headers.Authorization = `Bearer ${token}`;
			}
		} catch (e) {
			console.log('API.interceptors.reqest.use', e);
		}
		return config;
	},
	async error => error,
);

Api.interceptors.response.use(
	response => response,
	async error => {
		try {
			const {
				response: { status },
			} = error;
			const tokenExpiration = status === 400 || status === 401;
			if (tokenExpiration) {
				alert('토큰이 유효하지 않습니다. 재 로그인 해주세요.');
				localStorage.removeLocalStorage('token');
				window.location.href = `/auth/signIn`;
			}
		} catch (e) {
			console.log('API.interceptors.response.use', e);
		}
		return error;
	},
);

export default Api;
