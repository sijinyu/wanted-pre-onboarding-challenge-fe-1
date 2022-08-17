import { Accordion, Box, styled } from '@mui/material';

const Wrap = styled(Box)(({ theme }) => ({
	width: '100%',
	boxShadow: '0px 4px 7px -2px rgba(0,0,0,0.28)',
	borderRadius: theme.spacing(5),
	padding: theme.spacing(2.5),
	background: theme.palette.primary.main,
}));
const LeftItem = styled(Box)(({ theme }) => ({
	width: '100%',
	wordBreak: 'break-all',
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
	Wrap,
	LeftItem,
	RightItem,
};
