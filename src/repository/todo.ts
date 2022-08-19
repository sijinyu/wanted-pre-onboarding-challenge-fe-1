import { AxiosResponse } from 'axios';
import Api from '@/common/api';

const todos = `todos`;

type StringOrNumber = string | number;
interface TodoBaseState {
	title: StringOrNumber;
	content: StringOrNumber;
}
export type TodoTitleContentState = TodoBaseState;
export interface TodoTitleContentIdState extends TodoBaseState {
	id: string;
}
export interface TodoIdState {
	id: string;
}
export interface TodoResponse extends TodoBaseState {
	id: string;
	createAt: string;
	updateAt: string;
}

const todoRepository = {
	getAll: async () => (await Api.get(todos)).data.data,
	getById: async (id: string) => (await Api.get(`${todos}/${id}`)).data.data,
	update: async ({
		id,
		...param
	}: TodoTitleContentIdState): Promise<{ data: TodoResponse }> =>
		(await Api.put(`${todos}/${id}`, param)).data,

	delete: async ({ id }: TodoIdState): Promise<{ data: null }> => {
		const { data } = await Api.delete<{ data: null }>(`${todos}/${id}`);
		return data;
	},
	create: async ({
		title,
		content,
	}: TodoTitleContentState): Promise<{ data: TodoResponse }> => {
		const { data } = await Api.post<{ data: TodoResponse }>(`${todos}`, {
			title,
			content,
		});

		return data;
	},
};

export default todoRepository;
