/* eslint-disable react/require-default-props */

import React, { lazy, Suspense } from 'react';
import { Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Styles } from './styles';
import SplashScreen from '@/components/Layout/SplashScreen';
import TodoAdd from '@/components/Todo/TodoAdd';
import { useTodos } from '@/controller/todo/useTodos';

const TodoItem = lazy(() => import('../TodoItem'));

function TodoList() {
	const { todos } = useTodos();
	return (
		<>
			<Styles.Header>
				<Styles.HeaderTitle variant="h3">To Do List</Styles.HeaderTitle>
			</Styles.Header>
			<Styles.Warp>
				<TodoAdd />
				<Suspense fallback={<SplashScreen />}>
					<Styles.ListContainer>
						<Styles.ListSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography variant="h5" color="white">
								{todos?.length} Task
							</Typography>
						</Styles.ListSummary>
						<Styles.ListDetail>
							{Array.isArray(todos) &&
								todos.map(todo => <TodoItem key={todo.id} item={todo} />)}
						</Styles.ListDetail>
					</Styles.ListContainer>
				</Suspense>
			</Styles.Warp>
		</>
	);
}

export default TodoList;
