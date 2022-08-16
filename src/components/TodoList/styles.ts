import { Box, Container, Stack, styled } from '@mui/material';

const Warp = styled(Box)(({ theme }) => ({
	overflow: 'hidden',
	borderRadius: '25px',
	background: 'white',
}));
const Header = styled(Box)(({ theme }) => ({
	display: 'flex',
	minHeight: '220px',
	backgroundColor: '#6667AB',
	alignItems: 'center',
	justifyContent: 'center',
}));
const ItemAddContainer = styled(Stack)(({ theme }) => ({
	padding: '20px',
	minHeight: '300px',
	gap: '20px',
	textarea: {
		minHeight: '200px',
	},
}));

const ItemContainer = styled(Stack)(({ theme }) => ({
	padding: '20px',
}));
export const Styles = {
	Header,
	Warp,
	ItemAddContainer,
	ItemContainer,
};
