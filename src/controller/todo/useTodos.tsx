import { useMutation, useQuery } from 'react-query';
import { AxiosError } from 'axios';
import todoRepository, {
	TodoIdState,
	TodoResponse,
	TodoTitleContentIdState,
	TodoTitleContentState,
} from '@/repository/todo';
import {
	handleInvalidateQueries,
	handleSetQueryData,
} from '@/common/utils/reactQuery';
import { Todo } from '@/constant';

const { Key } = Todo;

export const useTodos = () => {
	const { data, ...queryResult } = useQuery([Key.todos], todoRepository.getAll);
	const createTodo = useMutation<
		{ data: TodoResponse },
		AxiosError,
		TodoTitleContentState
	>(todoRepository.create, {
		onSuccess: () => handleInvalidateQueries(Key.todos),
	}).mutate;

	const updateTodo = useMutation<
		{ data: TodoResponse },
		AxiosError,
		TodoTitleContentIdState
	>(todoRepository.update, {
		onSuccess: response => {
			handleSetQueryData<TodoResponse>(
				[Key.todoById, response.data.id],
				response.data,
			);
			handleInvalidateQueries(Key.todos);
		},
	}).mutate;

	const deleteTodo = useMutation<{ data: null }, Error, TodoIdState>(
		todoRepository.delete,
		{
			onSuccess: () => handleInvalidateQueries(Key.todos),
		},
	).mutate;

	return {
		...queryResult,
		todos: data,
		createTodo,
		updateTodo,
		deleteTodo,
	};
};
