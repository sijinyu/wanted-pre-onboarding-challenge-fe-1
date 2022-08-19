import { DialogProps } from '@mui/material';
import React, { SetStateAction, useMemo, useState } from 'react';
import create from 'zustand';

export interface ModalsProps {
	id: number;
	key: number;
	Component: any;
	props: DialogProps[] | any;
}

interface ModalActions {
	openModal: ({ Component, ...props }: ModalsProps) => void;
	closeModal: (id: number) => void;
}
interface GlobalState extends ModalActions {
	openedModals: ModalsProps[];
}
export const useModalStore = create<GlobalState>(set => ({
	openedModals: [],
	openModal: ({ Component, id, ...props }) => {
		set(state => ({
			openedModals: [
				...state.openedModals,
				{
					key: state.openedModals.length + 1,
					id,
					Component,
					props,
				} as unknown as ModalsProps,
			],
		}));
	},
	closeModal: id => {
		set(state => ({
			openedModals: state.openedModals.filter(modal => modal.id !== id),
		}));
	},
}));
