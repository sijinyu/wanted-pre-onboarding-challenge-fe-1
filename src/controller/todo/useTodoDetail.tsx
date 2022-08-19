import { useQuery } from 'react-query';
import todoRepository from '@/repository/todo';
import { handleInvalidateQueries } from '@/common/utils/reactQuery';
import { Todo } from '@/constant';

const { Key } = Todo;

export const useTodoDetail = (id: string) => {
	const { data, ...queryResult } = useQuery([Key.todoById, id], () =>
		todoRepository.getById(id),
	);
	return {
		...queryResult,
		todoDetail: data,
	};
};
