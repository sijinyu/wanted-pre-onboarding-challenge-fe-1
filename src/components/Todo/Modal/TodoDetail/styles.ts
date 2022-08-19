import { Box, Stack, styled } from '@mui/material';

const Wrap = styled(Stack)(({ theme }) => ({
	overflow: 'hidden',
	minWidth: '500px',
	minHeight: '300px',
	opacity: 0.8,
	'& fieldset': {
		border: 'none',
	},
}));
const Header = styled(Stack)(({ theme }) => ({
	padding: theme.spacing(1),
	flexDirection: 'row',
	justifyContent: 'flex-end',
	gap: theme.spacing(2),
}));
const Content = styled(Stack)(({ theme }) => ({}));
export const Styles = {
	Wrap,
	Header,
};
