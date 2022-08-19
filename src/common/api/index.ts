import axios from 'axios';
import { localStorage } from '@/common/utils';
import { Auth } from '@/constant';
import useAlert from '@/hooks/useAlert';

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
		const token = await localStorage.getLocalStorage('token');
		if (token) {
			originalRequest.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	error => Promise.reject(error),
);

Api.interceptors.response.use(
	response => response,
	error => {
		const {
			response: { status },
		} = error;
		const tokenExpiration = status === 401;
		if (tokenExpiration) {
			useAlert(Auth.Message.TokenValid);
			localStorage.removeLocalStorage('token');
			window.location.href = `/auth/signIn`;
		}
		return Promise.reject(error);
	},
);

export default Api;
