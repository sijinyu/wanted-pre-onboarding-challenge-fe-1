import React from 'react';
import Container from '@mui/material/Container';
import TodoList from '@/components/TodoList';
import SplashScreen from '@/components/Layout/SplashScreen';
import { useTodoApi } from '@/controller/todo/useTodoApi';

export default function List() {
	const { getAll } = useTodoApi();
	if (getAll.isLoading) return <SplashScreen />;
	return (
		<Container component="main" maxWidth="xs">
			{getAll.isError && <p>투드리스트를 불러오는데 실패했습니다.</p>}
			{getAll.isSuccess && <TodoList todos={getAll.data?.data} />}
		</Container>
	);
}
