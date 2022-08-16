import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import { localStorage } from '@/common/utils';

function AuthLayout() {
	const navigate = useNavigate();
	const auth: string = localStorage.getLocalStorage('token');
	useEffect(() => {
		if (!auth) {
			alert('토큰이 유효하지 않습니다.');
			navigate('/auth/signIn', { replace: true });
		}
	}, [auth, navigate]);
	return (
		<Container>
			<Header token={auth} />
			<Outlet />
		</Container>
	);
}
export default AuthLayout;
