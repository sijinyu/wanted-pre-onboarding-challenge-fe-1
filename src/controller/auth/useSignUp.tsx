/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import authRepository, { AuthResponse, UserState } from '@/repository/auth';
import { auth } from '@/common/utils';

const { emailValidate, passwordValidate } = auth;

export const useSignUp = ({ email, password }: UserState) => {
	const [isValidate, setIsValidate] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		setIsValidate(emailValidate(email) && passwordValidate(password));
	}, [email, password]);

	return {
		signUp: useMutation<AuthResponse, Error, UserState>(authRepository.signUp, {
			onSuccess: () => {
				navigate('/auth/signIn', { replace: true });
			},
		}),
		isValidate,
	};
};
