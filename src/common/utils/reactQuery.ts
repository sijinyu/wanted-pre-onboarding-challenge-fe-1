import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

export const handleInvalidateQueries = (key: string) =>
	queryClient.invalidateQueries(['todoList']);
