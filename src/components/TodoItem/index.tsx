import React, { useState } from 'react';
import { ButtonBase, Grid, Typography } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CancleIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import { Styles } from './styles';
import {
	TodoTitleContentIdState,
	TodoTitleContentState,
} from '@/repository/todo';
import { useInputMultiple } from '@/hooks';

interface ITodoItem {
	item: TodoTitleContentIdState;
	onUpdate: any;
	onDelete: any;
}
function TodoItem({ item, onUpdate, onDelete }: ITodoItem) {
	const navigate = useNavigate();
	const [isNotModify, setIsNotModify] = useState(true);
	const [prevState, setPrevState] = useState<TodoTitleContentState>();
	const [{ title, content }, onChange, reset] = useInputMultiple({
		title: item.title,
		content: item.content,
	});
	const handeModify = () => {
		setIsNotModify(false);
		setPrevState({ title, content });
	};
	const handleModifyCancle = () => {
		setIsNotModify(true);
		reset(prevState);
	};
	const handleModfyComplete = () => {
		setIsNotModify(true);
		onUpdate({ id: item.id, title, content });
	};
	const moveDetail = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		navigate(`/${item.id}`, { state: { id: item.id } });
	};
	return (
		<Styles.Container>
			<Grid
				container
				justifyContent="space-between"
				onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
					moveDetail(e)
				}
			>
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
						<ButtonBase onClick={() => onDelete({ id: item.id })} disableRipple>
							<DeleteIcon color="action" />
						</ButtonBase>
					</Styles.RightItem>
				</Grid>
			</Grid>
			<Outlet
				context={{ id: item.id, content, title, isNotModify, onChange }}
			/>
		</Styles.Container>
	);
}

export default React.memo(TodoItem);
