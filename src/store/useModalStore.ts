import { DialogProps } from '@mui/material';
import React, { SetStateAction, useMemo, useState } from 'react';
import create from 'zustand';

export interface ModalsProps {
	id: number;
	Component: any;
	props: DialogProps[] | any;
}

interface ModalActions {
	openModal: ({ Component, ...props }: ModalsProps) => void;
	closeModal: ({ id, Component }: ModalsProps) => void;
}
interface GlobalState extends ModalActions {
	openedModals: ModalsProps[];
}
export const useModalStore = create<GlobalState>(set => ({
	openedModals: [],
	openModal: ({ Component, ...props }) => {
		set(state => ({
			openedModals: [
				...state.openedModals,
				{
					id: state.openedModals.length + 1,
					Component,
					props,
				} as unknown as ModalsProps,
			],
		}));
	},
	closeModal: ({ id }) => {
		set(state => ({
			openedModals: state.openedModals.filter(
				(modal: ModalsProps) => modal.id !== id,
			),
		}));
	},
}));
