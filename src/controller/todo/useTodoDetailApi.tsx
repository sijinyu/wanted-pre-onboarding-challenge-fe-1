import { useQuery } from 'react-query';
import todoRepository, { TodoIdState, TodoResponse } from '@/repository/todo';

export const useTodoDetailApi = ({ id }: TodoIdState) => ({
	getById: useQuery<{ data: TodoResponse }, Error>(
		['todoDetail', id],
		() => todoRepository.getById({ id }),
		{
			onSuccess: response => {
				console.log(response);
			},
			onError: (error: Error) => console.log(error, '---'),
		},
	),
});
