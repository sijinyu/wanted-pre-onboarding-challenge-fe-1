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
				// TODO :: 백엔드 에러가 성공으로 들어오기 때문에. 에러처리하기
				handleInvalidateQueries(todoListKey);
			},
		},
	),
	update: useMutation<{ data: TodoResponse }, Error, TodoTitleContentIdState>(
		todoRepository.update,
		{
			onSuccess: () => {
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
