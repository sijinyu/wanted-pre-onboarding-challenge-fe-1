import React from 'react';
import { ButtonBase, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CancleIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Styles } from './styles';
import { TodoTitleContentIdState } from '@/repository/todo';
import { useTodos } from '@/controller/todo/useTodos';
import TodoDetail from '../Modal/TodoDetail';
import { useModalStore } from '@/store';
import { ModalsProps } from '@/store/useModalStore';

interface Props {
	item: TodoTitleContentIdState;
}
function TodoItem({ item }: Props) {
	const { openModal } = useModalStore();
	const { deleteTodo } = useTodos();
	const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		deleteTodo({ id: item.id });
	};
	const handleClick = () => {
		openModal({
			Component: TodoDetail,
			id: item.id,
		} as unknown as ModalsProps);
	};
	return (
		<Styles.Wrap onClick={handleClick}>
			<Styles.Header>
				<Styles.LeftItem>
					<Typography>{item.title}</Typography>
				</Styles.LeftItem>
				<Styles.RightItem>
					<ButtonBase disableRipple>
						<EditIcon color="action" />
					</ButtonBase>
					<ButtonBase disableRipple>
						<CancleIcon color="action" />
					</ButtonBase>
					<ButtonBase onClick={e => handleDelete(e)} disableRipple>
						<DeleteIcon color="action" />
					</ButtonBase>
				</Styles.RightItem>
			</Styles.Header>
		</Styles.Wrap>
	);
}

export default React.memo(TodoItem);
