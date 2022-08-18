/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { QueryClientProvider } from 'react-query';
import Router from '@/routers';
import { queryClient } from '@/common/utils/reactQuery';
import Modals from './components/Modals';

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Modals />
			<Router />
		</QueryClientProvider>
	);
}

export default App;
