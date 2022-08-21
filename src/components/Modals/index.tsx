/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { ReactElement, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryErrorResetBoundary } from 'react-query';
import { useModalStore } from '@/store';
import { ModalsProps } from '@/store/useModalStore';
import SplashScreen from '../Layout/SplashScreen';
import ErrorFallBack from '../Error';

function Modals(): any {
	// typescript에서 ReactElement 배열타입으로 안된다고 합니다. 버그
	const { openedModals, closeModal } = useModalStore();
	if (openedModals.length <= 0) return null;
	return openedModals.map((modal: ModalsProps) => {
		const { Component, props, key, id } = modal;
		const { onSubmit, ...restProps } = props;
		const onClose = () => {
			closeModal(id);
		};
		return (
			<QueryErrorResetBoundary key={`modal-${key}`}>
				{({ reset }) => (
					<ErrorBoundary onReset={reset} FallbackComponent={ErrorFallBack}>
						<Suspense fallback={<SplashScreen />}>
							<Component onClose={onClose} id={id} {...restProps} />
						</Suspense>
					</ErrorBoundary>
				)}
			</QueryErrorResetBoundary>
		);
	});
}

export default Modals;
