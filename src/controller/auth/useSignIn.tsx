import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import authRepository, { AuthResponse, UserState } from '@/repository/auth';
import { localStorage, auth } from '@/common/utils';

const { emailValidate, passwordValidate } = auth;

export const useSignIn = ({ email, password }: UserState) => {
	const [isValidate, setIsValidate] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		setIsValidate(emailValidate(email) && passwordValidate(password));
	}, [email, password]);

	return {
		signIn: useMutation<AuthResponse, Error, UserState>(authRepository.signIn, {
			onSuccess: (response: AuthResponse) => {
				const {
					data: { token },
				} = response;
				localStorage.setLocalStorage('token', token);
				navigate('/', { replace: true });
			},
		}),
		isValidate,
	};
};
