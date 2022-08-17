import { useMutation, useQuery } from 'react-query';
import todoRepository, {
	TodoIdState,
	TodoResponse,
	TodoTitleContentIdState,
	TodoTitleContentState,
} from '@/repository/todo';
import { handleInvalidateQueries } from '@/common/utils/reactQuery';
import { Todo } from '@/constant';

const { Key } = Todo;

export const useTodos = () => {
	const { data, ...queryResult } = useQuery(Key.todos, todoRepository.getAll);
	const createTodo = useMutation<
		{ data: TodoResponse },
		Error,
		TodoTitleContentState
	>(todoRepository.create, {
		onSuccess: () => handleInvalidateQueries(Key.todos),
	}).mutate;
	const updateTodo = useMutation<
		{ data: TodoResponse },
		Error,
		TodoTitleContentIdState
	>(todoRepository.update, {
		onSuccess: () => handleInvalidateQueries(Key.todos),
	}).mutate;
	const deleteTodo = useMutation<{ data: null }, Error, TodoIdState>(
		todoRepository.delete,
		{
			onSuccess: () => handleInvalidateQueries(Key.todos),
		},
	).mutate;

	return {
		...queryResult,
		todos: data?.data,
		createTodo,
		updateTodo,
		deleteTodo,
	};
};
