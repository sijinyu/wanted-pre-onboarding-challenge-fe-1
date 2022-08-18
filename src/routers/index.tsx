import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthLayout from './AuthLayout';

import { Auth } from '@/pages/auth';
import { Todo } from '@/pages/todo';
import { Error } from '@/pages/error';

export default function Router() {
	const { List } = Todo;
	const { SignIn, SignUp } = Auth;
	const { NotFound } = Error;

	return (
		<Routes>
			<Route element={<AuthLayout />}>
				<Route path="/" element={<List />} />
			</Route>
			<Route>
				<Route path="/auth/signIn" element={<SignIn />} />
				<Route path="/auth/signUp" element={<SignUp />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
