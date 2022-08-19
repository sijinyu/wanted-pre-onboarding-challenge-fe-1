import React from 'react';
import { TextField, Typography } from '@mui/material';
import Button from '@/components/HOC/Button';
import { useInputMultiple } from '@/hooks';
import { useTodos } from '@/controller/todo/useTodos';
import { Styles } from './styles';

function TodoAdd() {
	const { createTodo } = useTodos();

	const [{ title, content }, onChange] = useInputMultiple({
		title: '',
		content: '',
	});
	return (
		<Styles.Wrap>
			<Styles.TopContainer>
				<TextField
					fullWidth
					name="title"
					inputMode="text"
					placeholder="제목 최대(20자)"
					inputProps={{ maxLength: 20 }}
					onChange={onChange}
				/>
				<TextField
					multiline
					maxRows={4}
					placeholder="조금 더 자세히 계획 해봐요!"
					name="content"
					onChange={onChange}
				/>
			</Styles.TopContainer>
			<Styles.ButtonContaier>
				<Button
					variant="contained"
					onClick={() => createTodo({ title, content })}
				>
					<Typography variant="h5">추가</Typography>
				</Button>
			</Styles.ButtonContaier>
		</Styles.Wrap>
	);
}

export default TodoAdd;
