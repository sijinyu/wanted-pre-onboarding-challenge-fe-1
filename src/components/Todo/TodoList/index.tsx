/* eslint-disable react/require-default-props */

import React from 'react';
import { Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Styles } from './styles';
import TodoItem from '../TodoItem';
import TodoAdd from '@/components/Todo/TodoAdd';
import { useTodos } from '@/controller/todo/useTodos';

function TodoList() {
	const { todos } = useTodos();

	return (
		<>
			<Styles.Header>
				<Styles.HeaderTitle variant="h3">To Do List</Styles.HeaderTitle>
			</Styles.Header>
			<Styles.Warp>
				<TodoAdd />
				<Styles.ListContainer>
					<Styles.ListSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography variant="h5">{todos?.length} Task</Typography>
					</Styles.ListSummary>

					<Styles.ListDetail>
						{Array.isArray(todos) &&
							todos.map(todo => <TodoItem key={todo.id} item={todo} />)}
					</Styles.ListDetail>
				</Styles.ListContainer>
			</Styles.Warp>
		</>
	);
}

export default TodoList;
