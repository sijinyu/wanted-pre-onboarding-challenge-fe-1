import axios from 'axios';
import { localStorage } from '@/common/utils';
import { Auth } from '@/constant';

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
			const tokenExpiration = status === 401;
			if (tokenExpiration) {
				alert(
					Auth.Message.TokenValid,
				); /* 얼럿 없애기 portal를 사용한 modal을 만들지 , mui snackBar로 할지 고민 아니? 일단 잠이오기 때문에 잔다. */
				localStorage.removeLocalStorage('token');
				window.location.href = `/auth/signIn`;
			}
		} catch (e) {
			console.log('API.interceptors.response.use', e);
		}
		return Promise.reject(error);
	},
);

export default Api;
