import React, { useState } from 'react';
import { TextField, Typography } from '@mui/material';
import Button from '@/components/HOC/Button';
import { TodoTitleContentState } from '@/repository/todo';
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
				<TextField fullWidth label="제목" name="title" onChange={onChange} />
				<TextField
					multiline
					maxRows={4}
					label="내용"
					placeholder="조금 더 자세히 계획 해봐요!"
					name="content"
					onChange={onChange}
				/>
			</Styles.TopContainer>
			<Styles.ButtonContaier>
				<Button onClick={() => createTodo({ title, content })}>
					<Typography variant="h5" color="white">
						추가
					</Typography>
				</Button>
			</Styles.ButtonContaier>
		</Styles.Wrap>
	);
}

export default React.memo(TodoAdd);
