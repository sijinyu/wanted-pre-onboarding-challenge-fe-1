import { QueryClient } from 'react-query';
import { useApiError } from '@/common/utils/hooks/useApiError';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			onError: useApiError,
			retry: 0,
			suspense: true,
			useErrorBoundary: true,
		},
		mutations: {
			onError: useApiError,
		},
	},
});

export const handleInvalidateQueries = (key: string | string[]) => {
	queryClient.invalidateQueries(key);
};
export const handleAllInvalidateQueries = () => {
	queryClient.invalidateQueries();
};

export const handleSetQueryData = <T>(key: string[], response: T) => {
	queryClient.setQueryData(key, response);
};
