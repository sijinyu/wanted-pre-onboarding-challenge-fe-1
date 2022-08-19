import React from 'react';
import { Alert, Button } from '@mui/material';

export default function ErrorFallBack({ error, resetErrorBoundary }: any) {
	const { response } = error;
	let message;
	let status;
	if (error.response?.data) {
		message = response?.data.details;
		status = response.status;
	} else {
		message = error.message;
	}

	return (
		<Alert severity="error">
			{message} {status && `ErrorCode : ${status}`}
			<Button variant="contained" onClick={resetErrorBoundary}>
				재요청
			</Button>
		</Alert>
	);
}
