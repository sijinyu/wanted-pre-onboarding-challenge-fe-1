import { QueryCache, QueryClient } from 'react-query';
import toast from 'react-hot-toast';
import { useApiError } from '@/common/utils/hooks/useApiError';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 0,
			onError: useApiError,
			suspense: true,
			useErrorBoundary: true,
		},
	},
});

export const handleInvalidateQueries = (key: string) =>
	queryClient.invalidateQueries([key]);
