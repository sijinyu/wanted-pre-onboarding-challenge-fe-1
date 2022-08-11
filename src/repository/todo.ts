import Api from '@/common/api';

const todos = `todos`;

export interface TodoTitleContentState {
	title: string;
	content: string;
}
export interface TodoTitleContentIdState {
	id: string;
	title: string;
	content: string;
}
export interface TodoIdState {
	id: string;
}
export interface TodoResponse {
	title: string;
	content: string;
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
