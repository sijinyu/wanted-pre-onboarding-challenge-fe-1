/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/require-default-props */

import React, { useEffect } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useQueryClient } from 'react-query';
import { useTodoApi } from '@/controller/todo/useTodoApi';
import TodoItem from '../TodoItem';
import { useInputMultiple } from '@/hooks';
import { Styles } from './styles';
import {
	TodoIdState,
	TodoResponse,
	TodoTitleContentIdState,
	TodoTitleContentState,
} from '@/repository/todo';

interface TodoListProps {
	todos?: TodoResponse[];
}

function TodoList({ todos }: TodoListProps) {
	const { create, update, remove } = useTodoApi();
	const queryClient = useQueryClient();
	const onCreate = ({ title, content }: TodoTitleContentState) =>
		create.mutate({ title, content });
	const onUpdate = ({ id, title, content }: TodoTitleContentIdState) =>
		update.mutate({ id, title, content });
	const onDelete = (id: TodoIdState) => {
		remove.mutate(id);
	};

	useEffect(() => {
		if (remove.isSuccess) {
			queryClient.invalidateQueries(['todoList']);
		}
	}, [remove.isSuccess]);
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
			<Styles.ItemContainer gap={2} maxHeight="500px" overflow="scroll">
				{Array.isArray(todos) &&
					todos?.map(todo => (
						<TodoItem
							key={todo.id}
							item={todo}
							onUpdate={onUpdate}
							onDelete={onDelete}
						/>
					))}
			</Styles.ItemContainer>
		</Styles.Warp>
	);
}

export default React.memo(TodoList);
