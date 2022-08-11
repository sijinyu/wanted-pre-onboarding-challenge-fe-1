import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import React from 'react';

function LayoutRoute() {
	return (
		<Container>
			<Outlet />
		</Container>
	);
}
export default LayoutRoute;
