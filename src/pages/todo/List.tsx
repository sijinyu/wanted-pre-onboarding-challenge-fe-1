import React from 'react';
import Container from '@mui/material/Container';
import TodoList from '@/components/Todo/TodoList';

export default function List() {
	return (
		<Container component="main" maxWidth="md">
			<TodoList />
		</Container>
	);
}
