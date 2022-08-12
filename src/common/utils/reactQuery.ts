import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 0,
		},
	},
});

export const handleInvalidateQueries = (key: string) =>
	queryClient.invalidateQueries(['todoList']);
