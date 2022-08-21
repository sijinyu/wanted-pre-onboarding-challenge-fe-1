/* eslint-disable no-return-assign */
import axios from 'axios';
import { toast } from 'react-toastify';
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
		const tokenMissing = error.response?.data?.details === 'Token is missing';
		if (tokenExpiration || tokenMissing) {
			toast.error(Auth.Message.TokenValid, {
				onClose: () => (window.location.href = `/auth/signIn`),
			});
			localStorage.removeLocalStorage('token');
		}
		return Promise.reject(error);
	},
);

export default Api;
