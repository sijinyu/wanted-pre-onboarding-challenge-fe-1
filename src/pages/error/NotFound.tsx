import React, { useEffect, useState } from 'react';
import { Typography, Container, Button, Stack, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NotFount() {
	const navigate = useNavigate();
	const [count, setCount] = useState<number>(5);
	useEffect(() => {
		const timer = setTimeout(() => {
			setCount(prevCount => prevCount - 1);
		}, 1000);
		return () => {
			clearTimeout(timer);
		};
	}, [count]);
	if (count <= 0) navigate('/', { replace: true });
	return (
		<Container>
			<Stack
				height="100%"
				display="flex"
				alignItems="center"
				justifyContent="center"
				spacing={5}
			>
				<Box textAlign="center">
					<Typography variant="h2">페이지 찾을 수 없습니다.</Typography>
					<Typography variant="h4">
						<Typography variant="h4" color="red" component="span">
							{count}
						</Typography>
						초 뒤에 메인 페이지로 이동합니다.
					</Typography>
				</Box>
				<Button
					variant="contained"
					color="success"
					type="button"
					href="/"
					disableTouchRipple
				>
					메인으로 가기
				</Button>
			</Stack>
		</Container>
	);
}
