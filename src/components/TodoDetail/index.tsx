/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { Box, Button, Input, Stack } from '@mui/material';

interface ITodoItem {
	type?: any;
	item?: any;
	onUpdate?: any;
	onDelete?: any;
	onCreate?: any;
}
export default React.memo(
	({ type, item, onUpdate, onDelete, onCreate }: ITodoItem) => {
		const [modify, setModify] = useState(false);

		const [input, setInput] = useState({
			title: item.title,
			content: item.content,
		});
		const handeModify = (isModify: boolean) => {
			if (isModify) {
				onUpdate({ id: item.id, title: input.title, content: input.content });
				setModify(!modify);
			} else {
				setModify(!modify);
			}
		};

		const onChange = (e: { target: { value: any; name: any } }) => {
			const { value, name } = e.target;
			setInput({
				...input,
				[name]: value,
			});
		};

		const { title, content } = input;
		return (
			<Box>
				<Box component="a">
					<Stack spacing={1} mb={3}>
						<span>제목</span>
						<Input
							disabled={!modify}
							name="title"
							value={title}
							onChange={onChange}
						/>
					</Stack>
				</Box>
				<Stack direction="row">
					<Input
						disabled={!modify}
						fullWidth
						value={content}
						name="content"
						onChange={onChange}
					/>
					{type === 'add' ? (
						<Button onClick={() => onCreate({ title, content })}>추가</Button>
					) : (
						<>
							<Button onClick={() => handeModify(modify)}>
								{modify ? '완료' : '수정'}
							</Button>
							<Button onClick={() => onDelete({ id: item.id })}>삭제</Button>
						</>
					)}
				</Stack>
			</Box>
		);
	},
);
