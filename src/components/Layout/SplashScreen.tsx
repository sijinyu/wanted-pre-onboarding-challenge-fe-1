import React from 'react';
import { Box, styled } from '@mui/material';
import { CircleRounded } from '@mui/icons-material';

const StyleSplash = styled(Box)(({ theme, ...props }) => ({
	position: 'absolute',
	content: "''",
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100vw',
	height: '100vh',
}));

export default function SplashScreen() {
	return (
		<StyleSplash>
			<CircleRounded />
		</StyleSplash>
	);
}
