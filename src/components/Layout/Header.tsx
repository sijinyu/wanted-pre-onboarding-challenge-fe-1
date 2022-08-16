import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { localStorage } from '@/common/utils';

function Header({ token }: any) {
	const navigate = useNavigate();
	const login = () => navigate('/auth/signIn');
	const logOut = () => {
		localStorage.removeLocalStorage('token');
		alert('로그아웃이 완료 되었습니다.');
		navigate('/auth/signIn');
	};

	const authLabel = () => (token ? '로그아웃' : '로그인');
	const authButton = () => (token ? logOut() : login());

	return (
		<Box component="header" textAlign="right">
			<Button
				type="button"
				onClick={() => authButton()}
				variant="text"
				disableRipple
			>
				{authLabel()}
			</Button>
		</Box>
	);
}

export default React.memo(Header);
