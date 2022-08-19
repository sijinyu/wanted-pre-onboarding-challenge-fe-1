/* eslint-disable react/prop-types */
import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { useTodoDetail } from '@/controller/todo/useTodoDetail';
import { useInputMultiple } from '@/hooks';
import { Styles } from './styles';
import { Todo } from '@/constant';

const { Key } = Todo;
interface Props {
	id: string;
	onClose: () => void;
}

function TodoDetail({ id, onClose }: Props) {
	const { todoDetail } = useTodoDetail(id);
	const handleClickCancel = () => {
		onClose();
	};
	const [{ title, content }] = useInputMultiple({
		title: todoDetail.title,
		content: todoDetail.content,
	});

	return (
		<Dialog open onClick={handleClickCancel}>
			<Styles.Wrap>
				<DialogTitle>제목 : {title}</DialogTitle>
				<DialogContent>내용 : {content}</DialogContent>
			</Styles.Wrap>
		</Dialog>
	);
}

export default TodoDetail;
