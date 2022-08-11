import { Box, styled } from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
	width: '100%',
	boxShadow: '0px 4px 7px -2px rgba(0,0,0,0.28)',
	borderRadius: '40px',
	padding: '20px',
}));
const LeftItem = styled(Box)(({ theme }) => ({
	width: '100%',
	input: {
		width: '100%',
	},
}));
const RightItem = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	gap: '12px',
}));
export const Styles = {
	Container,
	LeftItem,
	RightItem,
};
