import { useQuery } from 'react-query';
import todoRepository, { TodoIdState, TodoResponse } from '@/repository/todo';
import { Todo } from '@/constant';

const { Key } = Todo;

export const useTodoDetail = ({ id }: TodoIdState) => {
	const { data, ...queryResult } = useQuery<{ data: TodoResponse }, Error>(
		[Key.todoById, id],
		() => todoRepository.getById({ id }),
	);

	return {
		...queryResult,
		todoDetail: data?.data,
	};
};
