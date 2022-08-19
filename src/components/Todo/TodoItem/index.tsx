import React from 'react';
import { ButtonBase, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TodoDetail from '../Modal/TodoDetail';
import TodoModify from '../Modal/TodoModify';
import { TodoTitleContentIdState } from '@/repository/todo';
import { useTodos } from '@/controller/todo/useTodos';
import { useModalStore } from '@/store';
import { ModalsProps } from '@/store/useModalStore';
import { Styles } from './styles';

interface Props {
	item: TodoTitleContentIdState;
}
function TodoItem({ item }: Props) {
	const { openModal } = useModalStore();
	const { deleteTodo } = useTodos();
	const onDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		deleteTodo({ id: item.id });
	};

	const onUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		openModal({
			Component: TodoModify,
			id: item.id,
		} as unknown as ModalsProps);
	};
	const onClick = () => {
		openModal({
			Component: TodoDetail,
			id: item.id,
		} as unknown as ModalsProps);
	};

	return (
		<Styles.Wrap onClick={onClick}>
			<Styles.Header>
				<Styles.LeftItem>
					<Typography>{item.title}</Typography>
				</Styles.LeftItem>
				<Styles.RightItem>
					<ButtonBase disableRipple onClick={e => onUpdate(e)}>
						<EditIcon color="action" />
					</ButtonBase>
					<ButtonBase onClick={e => onDelete(e)} disableRipple>
						<DeleteIcon color="action" />
					</ButtonBase>
				</Styles.RightItem>
			</Styles.Header>
		</Styles.Wrap>
	);
}

export default React.memo(TodoItem);
