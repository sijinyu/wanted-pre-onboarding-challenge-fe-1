import React from 'react';
import {
	Container,
	Box,
	TextField,
	Button,
	Typography,
	Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useInputMultiple } from '@/hooks';
import { useSignIn } from '@/controller/auth/useSignIn';
import Utils from '@/common/utils/utils';

export default function SignIn() {
	const navigate = useNavigate();
	const [{ email, password }, onChange] = useInputMultiple({
		email: '',
		password: '',
	});
	const { signIn, isValidate } = useSignIn({ email, password });
	const handleSubmit = () => signIn.mutate({ email, password });

	return (
		<Container component="main" maxWidth="xs">
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					borderRadius: '20px',
					alignItems: 'center',
					background: 'white',
					padding: '20px',
					marginBottom: 2,
				}}
			>
				<Typography component="h1" variant="h5">
					로그인
				</Typography>
				<Box>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="이메일을 입력하세요."
						name="email"
						onChange={onChange}
						onKeyUp={e => Utils.enterKeyEvent(e, handleSubmit)}
						autoComplete="email"
						autoFocus
					/>
					<TextField
						type="password"
						margin="normal"
						required
						fullWidth
						id="password"
						name="password"
						label="비밀번호를 입력하세요."
						onChange={onChange}
						onKeyUp={e => Utils.enterKeyEvent(e, handleSubmit)}
					/>
					<Button
						disabled={!isValidate}
						type="submit"
						fullWidth
						onClick={handleSubmit}
						color="primary"
						variant="contained"
					>
						로그인
					</Button>
				</Box>

				<Stack width="100%" sx={{ mt: 1 }} alignItems="flex-end">
					<Button variant="contained" onClick={() => navigate('/auth/signUp')}>
						회원가입
					</Button>
				</Stack>
			</Box>
		</Container>
	);
}
