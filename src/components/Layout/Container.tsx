import React from 'react';
import { styled, Container } from '@mui/material';
import images from '@/common/images';

const { mainBg } = images;
interface Props {
	children: React.ReactNode;
}

const StyledContainer = styled(Container)(({ theme, ...props }) => ({
	// backgroundImage: `url(${mainBg})`,
}));
function CustomContainer({ children }: Props) {
	return <StyledContainer>{children}</StyledContainer>;
}

export default CustomContainer;
