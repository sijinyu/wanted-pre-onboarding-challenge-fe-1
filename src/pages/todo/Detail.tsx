import React from 'react';
import { Container, Input } from '@mui/material';
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
			<span>제목</span>
			<Input
				value={title}
				multiline
				maxRows={4}
				fullWidth
				onChange={onChange}
				name="title"
				readOnly={isNotModify}
				disableUnderline
			/>
			<span>내용</span>
			<Input
				multiline
				value={content}
				name="content"
				fullWidth
				onChange={onChange}
				readOnly={isNotModify}
				disableUnderline
			/>
		</Container>
	);
}

export default Detail;
