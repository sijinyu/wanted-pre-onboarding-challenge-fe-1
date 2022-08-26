import React from 'react';
import {
	Button,
	TextField,
	Grid,
	Box,
	Typography,
	Container,
} from '@mui/material';
import { useInputMultiple } from '@/hooks';
import { useSignUp } from '@/controller/auth/useSignUp';
import Utils from '@/common/utils/utils';

export default function SignUp() {
	const [{ email, password }, onChange] = useInputMultiple({
		email: '',
		password: '',
	});
	const { signUp, isValidate } = useSignUp({ email, password });
	const handleSubmit = () => signUp.mutate({ email, password });
	return (
		<Container component="main" maxWidth="xs">
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					padding: '20px',
					borderRadius: '20px',
					background: 'white',
				}}
			>
				<Typography component="h1" variant="h5">
					회원가입
				</Typography>
				<Box sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="email"
								label="이메일을 형식에 맞춰 입력 해주세요."
								name="email"
								onKeyUp={e => Utils.enterKeyEvent(e, handleSubmit)}
								onChange={onChange}
								autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								type="password"
								required
								fullWidth
								id="password"
								name="password"
								label="패스워드를 입력 해주세요. (8자 이상)"
								onKeyUp={e => Utils.enterKeyEvent(e, handleSubmit)}
								onChange={onChange}
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						disabled={!isValidate}
						onClick={handleSubmit}
						sx={{ mt: 3, mb: 2 }}
					>
						회원 가입
					</Button>
				</Box>
			</Box>
		</Container>
	);
}
