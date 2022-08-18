/* eslint-disable react/prop-types */
import React from 'react';
import { Dialog, TextField, DialogTitle, DialogContent } from '@mui/material';

import { useTodoDetail } from '@/controller/todo/useTodoDetail';
import { useInputMultiple } from '@/hooks';
import { Styles } from './styles';

interface Props {
	id: string;
	onClose: () => void;
	onSubmit: () => void;
}

function TodoDetail({ id, onClose, onSubmit }: Props) {
	const { todoDetail } = useTodoDetail(id);

	const handleClickSubmit = () => {
		onSubmit();
	};
	const handleClickCancel = () => {
		onClose();
	};
	const [{ title, content }] = useInputMultiple({
		title: todoDetail?.title,
		content: todoDetail?.content,
	});

	return (
		<Dialog open onClick={handleClickCancel}>
			<Styles.Wrap>
				<DialogTitle>{title}</DialogTitle>
				<DialogContent>{content}</DialogContent>
			</Styles.Wrap>
		</Dialog>
	);
}

export default TodoDetail;
