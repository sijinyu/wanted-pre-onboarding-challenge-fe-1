import { Accordion, Box, Stack, styled } from '@mui/material';

const Wrap = styled(Box)(({ theme }) => ({
	width: '100%',
	boxShadow: '0px 4px 7px -2px rgba(0,0,0,0.28)',
	cursor: 'pointer',
	borderRadius: theme.spacing(5),
	padding: theme.spacing(2.5),
	background: theme.palette.primary.main,
}));
const Header = styled(Stack)(({ theme }) => ({
	flexDirection: 'row',
}));
const LeftItem = styled(Box)(({ theme }) => ({
	flexGrow: 1,
	flexBasis: '100px',
	wordBreak: 'break-all',
}));
const RightItem = styled(Box)(({ theme }) => ({}));

export const Styles = {
	Wrap,
	Header,
	LeftItem,
	RightItem,
};
