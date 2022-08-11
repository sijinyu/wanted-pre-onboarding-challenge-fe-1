import React from 'react';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import { useStorageCheck } from '@/hooks';

function AuthLayout() {
	const { items } = useStorageCheck({ key: 'token' });
	return (
		<Container>
			<Header token={items} />
			<Outlet />
		</Container>
	);
}
export default AuthLayout;
