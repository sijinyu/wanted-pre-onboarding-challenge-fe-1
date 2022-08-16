import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
const users = `users`;

export interface AuthResponse {
	data: {
		message: string;
		token: string;
	};
}

export interface UserState {
	email: string;
	password: string;
}

const authRepository = {
	signIn: ({ email, password }: UserState): Promise<AuthResponse> =>
		axios.post(`${baseURL}/${users}/login`, { email, password }),
	signUp: ({ email, password }: UserState): Promise<AuthResponse> =>
		axios.post(`${baseURL}/${users}/create`, { email, password }),
};

export default authRepository;
