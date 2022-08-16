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
	getAll: async (): Promise<{ data: TodoResponse[] }> => {
		const { data } = await Api.get<{ data: TodoResponse[] }>(todos);
		return data;
	},
	getById: async (id: TodoIdState): Promise<{ data: TodoResponse }> => {
		const { data } = await Api.get<{ data: TodoResponse }>(`${todos}/${id}`);
		return data;
	},
	update: async ({
		id,
		...param
	}: TodoTitleContentIdState): Promise<{ data: TodoResponse }> => {
		const { data } = await Api.put<{ data: TodoResponse }>(
			`${todos}/${id}`,
			param,
		);
		return data;
	},
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
