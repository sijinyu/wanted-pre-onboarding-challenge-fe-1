/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';

import { Outlet } from 'react-router-dom';
import TodoItem from '../TodoItem';
import { useInputMultiple } from '@/hooks';
import { useTodoDetailApi } from '@/controller/todo/useTodoDetailApi';

interface TodoList {
	todos?: any;
	onCreate?: any;
	onUpdate?: any;
	onDelete?: any;
	children?: React.ReactNode;
}
function TodoList({ todos, onCreate, onUpdate, onDelete, children }: TodoList) {
	const [{ title, content }, onChange] = useInputMultiple({
		title: '',
		content: '',
	});
	return (
		<Box>
			<Typography variant="h2" textAlign="center" mt={10}>
				TodoList
			</Typography>
			<Stack spacing={2} mb={3}>
				<TextField fullWidth label="제목" name="title" onChange={onChange} />
				<TextField fullWidth label="내용" name="content" onChange={onChange} />
				<Button
					variant="contained"
					onClick={() => onCreate({ title, content })}
				>
					추가
				</Button>
			</Stack>
			<Grid container>
				<Grid item xs={12}>
					{Array.isArray(todos) &&
						todos?.map(todo => (
							<TodoItem
								key={todo.id}
								item={todo}
								onUpdate={onUpdate}
								onDelete={onDelete}
							/>
						))}
				</Grid>
			</Grid>
			<Outlet />
		</Box>
	);
}

export default React.memo(TodoList);
