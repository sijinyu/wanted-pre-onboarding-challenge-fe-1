/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import authRepository, { AuthResponse } from '@/repository/auth';
import { IUserState } from '@/pages/auth/types';
import { auth } from '@/common/utils';

const { emailValidate, passwordValidate } = auth;

export const useSignUp = ({ email, password }: IUserState) => {
	const [isValidate, setIsValidate] = useState(true);
	const [message, setMessage] = useState('');

	const navigate = useNavigate();

	useEffect(() => {
		setIsValidate(emailValidate(email) && passwordValidate(password));
	}, [email, password]);

	return {
		signUp: useMutation<AuthResponse, Error, IUserState>(
			authRepository.signUp,
			{
				onSuccess: (response: AuthResponse) => {
					navigate('/auth/signIn', { replace: true });
				},
				onError: error => {
					if (error instanceof AxiosError) {
						setMessage(error.response?.data.details || error.message);
					}
				},
			},
		),
		message,
		isValidate,
	};
};
