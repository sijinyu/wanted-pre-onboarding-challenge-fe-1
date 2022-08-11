import { useMutation, useQuery } from 'react-query';
import todoRepository, {
	TodoIdState,
	TodoResponse,
	TodoTitleContentIdState,
	TodoTitleContentState,
} from '@/repository/todo';

export const useTodoApi = () => ({
	create: useMutation<{ data: TodoResponse }, Error, TodoTitleContentState>(
		todoRepository.create,
		{
			onSuccess: response => {
				console.log(response, '--');
			},
			onError: (error: Error) => {
				console.log(error, '--');
			},
		},
	),
	update: useMutation<{ data: TodoResponse }, Error, TodoTitleContentIdState>(
		todoRepository.create,
		{
			onSuccess: response => {
				console.log(response, '--');
			},
			onError: (error: Error) => {
				console.log(error, '--');
			},
		},
	),
	remove: useMutation<{ data: null }, Error, TodoIdState>(
		todoRepository.delete,
		{
			onSuccess: () => {},
			onError: (error: Error) => {
				console.log(error, '--');
			},
		},
	),
	getAll: useQuery<{ data: TodoResponse[] }, Error>(
		'todoList',
		todoRepository.getAll,
		{
			onSuccess: response => {
				console.log(response, '--');
			},
			onError: (error: Error) => console.log(error, '--'),
		},
	),
});
