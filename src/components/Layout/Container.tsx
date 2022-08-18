import React from 'react';
import { styled, Container, ContainerProps } from '@mui/material';

const StyledContainer = styled(Container)(({ theme, ...props }) => ({
	padding: theme.spacing(3),
}));
function CustomContainer<P extends ContainerProps>({
	children,
	...props
}: ContainerProps) {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <StyledContainer {...(props as P)}>{children}</StyledContainer>;
}

export default CustomContainer;
