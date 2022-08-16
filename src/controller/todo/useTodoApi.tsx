import { useMutation, useQuery } from 'react-query';
import todoRepository, {
	TodoIdState,
	TodoResponse,
	TodoTitleContentIdState,
	TodoTitleContentState,
} from '@/repository/todo';
import { handleInvalidateQueries } from '@/common/utils/reactQuery';

const todoListKey = 'todoList';

export const useTodoApi = () => ({
	create: useMutation<{ data: TodoResponse }, Error, TodoTitleContentState>(
		todoRepository.create,
		{
			onSuccess: () => {
				handleInvalidateQueries(todoListKey);
			},
		},
	),
	update: useMutation<{ data: TodoResponse }, Error, TodoTitleContentIdState>(
		todoRepository.update,
		{
			onSuccess: response => {
				handleInvalidateQueries(todoListKey);
			},
		},
	),
	remove: useMutation<{ data: null }, Error, TodoIdState>(
		todoRepository.delete,
		{
			onSuccess: () => {
				handleInvalidateQueries(todoListKey);
			},
		},
	),
	getAll: useQuery<{ data: TodoResponse[] }, Error>(
		todoListKey,
		todoRepository.getAll,
	),
});
