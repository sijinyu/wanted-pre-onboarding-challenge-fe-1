import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import { useStorageCheck } from '@/hooks';

function AuthLayout() {
	const { items } = useStorageCheck({ key: 'token' });
	const navigate = useNavigate();
	useEffect(() => {
		if (!items) {
			alert('안되여');
			navigate('/auth/signIn', { replace: true });
		}
	}, [items, navigate]);
	return (
		<Container>
			<Header token={items} />
			<Outlet />
		</Container>
	);
}
export default AuthLayout;
