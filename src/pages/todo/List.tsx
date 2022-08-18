import React from 'react';
import Container from '@mui/material/Container';
import TodoList from '@/components/Todo/TodoList';
import CustomContainer from '@/components/Layout/Container';

export default function List() {
	return (
		<CustomContainer maxWidth="sm">
			<TodoList />
		</CustomContainer>
	);
}
