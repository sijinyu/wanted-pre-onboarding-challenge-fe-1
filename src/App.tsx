import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from '@/routers';

function App() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
			mutations: {},
		},
	});

	return (
		<QueryClientProvider client={queryClient}>
			<Router />
		</QueryClientProvider>
	);
}

export default App;
