import React, { useEffect } from 'react';
import { Snackbar } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import { localStorage } from '@/common/utils';
import { Auth } from '@/constant';
import CustomContainer from '@/components/Layout/Container';

function AuthLayout() {
	const navigate = useNavigate();

	const authToken: any = localStorage.getLocalStorage(Auth.Key.Token);

	useEffect(() => {
		if (!authToken) {
			<Snackbar
				open
				autoHideDuration={6000}
				message={Auth.Message.TokenValid}
			/>;
			navigate('/auth/signIn', { replace: true });
		}
	}, [authToken, navigate]);
	return (
		<CustomContainer>
			<Header token={authToken} />
			<Outlet />
		</CustomContainer>
	);
}
export default AuthLayout;
