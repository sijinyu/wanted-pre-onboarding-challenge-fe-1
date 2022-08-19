import { QueryClient } from 'react-query';
import { useApiError } from '@/common/utils/hooks/useApiError';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			retry: 0,
			// onError: useApiError,
			suspense: true,
			useErrorBoundary: true,
		},
	},
});

export const handleInvalidateQueries = (key: string | string[]) => {
	queryClient.invalidateQueries(key);
};
export const handleAllInvalidateQueries = () => {
	queryClient.invalidateQueries();
};
