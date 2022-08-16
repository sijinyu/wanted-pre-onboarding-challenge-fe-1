import { QueryClient } from 'react-query';
import { useApiError } from '@/common/utils/hooks/useApiError';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 0,
			onError: useApiError,
			suspense: true,
		},
	},
});

export const handleInvalidateQueries = (key: string) =>
	queryClient.invalidateQueries([key]);
