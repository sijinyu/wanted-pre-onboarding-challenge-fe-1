/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { Suspense } from 'react';
import { useModalStore } from '@/store';
import { ModalsProps } from '@/store/useModalStore';
import SplashScreen from '../Layout/SplashScreen';

function Modals(): any {
	const { openedModals, closeModal } = useModalStore();
	if (openedModals.length <= 0) return null;
	return openedModals.map((modal: ModalsProps) => {
		const { Component, props, id } = modal;
		const { onSubmit, ...restProps } = props;
		const onClose = () => {
			closeModal(modal);
		};
		const handleSubmit = async () => {
			if (typeof onSubmit === 'function') {
				await onSubmit();
			}
			onClose();
		};
		return (
			<Suspense fallback={<SplashScreen />} key={`modal-${id}`}>
				<Component onClose={onClose} onSubmit={handleSubmit} {...restProps} />
			</Suspense>
		);
	});
}

export default Modals;
