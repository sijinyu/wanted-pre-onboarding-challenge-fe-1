import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from '@/routers';
import { queryClient } from '@/common/utils/reactQuery';

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Router />
		</QueryClientProvider>
	);
}

export default App;
