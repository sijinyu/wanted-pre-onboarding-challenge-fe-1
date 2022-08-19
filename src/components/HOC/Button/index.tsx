/* eslint-disable react/jsx-props-no-spreading */
import { Button, ButtonProps, styled } from '@mui/material';
import React from 'react';

interface Props extends ButtonProps {
	[key: string]: any;
	children: React.ReactNode;
}

const StylesButton = styled(Button)(({ theme, ...props }) => ({
	width: '100%',
	minHeight: theme.spacing(7),
	borderRadius: theme.spacing(4),
	maxWidth: theme.spacing(30),
}));
export default function StyleButton({ children, ...rest }: Props) {
	return <StylesButton {...rest}>{children}</StylesButton>;
}
