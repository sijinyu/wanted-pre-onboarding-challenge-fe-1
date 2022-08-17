import React, { useState } from 'react';
import {
	AccordionDetails,
	AccordionSummary,
	ButtonBase,
	Grid,
	Typography,
} from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CancleIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import { Styles } from './styles';
import { TodoIdState, TodoTitleContentIdState } from '@/repository/todo';
import { useInputMultiple } from '@/hooks';

import { useTodos } from '@/controller/todo/useTodos';

interface Props {
	item: TodoTitleContentIdState;
}
function TodoItem({ item }: Props) {
	const { updateTodo, deleteTodo } = useTodos();
	const navigate = useNavigate();
	const [isNotModify, setIsNotModify] = useState(true);

	const [{ title, content }, onChange, reset] = useInputMultiple({
		title: item.title,
		content: item.content,
	});

	const handeModify = () => {
		setIsNotModify(prev => !prev);
	};
	const handleModifyCancle = () => {
		setIsNotModify(true);
		reset();
	};
	const handleModfyComplete = () => {
		setIsNotModify(true);
		updateTodo({ id: item.id, title, content });
	};
	const moveDetail = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		navigate(`/${item.id}`, { state: { id: item.id } });
	};

	return (
		<Styles.Wrap
			onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
				moveDetail(e)
			}
		>
			<Grid container justifyContent="space-between">
				<Grid item>
					<Styles.LeftItem>
						<Typography>{title}</Typography>
					</Styles.LeftItem>
				</Grid>
				<Grid item>
					<Styles.RightItem>
						{isNotModify ? (
							<ButtonBase onClick={() => handeModify()} disableRipple>
								<EditIcon color="action" />
							</ButtonBase>
						) : (
							<>
								<ButtonBase onClick={() => handleModifyCancle()} disableRipple>
									<CancleIcon color="action" />
								</ButtonBase>
								<ButtonBase onClick={() => handleModfyComplete()} disableRipple>
									<CheckIcon color="action" />
								</ButtonBase>
							</>
						)}
						<ButtonBase
							onClick={() => deleteTodo({ id: item.id })}
							disableRipple
						>
							<DeleteIcon color="action" />
						</ButtonBase>
					</Styles.RightItem>
				</Grid>
			</Grid>
			<Outlet
				context={{ id: item.id, content, title, isNotModify, onChange }}
			/>
		</Styles.Wrap>
	);
}

export default React.memo(TodoItem);
