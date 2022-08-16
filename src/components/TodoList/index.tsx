/* eslint-disable react/require-default-props */

import React, { lazy, Suspense } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { TodoResponse, TodoTitleContentState } from '@/repository/todo';
import { useTodoApi } from '@/controller/todo/useTodoApi';
import { useInputMultiple } from '@/hooks';
import { Styles } from './styles';

import SplashScreen from '@/components/Layout/SplashScreen';

interface Props {
	todos?: TodoResponse[];
}

const TodoItem = lazy(() => import('../TodoItem'));

function TodoList({ todos }: Props) {
	const { create } = useTodoApi();
	const onCreate = ({ title, content }: TodoTitleContentState) =>
		create.mutate({ title, content });

	const [{ title, content }, onChange] = useInputMultiple({
		title: '',
		content: '',
	});
	return (
		<Styles.Warp>
			<Styles.Header>
				<Typography variant="h4" textAlign="center" mb={2}>
					오늘은 어떤 일을 할까요?
				</Typography>
			</Styles.Header>
			<Styles.ItemAddContainer>
				<TextField fullWidth label="제목" name="title" onChange={onChange} />
				<TextField
					multiline
					maxRows={4}
					label="내용"
					placeholder="조금 더 자세히 계획 해봐요!"
					name="content"
					onChange={onChange}
				/>
				<Button
					variant="contained"
					onClick={() => onCreate({ title, content })}
				>
					할 일을 추가 해보아요
				</Button>
			</Styles.ItemAddContainer>
			<Suspense fallback={<SplashScreen />}>
				<Styles.ItemContainer gap={2} maxHeight="500px" overflow="scroll">
					{Array.isArray(todos) &&
						todos.map(todo => <TodoItem key={todo.id} item={todo} />)}
				</Styles.ItemContainer>
			</Suspense>
		</Styles.Warp>
	);
}

export default React.memo(TodoList);
