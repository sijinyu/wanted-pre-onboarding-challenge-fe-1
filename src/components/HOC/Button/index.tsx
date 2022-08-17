/* eslint-disable react/jsx-props-no-spreading */
import { ButtonBase, ButtonBaseProps, styled } from '@mui/material';
import React from 'react';

interface ButtonProps extends ButtonBaseProps {
	[key: string]: any;
	children: React.ReactNode;
}

const StylesButton = styled(ButtonBase)(({ theme, ...props }) => ({
	background: theme.palette.primary.main,
	width: '100%',
	minHeight: theme.spacing(8),
	borderRadius: theme.spacing(4),
	maxWidth: theme.spacing(30),
}));
export default function Button({ children, ...rest }: ButtonProps) {
	return <StylesButton {...rest}>{children}</StylesButton>;
}
