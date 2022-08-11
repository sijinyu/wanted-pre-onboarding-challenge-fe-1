/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { useMutation, useQuery } from 'react-query';
import { Box } from '@mui/material';
import TodoList from '@/components/TodoList';
import SplashScreen from '@/components/Layout/SplashScreen';
import { useTodoApi } from '@/controller/todo/useTodoApi';
import {
	TodoIdState,
	TodoTitleContentIdState,
	TodoTitleContentState,
} from '@/repository/todo';

export default function List() {
	const [refetch, setRefetch] = useState(false);
	const { create, remove, getAll, update } = useTodoApi();
	const onCreate = ({ title, content }: TodoTitleContentState) =>
		create.mutate({ title, content });
	const onUpdate = ({ id, title, content }: TodoTitleContentIdState) =>
		update.mutate({ id, title, content });
	const onDelete = (id: TodoIdState) => remove.mutate(id);

	const list = getAll.data?.data;
	if (getAll.isLoading) return <SplashScreen />;
	return (
		<Container component="main" maxWidth="xs">
			<Box display="flex">
				{getAll.isError && <p>투드리스트를 불러오는데 실패했습니다.</p>}
				{getAll.isSuccess && (
					<TodoList
						todos={list}
						onCreate={onCreate}
						onUpdate={onUpdate}
						onDelete={onDelete}
					/>
				)}
			</Box>
		</Container>
	);
}
