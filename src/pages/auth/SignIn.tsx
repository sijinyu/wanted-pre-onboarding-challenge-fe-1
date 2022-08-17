import React from 'react';
import {
	Container,
	Box,
	TextField,
	Button,
	Typography,
	Stack,
	Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useInputMultiple } from '@/hooks';
import { useSignIn } from '@/controller/auth/useSignIn';

export default function SignIn() {
	const navigate = useNavigate();
	const [{ email, password }, onChange] = useInputMultiple({
		email: '',
		password: '',
	});
	const { signIn, message, isValidate } = useSignIn({ email, password });
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
						autoComplete="email"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="비밀번호를 입력하세요."
						type="password"
						id="password"
						onChange={onChange}
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

				{message && (
					<Alert sx={{ width: '100%', mt: 1 }} severity="error">
						{message}
					</Alert>
				)}

				<Stack width="100%" sx={{ mt: 1 }} alignItems="flex-end">
					<Button variant="contained" onClick={() => navigate('/auth/signUp')}>
						회원가입
					</Button>
				</Stack>
			</Box>
		</Container>
	);
}
