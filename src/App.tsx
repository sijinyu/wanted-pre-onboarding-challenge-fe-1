/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { QueryClientProvider } from 'react-query';

import { queryClient } from '@/common/utils/reactQuery';
import Router from '@/routers';
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
