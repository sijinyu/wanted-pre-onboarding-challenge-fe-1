import React from 'react';
import { Container, Input, TextField } from '@mui/material';
import { useLocation, useOutletContext } from 'react-router-dom';
import { TodoIdState } from '@/repository/todo';

interface TodoUpdateState {
	id: string;
	content: string;
	title: string;
	isNotModify: boolean;
	onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

function Detail() {
	const location = useLocation();
	const state = location.state as TodoIdState;
	const { id, content, title, isNotModify, onChange } =
		useOutletContext<TodoUpdateState>();
	if (state.id !== id) return null;
	return (
		<Container
			sx={{
				width: '100%',
				mt: 2,
				p: '20px',
				border: '1px solid #dbdbdb',
				borderRadius: '20px',
			}}
		>
			<TextField
				value={title}
				required
				fullWidth
				inputProps={{ maxLength: 25 }}
				type="text"
				onChange={onChange}
				name="title"
				disabled={isNotModify}
			/>
			<TextField
				multiline
				maxRows={4}
				value={content}
				name="content"
				fullWidth
				onChange={onChange}
				disabled={isNotModify}
			/>
		</Container>
	);
}

export default Detail;
