import React, { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryErrorResetBoundary } from 'react-query';
import CustomContainer from '@/components/Layout/Container';
import SplashScreen from '@/components/Layout/SplashScreen';
import ErrorFallBack from '@/components/Error';

const TodoList = lazy(() => import('@/components/Todo/TodoList'));
export default function List() {
	return (
		<CustomContainer maxWidth="sm">
			<QueryErrorResetBoundary>
				{({ reset }) => (
					<ErrorBoundary onReset={reset} FallbackComponent={ErrorFallBack}>
						<Suspense fallback={<SplashScreen />}>
							<TodoList />
						</Suspense>
					</ErrorBoundary>
				)}
			</QueryErrorResetBoundary>
		</CustomContainer>
	);
}
