import React from 'react';
import { Typography, Container, Input } from '@mui/material';
import { useLocation, useOutletContext } from 'react-router-dom';
import { TodoIdState, TodoTitleContentIdState } from '@/repository/todo';

interface TodoUpdateState {
	id: string;
	content: string;
	title: string;
	isNotModify: boolean;
	onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}
function Detail() {
	const { id, content, title, isNotModify, onChange } =
		useOutletContext<TodoUpdateState>();
	const location = useLocation();
	const state = location.state as TodoIdState;
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
