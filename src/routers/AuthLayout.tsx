import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '@/components/Layout/Header';
import { localStorage } from '@/common/utils';
import { Auth } from '@/constant';

function AuthLayout() {
	const navigate = useNavigate();

	const authToken: any = localStorage.getLocalStorage(Auth.Key.Token);

	useEffect(() => {
		if (!authToken) {
			toast.error(Auth.Message.TokenValid);
			navigate('/auth/signIn', { replace: true });
		}
	}, [authToken, navigate]);
	return (
		<>
			<Header token={authToken} />
			<Outlet />
		</>
	);
}
export default AuthLayout;
