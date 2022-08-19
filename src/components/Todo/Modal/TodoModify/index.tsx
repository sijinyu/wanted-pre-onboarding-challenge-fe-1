/* eslint-disable react/prop-types */
import React from 'react';
import { Dialog, TextField, Typography } from '@mui/material';
import { useTodos } from '@/controller/todo/useTodos';
import { useTodoDetail } from '@/controller/todo/useTodoDetail';
import { useInputMultiple } from '@/hooks';
import { Styles } from './styles';
import Button from '@/components/HOC/Button';

interface Props {
	id: string;
	onClose: () => void;
}

function TodoModify({ id, onClose }: Props) {
	const { todoDetail } = useTodoDetail(id);
	const { updateTodo } = useTodos();
	const [{ title, content }, onChange] = useInputMultiple({
		title: todoDetail?.title,
		content: todoDetail?.content,
	});

	const handleClickCancel = () => {
		onClose();
	};
	const handleClickSubmit = () => {
		updateTodo({ id, title, content });
		handleClickCancel();
	};

	return (
		<Dialog open>
			<Styles.Wrap>
				<Styles.Content>
					<Typography variant="subtitle1">제목</Typography>
					<TextField
						fullWidth
						name="title"
						inputMode="text"
						value={title}
						onClick={e => e.stopPropagation()}
						placeholder="제목 최대(20자)"
						inputProps={{ maxLength: 20 }}
						onChange={onChange}
					/>
					<Typography variant="subtitle1">내용 </Typography>
					<TextField
						multiline
						maxRows={4}
						value={content}
						placeholder="조금 더 자세히 계획 해봐요! 최대(1000자)"
						onClick={e => e.stopPropagation()}
						inputProps={{ maxLength: 1000 }}
						name="content"
						onChange={onChange}
					/>
				</Styles.Content>
				<Styles.ActionArea>
					<Button variant="outlined" color="error" onClick={handleClickCancel}>
						<Typography variant="h6">취소</Typography>
					</Button>
					<Button variant="contained" onClick={handleClickSubmit}>
						<Typography variant="h6">완료</Typography>
					</Button>
				</Styles.ActionArea>
			</Styles.Wrap>
		</Dialog>
	);
}

export default TodoModify;
